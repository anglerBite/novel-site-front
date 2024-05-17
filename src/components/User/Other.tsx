import React from "react";
import styled from "styled-components";

export const Other: React.FC = () => {
    return (
        <Container>
            <A href="#">リンク1</A>
            <A href="#">リンク2</A>
            <A href="#">リンク3</A>
        </Container>
    )
}

const Container = styled.div`
    width: 400px;
    height: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const A = styled.a`
    text-decoration: none;
    color: #000;
    fontSize: 30px;
    display: block;
    margin: 20px;
    padding: 10px;
`