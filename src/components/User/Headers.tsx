import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AppContext } from '../../main';

export const Headers: React.FC = () => {

    const {bool} = useContext(AppContext);

    const navigate = useNavigate();
    const token = Cookies.get('token');

    const logout = () => {
        if (confirm('ログアウトしますか')) {
            Cookies.remove('token');
            navigate('/login')
        } else {
            return;
        }
    }

    return (
        <Header className={bool ? 'dark-mode' : 'light-mode'}>
            <H1 onClick={() => navigate('/')}>Novel</H1>
            <Ul>
                <Li className={bool ? 'dark-mode' : 'light-mode'}>
                    <StyledLink to='/library' className={bool ? 'dark-mode' : 'light-mode'}>Library</StyledLink>
                </Li>
                <Li className={bool ? 'dark-mode' : 'light-mode'}>
                    <StyledLink to='/search' className={bool ? 'dark-mode' : 'light-mode'}>Search</StyledLink>
                </Li>
                {
                    !token ?
                        <Li className={bool ? 'dark-mode' : 'light-mode'}>
                            <StyledLink to='/login' className={bool ? 'dark-mode' : 'light-mode'}>Login</StyledLink>
                        </Li>
                        :
                        <>
                            <Li className={bool ? 'dark-mode' : 'light-mode'}>
                                <StyledLink to='/Admin' className={bool ? 'dark-mode' : 'light-mode'}>Admin</StyledLink>
                            </Li>
                            <Li className={bool ? 'dark-mode' : 'light-mode'}>
                                <A onClick={logout} className={bool ? 'dark-mode' : 'light-mode'}>Logout</A>
                            </Li>
                        </>
                }
            </Ul>
        </Header>
    )
}


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: var(--base-backgroundColor);
    border-bottom: 2px solid #000;
    height: 100px;
    
    &.dark-mode {
        background: #1f1f1f;
        color: #fff;
        border-bottom: 2px solid #fff;
    }
`;

const H1 = styled.h1`
    color: var(--base-fontcolor);
    padding: 25px;
    text-align: center;
    cursor: pointer;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-right: 10px;
    color: #fff;

@media (max-width: 620px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
`;

const Li = styled.li`
    list-style: none;
    margin-left: 60px;
    font-size: 16px;

    @media (max-width: 800px) {
        margin-left: 35px;
        padding-right: 5px;
        font-size: 14px;
    }

    @media (max-width: 620px) {
        margin-left: 35px;
        padding-right: 5px;
        border-right: 1px solid #000;
        font-size: 14px;
        
        &.dark-mode {
            border-right: 1px solid #fff;
        }
    }
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: var(--base-fontColor);
    &.active {
        border-bottom: 1px solid currentColor
    }
    &.dark-mode {
        color: #fff;
    }
    `
    const A = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: var(--base-fontColor);
    &.active {
        border-bottom: 1px solid currentColor
    }
    &.dark-mode {
        color: #fff;
    }
`;
