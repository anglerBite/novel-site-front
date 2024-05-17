import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

type Data = {
    index: string;
    text: string;
    title: string;
    __v: 0
    _id: string;
}

export const UpdateNovel: React.FC = () => {

    const [data, setData] = useState<Data[]>([]);
    const [text, setText] = useState('');

    useEffect(() => {
        const getTitle = async () => {
            try {
                const response = await axios.get('http://localhost:3000/novel')
                setData(response.data)
            } catch (err) {
                console.log(err);
            }
        }
        getTitle();
    }, [])

    return (
        <Container>
            <Form action="">
                <h2 style={{textAlign: 'center'}}>更新</h2>
                <Contents>
                    <label>タイトル</label>
                    <select>
                        <option value={text} onChange={(e) => setText(e.target.value)}>選択して下さい</option>
                        {data.map((items) => (
                            <option key={items._id}>{items.title}</option>
                        ))}
                    </select>
                </Contents>
                <Contents>
                    <label>サブタイトル</label>
                    <input type="text" />
                </Contents>
                <Contents>
                    <label>本文</label>
                    <textarea name="" id="" style={{ height: '400px' }}></textarea>
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