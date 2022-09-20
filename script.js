'use strict';

const daysEl =document.getElementById('days')
const hoursEl =document.getElementById('hours')
const minutesEl =document.getElementById('minutes')
const secondsEl =document.getElementById('seconds')

const newYears = '1 Jan 2023';

const clockTimeout = function(){
  const nowDate = new Date('January 1, 2023');
  const newDate= new Date()
  const daysTotal =  (nowDate - newDate) / 1000
  // console.log(daysTotal)
  const seconds = Math.floor(daysTotal) % 60
  const days = Math.floor(daysTotal /3600 / 24) 
  const hours = Math.floor(daysTotal /3600) % 24
  const minutes =Math.floor( daysTotal / 60) %60
  // console.log(days, hours, minutes, seconds)

  daysEl.innerHTML = days
  hoursEl.innerHTML = fullNum(hours)
  minutesEl.innerHTML = fullNum(minutes)
  secondsEl.innerHTML = fullNum(seconds)
}

const fullNum = function(num){
  return num<10 ? `0${num}` : num
}

setInterval(clockTimeout, 1000)