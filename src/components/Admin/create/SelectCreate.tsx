import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SelectCreate: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <Novel onClick={() => navigate("/createnovel")}>
                    <H2>作品新規作成</H2>
                </Novel>
                <About onClick={() => navigate("/createabout")}>
                    <H2>Aboutページ<br />新規追加</H2>
                </About>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
`

const Novel = styled.div`
    width: 200px;
    height: 100px;
    margin: 0 auto;
    border: 1px solid #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    background: var(--base-backgroundColor);
    box-shadow: var(--shadow);
    transition: all 0.3s;
        &:hover {
            box-shadow: var(--shadow-hover);
            transform: translate(4px);
        }
        &:active {
            box-shadow: var(--shadow-active)
        }
`

const About = styled.div`
    width: 200px;
    height: 100px;
    margin: 0 auto;
    border: 1px solid #000;
    cursor: pointer;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    background: var(--base-backgroundColor);
    box-shadow: var(--shadow);
    transition: all 0.3s;
        &:hover {
            box-shadow: var(--shadow-hover);
            transform: translate(4px);
        }
        &:active {
            box-shadow: var(--shadow-active)
        }
        `

const H2 = styled.h2`
        text-align: center;
        `