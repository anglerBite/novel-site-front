import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import { AppContext } from "../../main";
import { Data } from "../../../src/types/types";

export const Library: React.FC = () => {
    const [items, setItems] = useState<Data[]>([]);
    const { bool, novelUrl } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllData = async () => {
            try {
                const response = await axios.get("https://novelapp-back-439cdb9b2078.herokuapp.com/novel")
                setItems(response.data);
                console.log(response.data);
                const data = response.data;
                const uniqueData = data.reduce((only: Data[], current: Data) => {
                    const find = only.find(items => items.title === current.title);
                    if (!find) {
                        return only.concat([current]);
                    } else {
                        return only;
                    }
                }, [])
                setItems(uniqueData);
            } catch (err) {
                console.log(err);
            }
        }
        getAllData();
    }, []);
    const token = Cookies.get('token');

    const Edit = (title: string) => {
        if (confirm('編集しますか？')) {
            navigate('/edit', {
                state: { path: '/library', title: title }
            });
        }
    }

    const DeleteAll = async (title: string) => {
        if (confirm('削除してもいいですか？')) {
            await axios.delete(`${novelUrl}?title=${title}`);
            alert('削除が完了しました');
            location.reload();
        } else {
            return
        }
    }

    return (
        <Div>
            <H1>作品一覧</H1>
            <ChapterContainer>
                {items.map((item) => (
                    <div key={item._id} style={{ position: 'relative' }}>
                        {token ?
                            <Button>
                                <button onClick={() => Edit(item.title)}>編集</button>
                                <button style={{ marginLeft: '5px' }} onClick={() => DeleteAll(item.title)}>削除</button>
                            </Button>
                            :
                            null}
                        <Chapter
                            onClick={() => navigate("/index", {
                                state: { title: item.title }
                            })}
                            className={bool ? 'dark-mode' : 'light-mode'}>
                            <H2>{item.title}</H2>
                        </Chapter>
                    </div>
                ))}
            </ChapterContainer>
        </Div>
    )
}

const Div = styled.div`
    min-height: calc(100vh - 100px)
    border: 1px solid #000;
`

const H1 = styled.h1`
    text-align: center;
    margin: 20px 0 50px 0;
`;

const ChapterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 900px;
    margin: 0 auto;
    place-items: center;
    // border: 1px solid #000;
    gap: 50px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        width: 600px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        width: 400px
    }
`;

const Chapter = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    border-radius: var(--radius);
    background: var(--base-backgroundColor);
    border: 1px solid #000;
    box-shadow: var(--shadow);
    transition: all 0.3s;
    cursor: pointer;
        &:hover {
            box-shadow: var(--shadow-hover);
            transform: translate(3px);
        }
        &:active {
            box-shadow: var(--shadow-active);
        }
        &.dark-mode {
            background: var(--contents-BgColor);
            color: var(--dark-fontColor);
            border: 1px solid #fff;
            box-shadow: none;
            border: 1px solid var(--dark-borderColor);
        }
        &.dark-mode:hover {
            background: var(--dark-hoverContentColor);
            color: var(--dark-hoverFontColor)
            border: 1px solid var(--dark-hoverBorderColor);
        }
`

const Button = styled.div`
    position: absolute;
    top: -30px;
    right: 0px;
`

const H2 = styled.h2`
    padding: 30px 5px 5px 5px;
    overflow-wrap: break-word;
    word-break: break-word;
`