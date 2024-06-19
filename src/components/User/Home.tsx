import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../main";

export const Home: React.FC = () => {

    const { bool } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <Novel onClick={() => navigate("/library")} className={bool ? 'dark-mode' : 'light-mode'}>
                    <H2>小説</H2>
                </Novel>
                <Image onClick={() => navigate("/*")} className={bool ? 'dark-mode' : 'light-mode'}>
                    <H2>Picture</H2>
                </Image>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
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
        &.dark-mode {
            background: var(--contents-BgColor);
            color: var(--dark-fontColor);
            box-shadow: none;
            border: 1px solid var(--dark-borderColor);
        }
        &.dark-mode:hover {
            background: var(--dark-hoverContentColor);
            color: var(--dark-hoverFontColor);
            border: 1px solid var(--dark-hoverBorderColor);
        }
        `

const Image = styled.div`
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
        &.dark-mode {
            background: var(--contents-BgColor);
            color: var(--dark-fontColor);
            box-shadow: none;
            border: 1px solid #fff;
            border: 1px solid var(--dark-borderColor);
        }
        &.dark-mode:hover {
            background: var(--dark-hoverContentColor);
            color: var(--dark-hoverFontColor);
            border: 1px solid var(--dark-hoverBorderColor);
        }
        `

const H2 = styled.h2`
        text-align: center;
        `