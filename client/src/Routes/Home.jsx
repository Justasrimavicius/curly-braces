import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Header from '../Components/Header';

// import MyContext from '../Contexts';

import HomeAlgorithmsSection from '../Components/HomeAlgorithmsSection';
import HomeDataStructuresSection from '../Components/HomeDataStructuresSection';
import HomeTestSection from '../Components/HomeTestSection';
import Leaderboard from '../Components/Leaderboard';

function Home(props) {

    const [username, setUsername] = useState('');

    const [homeContent, setHomeContent] = useState('dataStructures');

    return (
        <React.Fragment>
            <Header homeView={{homeContent, setHomeContent}}/>
            <div className='home'>
                {props.props=='leaderboard' ?
                <Leaderboard />
                :
                    homeContent=='test' ? 
                    <HomeTestSection />
                    :
                        homeContent=='dataStructures' ?
                        <HomeDataStructuresSection />
                        :
                            homeContent=='algorithms' ?
                            <HomeAlgorithmsSection />
                            : null
                }
            </div>
        </React.Fragment>

    );
}

export default Home;