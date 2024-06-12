import React, { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../main";
import {LoginForm} from "../../../src/types/types";

export const Login: React.FC = () => {

    const {bool, loginUrl} = useContext(AppContext);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const navigate = useNavigate();

    const onSubmit = async (data: LoginForm) => {
        try {
            const response = await axios.post(loginUrl,{
                adminId: data.text,
                password: data.password
            })
            const token = response.data.token;
            Cookies.set("token", token, {expires: 1});
            navigate('/admin');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)} className={bool ? 'dark-mode' : 'light-mode'}>
                <H1>Login Form</H1>
                <Id>
                    <Label htmlFor="管理者ID">管理者ID</Label>
                    <Input type="text" {...register('text', { required: "管理者IDを入力して下さい", minLength: { value: 4, message: "4文字以上で入力して下さい" } })} />
                    <p style={{ color: 'red' }}>{errors.text?.message as React.ReactNode}</p>
                </Id>
                <Pass>
                    <Label htmlFor="パスワード">パスワード</Label>
                    <Input type="password" {...register('password', { required: "パスワードを入力して下さい", minLength: { value: 4, message: "4文字以上で入力して下さい" } })} />
                    <p style={{ color: 'red' }}>{errors.password?.message as React.ReactNode}</p>
                </Pass>
                <Button type="submit" className={bool ? 'dark-mode' : 'light-mode'}>ログイン</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    height: calc(100vh - 100px);
`;

const Form = styled.form`
    width: 500px;
    height: 450px;
    margin: 0 auto;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
    background: #F6F7F8;

    &.dark-mode {
        background: var(--contents-BgColor);
        color: #fff;
        border: 1px solid #fff;
        box-shadow: none;
    }

    @media (max-width: 510px) {
        width: 400px;
        height: 350px;
    }

    @media (max-width: 480px) {
        width: 300px;
        height: 350px;
    }
`;

const H1 = styled.h1`
    margin-bottom: 40px;
    font-size: 40px;

    @media (max-width: 510px) {
        font-size: 30px;
    }
`;

const Id = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const Pass = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const Label = styled.label`
    font-size: 18px;

    @media (max-width: 510px) {
        font-size: 14px;
    }
`;

const Input = styled.input`
    width: 200px;
    height: 25px;

    &.dark-mode {
        background: #1f1f1f;
        color: #fff;
    }
`;

const Button = styled.button`
    width: 100px;

    &.dark-mode {
        background: #1f1f1f;
        color: #fff;
        box-shadow: none;
        border: 1px solid #fff;
    }
`;