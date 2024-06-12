import styled from "styled-components";
import { Edit1 } from "./editPattern/Edit1";
import { Edit2 } from "./editPattern/Edit2";
import { Edit3 } from "./editPattern/Edit3";
import { useLocation } from "react-router-dom";

export const EditHome: React.FC = () => {

    const location = useLocation();
    const { path } = location.state;
    console.log(path);

    return (
        <Container>
            {path === '/library' ? (
                <Edit1 />
            ) :
                path === '/index' ? (
                    <Edit2 />
                ) : (
                    <Edit3 />
                )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
