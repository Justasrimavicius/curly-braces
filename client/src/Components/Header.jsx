import React from 'react';
import { useEffect } from 'react';

import { useState } from 'react';
import { Button } from '@mui/material';

function Header(props) {
    


    useEffect(()=>{
        console.log(props.homeView)
    },[])
    return (
        <header>
            <span>Curly Braces</span>
            <div className='header-nav'>
                <Button className='header-nav-button' style={{fontWeight:'bold'}} onClick={()=>{props.homeView.setHomeContent('javascript')}}>Javascript</Button>
                <Button className='header-nav-button' style={{fontWeight:'bold'}} onClick={()=>{props.homeView.setHomeContent('dataStructures')}}>Data structures</Button>
                <Button className='header-nav-button' style={{fontWeight:'bold'}} onClick={()=>{props.homeView.setHomeContent('algorithms')}}>Algorithms</Button>
            </div>
            <div className='header-user-info'>
                <h6>asd</h6>
            </div>
        </header>
    );
}

export default Header;