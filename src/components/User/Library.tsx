import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

type Data = {
    text: string;
    index: string;
    title: string;
    _id: string;
}

export const Library: React.FC = () => {
    const [items, setItems] = useState<Data[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/novel')
                console.log(response)
                setItems(response.data)
            } catch (err) {
                console.log(err);
            }
        }
        getAllData();
    }, [])

    return (
        <Div>
            <H1>作品一覧</H1>
            <ChapterContainer>
                {items.map((item) => (
                    <Chapter
                        key={item._id}
                        onClick={() => navigate("/index", {
                            state: { id: item._id, title: item.title, index: item.index, text: item.text }
                        })}>
                        <H2>{item.title}</H2>
                    </Chapter>
                ))}
            </ChapterContainer>
        </Div>
    )
}

const Div = styled.div`
    display: grid;
    min-height: calc(100vh - 100px)
    grid-template-column: (2, 1fr);
    grid-gap: 10px;
    border: 1px solid #000;
`

const H1 = styled.h1`
    text-align: center;
    margin: 20px 0 50px 0;
`

const ChapterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 50%;
    margin: 0 auto;
`

const Chapter = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
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
`

const H2 = styled.h2`
    text-align: center;
`