import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const AdminHome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
        <Container>
            <Contents>
                <Novel onClick={() => navigate("/selectcreate")}>
                    <H2>新規作成</H2>
                </Novel>
                <Delete onClick={() => navigate("/selectdelete")}>
                    <H2>削除</H2>
                </Delete>
                <Update onClick={() => navigate("/selectupdate")}>
                    <H2>更新</H2>
                </Update>
            </Contents>
        </Container>
        </>
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

const Delete = styled.div`
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
        
const Update = styled.div`
    height: 100px;
    width: 200px;
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
            transform: translate(4px)
        }
        &:active {
            box-shadow: var(--shadow-active)
        }
        `
        
        const H2 = styled.h2`
        text-align: center;
        `