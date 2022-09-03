import React from 'react';
import { useEffect } from 'react';

import Header from '../Components/Header';

import MyContext from '../Contexts';

import { useState } from 'react';
function Home() {

    const [username, setUsername] = useState('');

    const [homeContent, setHomeContent] = useState(null);

    useEffect(()=>{
        const userID = window.location.href.slice(-24);
        fetch('http://localhost:8080/user-'+userID)
          .then(result=>{
            result.json()
              .then(finalData=>{
                setUsername(finalData.username);
                console.log(finalData);
            })
          })
    },[])

    useEffect(()=>{
        console.log(homeContent)
    },[homeContent])


    return (
        <React.Fragment>
            <MyContext.Provider value={{}}>
            <Header username={username} homeView={{homeContent, setHomeContent}}/>
            <div className='home'>
                {homeContent=='javascript' ? 
                <div className='home-javascript-section'>
                    Javascript
                </div>
                :
                    homeContent=='dataStructures' ?
                    <div className='home-dataStructures-section'>
                        Data Structures
                    </div>
                    :
                        <div className='home-algorithms-section'>
                            Algorithms
                        </div>
                }
            </div>
            </MyContext.Provider>
        </React.Fragment>

    );
}

export default Home;