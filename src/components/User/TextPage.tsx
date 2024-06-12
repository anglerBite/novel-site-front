import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";
import Cookies from "js-cookie";
import axios from "axios";
import { AppContext } from "../../main";

export const TextPage: React.FC = () => {

    const {novelUrl} = useContext(AppContext)
    const navigate = useNavigate();
    const location = useLocation();
    const { index, text, id } = location.state;

    const Edit = () => {
        if (confirm('編集しますか？')) {
            navigate('/edit', {
                state: { path: '/text', text: text }
            });
        }
    }

    const Delete = async (id: string) => {
        if (confirm('削除してもいいですか？')) {
            await axios.delete(`${novelUrl}/${id}`);
            alert('削除が完了しました');
            navigate('/library')
        } else {
            return
        }
    }


    const token = Cookies.get('token');

    return (
        <Container>
            <H1>{index}</H1>
            <P>{text}</P>
            {token ?
                <Button>
                    <button onClick={Edit}>編集</button>
                    <button style={{ marginLeft: '5px' }} onClick={() => Delete(id)}>削除</button>
                </Button>
                : null}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 600px;
    min-height: calc(100vh - 140px);
    margin: 20px auto;
    // border: 1px solid #000;
    overflow: scroll;

    @media (max-width: 750px) {
        width: 500px;
    }

    @media (max-width: 510px) {
        width: 400px;
    }
`;

const H1 = styled.h1`
    text-align: center;
    margin: 20px 0;

    @media (max-width: 750px) {
        font-size: 26px;
    }

    @media (max-width: 510px) {
        font-size: 22px;
    }
`;

const P = styled.p`
    font-size: 20px;
    margin: 20px 0;
    padding: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;

    @media (max-width: 510px) {
        font-size: 18px;
    }

    @media (max-width: 510px) {
        font-size: 15px;
    }
`;

const Button = styled.div`
    position: absolute;
    top: 30px;
    right: 50px;

    @media (max-width: 510px) {
        top: 30px;
        right: 0px;
    }
`;