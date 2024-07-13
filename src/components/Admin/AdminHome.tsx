import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../main";

export const AdminHome: React.FC = () => {

    const {bool} = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <Novel onClick={() => navigate("/createnovel")} className={bool ? 'dark-mode' : 'light-mode'}>
                    <H2>新規作成</H2>
                </Novel>
                <Add onClick={() => navigate("/addnovel")} className={bool ? 'dark-mode' : 'light-mode'}>
                    <H2>更新</H2>
                </Add>
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
        &.dark-mode {
            background: #000;
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

const Add = styled.div`
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
            background: #000;
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

const H2 = styled.h2`
        text-align: center;
        `