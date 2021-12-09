import React,{useState,useEffect} from "react";
import "./styles.css";

import { Line } from "react-chartjs-2";

var today =  new Date((new Date()).valueOf()).toLocaleDateString('fr-CA');
var yesterday = new Date((new Date()).valueOf() - 86400000).toLocaleDateString('fr-CA');
var yesterday2 = new Date((new Date()).valueOf() - 172800000).toLocaleDateString('fr-CA');
var yesterday3 = new Date((new Date()).valueOf() - 259200000).toLocaleDateString('fr-CA');
var yesterday4 = new Date((new Date()).valueOf() - 345600000).toLocaleDateString('fr-CA');
var yesterday5 = new Date((new Date()).valueOf() - 432000000).toLocaleDateString('fr-CA');
var yesterday6 = new Date((new Date()).valueOf() - 518400000).toLocaleDateString('fr-CA');
var arrDay = [today,yesterday,yesterday2,yesterday3,yesterday4,yesterday5,yesterday6];
var todayUser = [], yesterdayUser = [], yesterday2User = [], yesterday3User = [], yesterday4User = [], yesterday5User = [], yesterday6User = [];
export default function Chart({users, getData}) {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  useEffect(() => {
    todayUser = users.filter(function (el) {
      return el.createdAt.toString().indexOf(today) > -1;
    }); setValue(todayUser.length);
    yesterdayUser = users.filter(function (el) {
      return el.createdAt.toString().indexOf(yesterday) > -1;
    }); setValue1(yesterdayUser.length);
    yesterday2User = users.filter(function (el) {
      return el.createdAt.toString().indexOf(yesterday2) > -1;
    }); setValue2(yesterday2User.length);
    yesterday3User = users.filter(function (el) {
      return el.createdAt.toString().indexOf(yesterday3) > -1;
    }); setValue3(yesterday3User.length);
    yesterday4User = users.filter(function (el) {
      return el.createdAt.toString().indexOf(yesterday4) > -1;
    }); setValue4(yesterday4User.length);
    yesterday5User = users.filter(function (el) {
      return el.createdAt.toString().indexOf(yesterday5) > -1;
    }); setValue5(yesterday5User.length);
    yesterday6User = users.filter(function (el) {
      return el.createdAt.toString().indexOf(yesterday6) > -1;
    }); setValue6(yesterday6User.length);
  }, [users]);
  var total = value + value1 + value2 + value3 + value4 + value5 + value6;
  let avg = total / 7;
  var maxValue = Math.max(value, value1, value2, value3, value4, value5, value6);
  var minValue = Math.min(value, value1, value2, value3, value4, value5, value6);
  var arr = [value, value1, value2, value3, value4, value5, value6];
  var maxIndex = arr.indexOf(Math.max.apply(window,arr));
  var minIndex = arr.indexOf(Math.min.apply(window,arr));
  const data = {
    labels: [
      yesterday6,
      yesterday5,
      yesterday4,
      yesterday3,
      yesterday2,
      yesterday,
      today],
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
        label: "New users",
        data: [value6, value5, value4, value3, value2, value1, value],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Average",
        data: [avg, avg, avg, avg, avg, avg, avg],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  getData(total,avg,maxValue,minValue,arrDay[maxIndex],arrDay[minIndex]);
  return (
    <div className="App">
      <Line data={data}/>
    </div>
  );
}