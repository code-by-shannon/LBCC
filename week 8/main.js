// create the target date to count down towards
const targetDate = new Date(3000, 0, 1, 0, 0, 00, 000);
let targetDate_inMS = targetDate.getTime();
console.log(`Target time in ms: ${targetDate_inMS}`);
// endDateStr = endDate.toDateString();
// console.log(endDate);
// console.log(endDateStr);





function countdown(){
    // create a reference to the current date and time in ms
    let currentDateTime = new Date();
    let currentDateTimeInMS = currentDateTime.getTime();
    // console.log(`Current time:  ${currentDateTime}`);
    let currentTimeInMS = currentDateTime.getTime();
    console.log(`Current time in milliseconds: ${currentTimeInMS}`);

    let deltaTime = targetDate_inMS - currentDateTimeInMS;
    console.log(`Delta Time: ${deltaTime}`);
    console.log(`deltaTime = targetDate_inMS - currentDateTimeInMS:  ${deltaTime}`);
   
    // convert deltaTime to days
    let convert_Delta_to_Days = deltaTime/86400000;
    console.log(`Days with remainder: ${convert_Delta_to_Days}`);
    // result of deltaTime to days with a remainder
    let days = Math.floor(deltaTime / 86400000);
    console.log(`Days: ${days}`);

    // Remaing ms after days conversion
    let msRemaining_for_days = deltaTime % 86400000; 
    console.log(`Remaining ms: ${msRemaining_for_days}`);

    // convert days leftover ms to hours
    let hours = Math.floor(msRemaining_for_days / 3600000);
    console.log(`hours: ${hours}`);
    let msRemaining_for_hours = msRemaining_for_days % 3600000;
    console.log(`remaining ms: ${msRemaining_for_hours}`);

    // convert minutes from hours remainder
    let minutes = Math.floor(msRemaining_for_hours / 60000);
    console.log(`minutes: ${minutes}`);
    let msRemaining_for_minutes = msRemaining_for_hours % 60000;
    console.log(`remaining ms: ${msRemaining_for_minutes}`);

    // convert seconds from minutes remainder
    let seconds = Math.floor(msRemaining_for_minutes / 1000);
    console.log(`seconds: ${seconds}`);
    let finalMS = msRemaining_for_minutes % 1000;
    console.log(finalMS);

    let timeObject = {
        Days: days,
        Hours: hours,
        Minutes: minutes,
        Seconds: seconds,
        milliSeconds: finalMS
    };

    return timeObject;
};

function update(){
    const temp = countdown();
    let output = '';
    for(let key in temp){
        output += `${key}: ${temp[key]}, `;
    }
    console.log(output);
}

setTimeout(() => {
    update();
}, 1000)



//      ms / second =   1000
//      ms / minute =   60,000
//      ms/  hour   =   3,600,000
//      ms/  day =       86,400,000