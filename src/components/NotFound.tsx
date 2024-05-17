import React from "react";
import styled from "styled-components";

export const NotFound: React.FC = () => {
    return (
        <Div>
            <h1 style={{textAlign: 'center'}}>Not found</h1>
        </Div>
    )
}

const Div = styled.div`
    display: grid;
    place-items: center;
    height: calc(100vh - 100px);
`