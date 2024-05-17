import React from "react"
import styled from "styled-components"

export const Search: React.FC = () => {
    return (
        <Div>
            <Container>
                <Box>
                    <input type="text" placeholder="ここに入力" />
                    <button>Search</button>
                </Box>
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
    margin: 0 auto;
    background: var(--base-backgroundColor);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`