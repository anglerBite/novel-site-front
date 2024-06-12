import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../../main";
import { FormType } from "../../../types/types";

export const CreateNovel: React.FC = () => {

    const { bool, novelUrl } = useContext(AppContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormType>();

    const onSubmit = async (data: FormType) => {
        try {
            await axios.post(novelUrl, data);
            alert('投稿完了しました');
            reset();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)} className={bool ? 'dark-mode' : 'light-mode'}>
                <H2>新規作成</H2>
                <Contents>
                    <label>タイトル</label>
                    <Input type="text" {...register('title', { required: '入力は必須です。' })} className={bool ? 'dark-mode' : 'light-mode'} />
                    <P>{errors.title?.message as React.ReactNode}</P>
                </Contents>
                <Contents>
                    <label>サブタイトル</label>
                    <Input type="text" {...register('index', { required: '入力は必須です' })} className={bool ? 'dark-mode' : 'light-mode'} />
                    <P>{errors.index?.message as React.ReactNode}</P>
                </Contents>
                <Contents>
                    <label>本文</label>
                    <Textarea {...register('text', { required: '入力が必須です' })} className={bool ? 'dark-mode' : 'light-mode'}></Textarea>
                    <P>{errors.text?.message as React.ReactNode}</P>
                </Contents>
                <Button type="submit">投稿</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 700px;
    min-height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
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

    @media (max-width: 710px) {
        width: 500px;
    }

    @media (max-width: 510px) {
        width: 300px;
    }
`;

const H2 = styled.h2`
    text-align: center;
    margin-top: 20px;

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
        background: #1f1f1f;
        color: #fff;
    }

    @media (max-width: 710px) {
        width: 450px;
    }

    @media (max-width: 510px) {
        width: 250px;
    }
`;

const Textarea = styled.textarea`
    width: 640px;
    height: 400px;
    padding: 5px;
    resize: none;

    &.dark-mode {
        background: #1f1f1f;
        color: #fff;
    }

    @media (max-width: 710px) {
        width: 440px;
    }

    @media (max-width: 510px) {
        width: 240px;
    }
`;

const Button = styled.button`
    margin-bottom: 20px;
`;

const P = styled.p`
    color: red;
    font-size: 10px;
`;