import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../main";
import { Data } from "../../../src/types/types";

export const Search: React.FC = () => {

    const { bool, novelUrl } = useContext(AppContext);
    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [allData, setAllData] = useState<Data[]>([]);

    useEffect(() => {
        const getAllData = async () => {
            const response = await axios.get(novelUrl);
            setAllData(response.data);
        }
        getAllData();
    }, []);

    const filterTitle = allData.filter(item => item.title.includes(text));
    const onlyTitle = filterTitle.reduce((only: Data[], current: Data) => {
        const find = only.find(items => items.title === current.title);
        if (!find) {
            return only.concat([current]);
        } else {
            return only;
        }
    }, [])

    return (
        <Div>
            <Container className={bool ? 'dark-mode' : 'light-mode'}>
                <P>検索したいタイトルを入力して下さい。</P>
                <Box>
                    <Input type="text" placeholder="ここに入力" onChange={(e) => setText(e.target.value)} value={text} />
                </Box>
                {text && (
                    <Ul>
                        {onlyTitle ?
                            onlyTitle.map(items => (
                                <Li key={items._id} onClick={() => navigate('/index', {
                                    state: { title: items.title }
                                })}>{items.title}</Li>
                            )) : null}
                    </Ul>)}
            </Container>
        </Div>
    )
}

const Div = styled.div`
    min-width: 70%;
    height: calc(100vh - 100px);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    min-width: 70%;
    min-height: 500px;
    border: 1px solid #000;
    margin: 0 auto;
    background: var(--base-backgroundColor);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: all 0.1s linear;
    
    &.dark-mode {
        background: var(--contents-BgColor);
        color: #fff;
        border: 1px solid #fff;
        box-shadow: none;
    }
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Ul = styled.ul`
    // border: 1px solid #000;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Input = styled.input`
    &.dark-mode {
        background: #1f1f1f;
        color: #fff;
    }
`

const Li = styled.li`
    cursor: pointer;
    margin-top: 5px;
`;

const P = styled.p`
    text-align: center;
    margin-top: 20px;
    padding: 3px;

    @media (max-width: 600px) {
        font-size: 13px;
    }
`;