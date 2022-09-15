import React, { useEffect } from 'react';

function Leaderboard() {

    useEffect(()=>{
        fetch('http://localhost:8080/leaderboardData')
          .then(res=>{
            res.json()
              .then(finalData=>{
                console.log(finalData);
              })
          })
    
    },[])

    return (
        <div>
            
        </div>
    );
}

export default Leaderboard;