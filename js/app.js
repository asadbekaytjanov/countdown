const newYears = "1 Jan 2023";
const daysEl = document.getElementById('days'), 
minsEl = document.getElementById('mins'), 
secondsEl = document.getElementById('seconds'),
hoursEl = document.getElementById('hours');

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSeconds = (newYearsDate- currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = Math.floor(totalSeconds /  60)  % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, mins, seconds);

   daysEl.innerHTML = days;
   hoursEl.innerHTML = hours;
   minsEl.innerHTML = mins;
   secondsEl.innerHTML = seconds;


}
countDown();




setInterval(countDown, 1000)
