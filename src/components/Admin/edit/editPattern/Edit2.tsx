import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../../main";
import { FormType } from "../../../../types/types";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const Edit2: React.FC = () => {

    const navigate = useNavigate();
    const { bool, novelUrl } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm<FormType>();
    const location = useLocation();
    const { index: stateIndex } = location.state;
    const [index, setIndex] = useState(stateIndex)

    const onSubmit = async () => {
        try {
            const response = await axios.patch(`${novelUrl}/index?oldIndex=${stateIndex}&newIndex=${index}`);
            console.log(response);
            alert('修正が完了しました。');
            navigate('/index', {
                //ここから
                state: {title: index}
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Div>
            <Form onSubmit={handleSubmit(onSubmit)} className={bool ? 'dark-mode' : 'light-mode'}>
                <H2>サブタイトル編集</H2>
                <Contents>
                    <label>サブタイトル</label>
                    <Input type="text" {...register('index', { required: '入力は必須です' })}
                        className={bool ? 'dark-mode' : 'light-mode'}
                        value={index}
                        onChange={(e) => setIndex(e.target.value)}
                    />
                    <P>{errors.index?.message as React.ReactNode}</P>
                </Contents>
                <Button type="submit">編集完了</Button>
            </Form>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 700px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #000;
    background: var(--base-backgroundColor);

    &.dark-mode {
        background: var(--contents-BgColor);
        color: #fff;
        border: 1px solid #fff;
        box-shadow: none;
    }

    @media (max-width: 720px) {
        width: 500px;
    }

    @media (max-width: 510px) {
        width: 300px;
    }
`;

const H2 = styled.h2`
    text-align: center;

    @media (max-width: 510px) {
        font-size: 20px;
    }
`;

const Contents = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
    width: 650px;

    &.dark-mode {
        background: #000;
        color: #fff;
    }

    @media (max-width: 720px) {
        width: 450px;
    }

    @media (max-width: 510px) {
        width: 250px;
    }
`;

const Button = styled.button`
margin-bottom: 20px;
`;

const P = styled.p`
color: red;
font-size: 10px;
`;