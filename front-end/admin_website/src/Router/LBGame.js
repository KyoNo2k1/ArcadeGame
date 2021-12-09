import React from 'react'
import '../styles/modal.css'
import LBRouter from './LBRouter'
 const LBGame = ({leaderboard, closeLB, leaderboardData}) => {
    return (
        <div className="bg-modal" style={{display: leaderboard ? 'flex' : 'none' }}>
        <div className="modal-LB" >
          <div className="close" onClick={function(event){closeLB();}}>+</div>
          <form action>
          <table>
            <tbody>
              <tr>
                <th>TOP</th>
                <th>UserID</th>
                <th>HighScore</th>
              </tr>
              <LBRouter leaderboards={leaderboardData}></LBRouter>
            </tbody></table>
          </form>
        </div>
      </div>
      
    )
}
export default LBGame
