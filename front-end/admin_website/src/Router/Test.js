import React from 'react'
const Test = ({games, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (games.map(game => 
               <tr>
                     <td>{game.userId}</td>
                     <td key={game.id}>{game.id}</td>
                    <td>{game.title}</td>
                </tr>  
         )
    );
};
export default Test;
