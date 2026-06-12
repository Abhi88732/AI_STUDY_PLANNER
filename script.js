// =====================================
// AI STUDY PLANNER
// =====================================

console.log("🚀 AI Study Planner Loaded Successfully");

// =====================================
// USERNAME SYSTEM
// =====================================

let username = localStorage.getItem("username");

// Check invalid username

if(
    username === null ||
    username === "null" ||
    username.trim() === ""
){

    // Create modern popup box

    username = prompt("Enter Your Name 👋");

    // Default name

    if(
        username === null ||
        username.trim() === ""
    ){

        username = "Student";

    }

    // Save username

    localStorage.setItem("username", username);

}

// =====================================
// SHOW USERNAME
// =====================================

const welcomeText =
document.getElementById("welcomeText");

welcomeText.innerHTML =
`👋 Welcome Back, <span>${username}</span>`;

// =====================================
// MOTIVATIONAL QUOTES
// =====================================

const quotes = [

    "Push yourself, because no one else will do it for you.",

    "Small progress is still progress.",

    "Dream big. Study hard. Stay focused.",

    "Success starts with self-discipline.",

    "Consistency beats motivation.",

    "Every day is a chance to improve yourself.",

    "Focus on progress, not perfection."

];

// Random quote

const randomQuote =
quotes[Math.floor(Math.random() * quotes.length)];

// Show quote

document.getElementById("quote").innerHTML =
`💡 "${randomQuote}"`;

// =====================================
// DYNAMIC GREETING
// =====================================

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

// Create greeting element

const greetingText =
document.createElement("h3");

greetingText.innerText =
`${greeting}, ${username}`;

// Styling through JS

greetingText.style.marginTop = "10px";

greetingText.style.color = "#555";

greetingText.style.fontWeight = "normal";

// Add greeting below heading

document.querySelector(".container")
.appendChild(greetingText);

// =====================================
// CARD ANIMATION
// =====================================

const cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    setTimeout(()=>{

        card.style.transition = "0.5s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 200);

});

// =====================================
// APPLICATION STATUS
// =====================================

console.log("✅ All systems running perfectly");