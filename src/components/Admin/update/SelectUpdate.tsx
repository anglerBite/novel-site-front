import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SelectUpdate: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <Novel onClick={() => navigate("/updatenovel")}>
                    <H2>作品更新</H2>
                </Novel>
                <ModNovel onClick={() => navigate("/modificationnovel")}>
                    <H2>作品修正</H2>
                </ModNovel>
                <About onClick={() => navigate("/updateabout")}>
                    <H2>Aboutページ<br />更新</H2>
                </About>
                <ModAbout onClick={() => navigate("/modificationabout")}>
                    <H2>Aboutページ<br />修正</H2>
                </ModAbout>
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

const ModNovel = styled.div`
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

        const ModAbout = styled.div`
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