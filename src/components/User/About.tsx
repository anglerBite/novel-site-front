import React from "react"
import styled from "styled-components"

export const About: React.FC = () => {

    return (
        <Div>
            <Container>
                <h1 style={{ textAlign: 'center' }}>About</h1>
                <div style={{ textAlign: 'center' }}>
                    <p>ここに入力</p>
                </div>
            </Container>
        </Div>
    )
}

const Div = styled.div`
    width: 70%;
    height: calc(100vh - 100px);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 70%;
    min-height: 500px;
    border: 1px solid #000;
    background: var(--base-backgroundColor);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
`