import styled from "styled-components"

export const CreateNovel = () => {

    return (
        <Container>
            <Form action="">
            <h2 style={{textAlign: 'center'}}>新規作成</h2>
                <Contents>
                    <label>タイトル</label>
                    <input type="text" />
                </Contents>
                <Contents>
                    <label>サブタイトル</label>
                    <input type="text" />
                </Contents>
                <Contents>
                    <label>本文</label>
                    <textarea name="" id="" style={{height: '400px'}}></textarea>
                </Contents>
                <button type="submit">投稿</button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 750px;
    min-height: calc(100vh - 150px);
    margin: 10px auto;
    border: 1px solid #000;
    border-radius: 5px;
    background: var(--base-backgroundColor);
`

const Form = styled.form`
    width: 700px;
    min-height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    `
    
const Contents = styled.div`
    display: flex;
    flex-direction: column;
`