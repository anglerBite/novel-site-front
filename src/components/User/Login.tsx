import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

type LoginForm = {
    text: string;
    password: string;
}

export const Login: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

    const onSubmit = (data: LoginForm) => {
        console.log(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <H1>Login Form</H1>
                <Id>
                    <Label htmlFor="管理者ID">管理者ID</Label>
                    <Input type="text" {...register('text', { required: "管理者IDを入力して下さい", minLength: { value: 8, message: "8文字以上で入力して下さい" } })} />
                    <p style={{ color: 'red' }}>{errors.text?.message as React.ReactNode}</p>
                </Id>
                <Pass>
                    <Label htmlFor="パスワード">パスワード</Label>
                    <Input type="password" {...register('password', { required: "パスワードを入力して下さい", minLength: { value: 8, message: "8文字以上で入力して下さい" } })} />
                    <p style={{ color: 'red' }}>{errors.password?.message as React.ReactNode}</p>
                </Pass>
                <Button type="submit">ログイン</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    height: calc(100vh - 100px);
`

const Form = styled.form`
    width: 500px;
    margin: 30px auto;
    height: 450px;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--shadow);
    background: #F6F7F8;
`

const H1 = styled.h1`
    margin: 40px 0;
    font-size: 40px;
`

const Id = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    `

const Pass = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const Label = styled.label`
    font-size: 18px;
`

const Input = styled.input`
    width: 200px;
    height: 25px;
`

const Button = styled.button`
    width: 100px;
`