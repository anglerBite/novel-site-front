import React, { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";
import Cookies from "js-cookie";
import { AppContext } from "../../main";
import axios from "axios";
import { Data } from "../../../src/types/types";

export const IndexPage: React.FC = () => {

    const { Delete, novelUrl } = useContext(AppContext);
    const [data, setData] = useState<Data[]>([]);
    console.log(data);
    const navigate = useNavigate();
    const location = useLocation();
    const { id, title } = location.state;
    console.log(title);
    const token = Cookies.get('token');


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`${novelUrl}/${title}`)
            console.log(response);
            setData(response.data);
        }
        getData();
    }, []);

    const Edit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: string) => {
        e.stopPropagation();

        if (confirm('編集しますか？')) {
            navigate('/edit', {
                state: { path: '/index', index: index }
            });
        } else {
            e.stopPropagation();
        }
    }

    return (
        <Container>
            <H1>{title}</H1>
            <P>目次</P>
            <Ol>
                {data.map(items => (
                    <Li key={items._id} onClick={() => navigate('/text', {
                        state: { index: items.index, text: items.text, id: items._id }
                    })}>{items.index}
                        {token ?
                            <Button>
                                <button onClick={(e) => Edit(e, items.index)}>編集</button>
                                <button style={{ marginLeft: '5px' }} onClick={() => Delete(id)}>削除</button>
                            </Button>
                            :
                            null}
                    </Li>
                ))}
            </Ol>
        </Container>
    )
}

const Container = styled.div`
    width: 500px;
    min-height: calc(100vh - 120px);
    margin: 20px auto;
    position: relative;
    // border: 1px solid #000;
    
    @media (max-width: 510px) {
        width: 300px;
    }
    `;
    
    const H1 = styled.h1`
    text-align: center;
    
    @media (max-width: 510px) {
        font-size: 26px;
    }
}
`;

const P = styled.p`
    text-align: center;
    font-size: 25px;
    margin: 20px 0;

    @media (max-width: 510px) {
        font-size: 20px;
    }
`;

const Ol = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid #000;
`;

const Li = styled.li`
    position: relative;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 18px;
    
    &:hover::after {
        content: '';
        width: 100%;
        height: 1px;
        background: #000;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`;

const Button = styled.div`
    position: absolute;
    top: -2px;
    right: -80px;
`;