import React from "react";
import { Bar } from "react-chartjs-2";

const Chart1 = ({games}) =>{
  var gameTitles = games.map(game => game.Title);
  var gameScores = games.map(game => game.Played);
    return (
        <Bar height={250} width={430}
            data={{
              labels: [
                gameTitles[0],
                gameTitles[1],
                gameTitles[2],
                gameTitles[3],
                gameTitles[4]
              ],
              datasets: [
                {
                  xAxes: [{
                    type: 'time',
                    position: 'bottom',
                    time: {
                      displayFormats: {'day': 'MM/YY'},
                      tooltipFormat: 'DD/MM/YY',
                      unit: 'month',
                     }
                  }],
                  label: "Players",
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                  ],
                  data: [gameScores[0], gameScores[1], gameScores[2], gameScores[3], gameScores[4]],
                  borderWidth: 1
                }
              ]
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: "Predicted world population (millions) in 2050"
              }
            }}
          />
    )}
export default Chart1;