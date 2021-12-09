import React from 'react'

 const LBRouter = ({leaderboards}) => {
    var count = 1;
    return (leaderboards.map(leaderboard =>
            <tr>
                <td key={leaderboard.id}>{count++}</td>
                <td>{leaderboard.UserID}</td>
                <td>{leaderboard.HighScore}</td>
            </tr>
    ))
}
export default LBRouter
