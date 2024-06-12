import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../../main";
import { FormType } from "../../../../types/types";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Edit3: React.FC = () => {

    const { bool, novelUrl } = useContext(AppContext);
    const location = useLocation();
    const { text: stateText } = location.state;
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormType>();
    const [text, setText] = useState(stateText);

    const onSubmit = async () => {
        const response = await axios.patch(`${novelUrl}/text?oldText=${stateText}&newText=${text}`)
        console.log(response);
        alert('修正が完了しました。');
        reset();
    }

    return (
        <Div>
            <Form onSubmit={handleSubmit(onSubmit)} className={bool ? 'dark-mode' : 'light-mode'}>
                <H2>本文編集</H2>
                <Contents>
                    <label>本文</label>
                    <Textarea {...register('text', { required: '入力が必須です' })}
                        className={bool ? 'dark-mode' : 'light-mode'}
                        value={text}
                        onChange={(e) => setText(e.target.value)}></Textarea>
                    <P>{errors.text?.message as React.ReactNode}</P>
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
    height: 600px;
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

const Textarea = styled.textarea`
    width: 640px;
    height: 400px;
    padding: 5px;
    resize: none;

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