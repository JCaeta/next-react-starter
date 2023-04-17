import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { BackgroundWaves } from '../BackgroundWaves/BackgroundWaves';
import { Container } from '../Container/Container';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


export const Main = () => {
    return (<>
        <Navbar/>
        <BackgroundWaves/>
        <Container height={"100vh"}>
            <h1 style={{margin: 0}}>Hello</h1>
        </Container>
    </>);
}

