import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Header from '../Components/Header';

// import MyContext from '../Contexts';

import HomeAlgorithmsSection from '../Components/HomeAlgorithmsSection';
import HomeDataStructuresSection from '../Components/HomeDataStructuresSection';
import HomeJavascriptSection from '../Components/HomeJavascriptSection';

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
            })
          })
    },[])

    return (
        <React.Fragment>
            {/* <MyContext.Provider value={{}}> */}
            <Header username={username} homeView={{homeContent, setHomeContent}}/>
            <div className='home'>
                {homeContent=='javascript' ? 
                <HomeJavascriptSection />
                :
                    homeContent=='dataStructures' ?
                    <HomeDataStructuresSection />
                    :
                    <HomeAlgorithmsSection />
                }
            </div>
            {/* </MyContext.Provider> */}
        </React.Fragment>

    );
}

export default Home;