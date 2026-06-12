// =====================================
// DASHBOARD FUNCTIONS
// =====================================

function openStudyTracker(){

    alert("📚 Study Tracker Opened");

}

function openTasks(){

    window.location.href =
    "../Pages/Notes.html";

}

function openGoals(){

    alert("🎯 Goal Management Coming Soon");

}

function openStreak(){

    alert("🔥 Your Current Study Streak: 7 Days");

}

// =====================================
// GREETING SYSTEM
// =====================================

let username =
localStorage.getItem("username") || "Student";

let hours = new Date().getHours();

let greeting = "";

if(hours < 12){

    greeting = "🌞 Good Morning";

}
else if(hours < 18){

    greeting = "☀ Good Afternoon";

}
else{

    greeting = "🌙 Good Evening";

}

document.getElementById("greeting").innerText =
`${greeting}, ${username}`;

// =====================================
// DATE & TIME
// =====================================

function updateDateTime(){

    let now = new Date();

    let date =
    now.toLocaleDateString();

    let time =
    now.toLocaleTimeString();

    document.getElementById("dateTime")
    .innerText =
    `📅 ${date} | ⏰ ${time}`;

}

setInterval(updateDateTime,1000);

updateDateTime();

// =====================================
// MOTIVATION
// =====================================

const quotes = [

    "Stay focused and never give up.",

    "Success starts with discipline.",

    "Every study hour matters.",

    "Push yourself daily.",

    "Small progress is still progress."

];

let randomQuote =
quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("motivation")
.innerText =
`💡 ${randomQuote}`;

// =====================================
// PROGRESS BAR
// =====================================

document.getElementById("progressFill")
.style.width = "62%";