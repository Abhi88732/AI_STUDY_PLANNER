// =====================================
// SMART POMODORO TIMER
// =====================================

console.log("⏰ Smart Pomodoro Timer Loaded");

// =====================================
// VARIABLES
// =====================================

let timeLeft = 25 * 60;

let timer = null;

let isRunning = false;

// =====================================
// ELEMENTS
// =====================================

const time =
document.getElementById("time");

const status =
document.getElementById("status");

// =====================================
// UPDATE TIMER
// =====================================

function updateTimer(){

    let minutes =
    Math.floor(timeLeft / 60);

    let seconds =
    timeLeft % 60;

    // FORMAT

    minutes =
    minutes < 10
    ? "0" + minutes
    : minutes;

    seconds =
    seconds < 10
    ? "0" + seconds
    : seconds;

    // SHOW TIME

    time.innerText =
    `${minutes}:${seconds}`;

}

// =====================================
// START TIMER
// =====================================

function startTimer(){

    // PREVENT MULTIPLE TIMERS

    if(isRunning){

        return;

    }

    isRunning = true;

    status.innerText =
    "🔥 Focus Session Started";

    timer = setInterval(()=>{

        timeLeft--;

        updateTimer();

        // =====================================
        // TIMER COMPLETED
        // =====================================

        if(timeLeft <= 0){

            clearInterval(timer);

            isRunning = false;

            status.innerText =
            "✅ Session Completed";

            // =====================================
            // SAVE STUDY DATA
            // =====================================

            let studyData =
            JSON.parse(
              localStorage.getItem("studyData")
            ) || [];

            // DAYS ARRAY

            const days = [

                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"

            ];

            // TODAY

            let today =
            days[new Date().getDay()];

            // CHECK EXISTING DATA

            let existingDay =
            studyData.find(
              item => item.day === today
            );

            // UPDATE HOURS

            if(existingDay){

                existingDay.hours += 1;

            }
            else{

                studyData.push({

                    day: today,

                    hours: 1

                });

            }

            // SAVE TO LOCAL STORAGE

            localStorage.setItem(

                "studyData",

                JSON.stringify(studyData)

            );

            // =====================================
            // COMPLETION SOUND
            // =====================================

            const audio =
            new Audio(
              "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
            );

            audio.play();

        }

    },1000);

}

// =====================================
// PAUSE TIMER
// =====================================

function pauseTimer(){

    clearInterval(timer);

    isRunning = false;

    status.innerText =
    "⏸ Timer Paused";

}

// =====================================
// RESET TIMER
// =====================================

function resetTimer(){

    clearInterval(timer);

    isRunning = false;

    timeLeft = 25 * 60;

    updateTimer();

    status.innerText =
    "🔄 Timer Reset";

}

// =====================================
// INITIAL LOAD
// =====================================

updateTimer();

// =====================================
// APPLICATION STATUS
// =====================================

console.log("✅ Smart Timer Running Perfectly");