import React from 'react';
import { Navbar, HamburguerButton, SearchInput } from './Header.style';
import Toggle from './toggle/Toggle';

const Header = ({themeToggler}) => {

    return(
        <>
            <Navbar>
               <HamburguerButton>!!!</HamburguerButton>
               <SearchInput placeholder="search on wizeline"/>
               <Toggle onChange={() => themeToggler()}/>
            </Navbar>
        </>
    )
}

export default Header;