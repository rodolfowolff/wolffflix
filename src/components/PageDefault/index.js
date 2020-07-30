import React, { Children } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background: var(--grayDark);
    color: var(--white);
    flex: 1;
    padding-top: 94px;
    padding-left: 5%;
    padding-right: 5%;

    @media (max-widht:800px){
    max-width: 105px;
    padding-top: 40px;
}

    `;


function PageDefault({children}) {
    return(
        <>

        <Menu />
        <Main>
        {children}
        </Main>
        <Footer />

        </>
    );
}

export default PageDefault;