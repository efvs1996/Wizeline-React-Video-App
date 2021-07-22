import React from 'react';
import { Navbar, HamburguerButton, SearchInput } from './HeaderTags.style';

const Header = () => {
    return(
        <>
            <Navbar>
               <HamburguerButton>!!!</HamburguerButton>
               <SearchInput placeholder="wizeline"/>
            </Navbar>
        </>
    )
}

export default Header;