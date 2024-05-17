import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';


export const Headers: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header>
                <H1 onClick={() => navigate('/')}>Bulk</H1>
                <Ul>
                    <Li>
                        <StyledLink to='/library'>Library</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to='/about'>About</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to='/search'>Search</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to='/login'>Login</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to='/Admin'>Admin</StyledLink>
                    </Li>
                    {/* LoginとAdminは状態で切り替え,AdminをクリックするとAdminHomeへ飛ぶ */}
                </Ul>
            </Header>
        </>
    )
}


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: var(--base-backgroundColor);
    border-bottom: 2px solid #000;
    height: 100px
`

const H1 = styled.h1`
    color: var(--base-fontcolor);
    padding: 25px;
    text-align: center;
    cursor: pointer;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-right: 10px;
`

const Li = styled.li`
    list-style: none;
    margin-left: 60px;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: var(--base-fontColor);
    &.active {
        border-bottom: 1px solid currentColor
    }
`
