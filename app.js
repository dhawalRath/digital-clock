const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const sun = document.querySelector('.sun');
const mon = document.querySelector('.mon');
const tue = document.querySelector('.tue');
const wed = document.querySelector('.wed');
const thu = document.querySelector('.thu');
const fri = document.querySelector('.fri');
const sat = document.querySelector('.sat');


const clock = document.querySelector('.clock');
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const date = document.querySelector('.date');


const tick = () => {
  const today = new Date();
  
  year.textContent = today.getFullYear();
  month.textContent = fullMonths[today.getMonth()].toUpperCase();
  date.textContent = today.getDate();
  clock.textContent = today.toLocaleTimeString();
  
  const dayName = today.getDay();
  
  switch (dayName) {
    case 0:
      sun.style.color = 'rgb(0, 255, 0)';
      break;
    case 1:
      mon.style.color = 'rgb(0, 255, 0)';
      break;
    case 2:
      tue.style.color = 'rgb(0, 255, 0)';
      break;
    case 3:
      wed.style.color = 'rgb(0, 255, 0)';
      break;
    case 4:
      thu.style.color = 'rgb(0, 255, 0)';
      break;
    case 5:
      fri.style.color = 'rgb(0, 255, 0)';
      break;
    case 6:
      sat.style.color = 'rgb(0, 255, 0)';
      break;
  }
  
};

setInterval(tick, 1000);