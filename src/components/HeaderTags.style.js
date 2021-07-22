import styled from 'styled-components';

export const Navbar = styled.div`
    height: 65px;
    background-color: ${props => props.theme.body};
    position: static;
    display: flex;
`
export const HamburguerButton = styled.button`
    font-size: 14px;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    border-style: none;
    padding: 10px;
    border-radius: 5px;
    transition: all .2s;
    margin: 15px 10px;

    &:hover{
        cursor: pointer;
    }
    
`
export const SearchInput = styled.input`
    font-size: 16px;
    padding: 10px;
    margin: 15px 0;
    background-color: ${props => props.theme.primary};
    border-radius: 5px;
    border-style: none;
    outline: none;
`
