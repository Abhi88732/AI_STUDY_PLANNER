// =====================================
// ANALYTICS PAGE
// =====================================

console.log("📈 Analytics Loaded");

// =====================================
// LOAD REAL DATA
// =====================================

let studyData =
JSON.parse(
  localStorage.getItem("studyData")
) || [];

// Default Week Days

const weekDays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun"
];

// Prepare Data

let chartData = [];

// Total Hours

let totalHours = 0;

// Convert Dynamic Data

weekDays.forEach(day => {

    let found =
    studyData.find(
      item => item.day === day
    );

    if(found){

        chartData.push(found.hours);

        totalHours += found.hours;

    }
    else{

        chartData.push(0);

    }

});

// =====================================
// NOTES COUNT
// =====================================

let notes =
JSON.parse(
  localStorage.getItem("notes")
) || [];

let notesCount =
notes.length;

// =====================================
// WEEKLY GOAL
// =====================================

let weeklyGoal = 20;

let goalPercent =
Math.min(
  Math.floor((totalHours / weeklyGoal) * 100),
  100
);

// =====================================
// STUDY STREAK
// =====================================

let streak =
studyData.filter(
  item => item.hours > 0
).length;

// =====================================
// UPDATE UI
// =====================================

document.getElementById("totalHours")
.innerText =
`${totalHours}h`;

document.getElementById("goalPercent")
.innerText =
`${goalPercent}%`;

document.getElementById("streak")
.innerText =
`${streak}🔥`;

document.getElementById("notesCount")
.innerText =
`${notesCount}`;

// =====================================
// CHART
// =====================================

const ctx =
document.getElementById("studyChart");

const gradient =
ctx.getContext("2d")
.createLinearGradient(0,0,0,400);

gradient.addColorStop(0,"#00ffd5");

gradient.addColorStop(1,"#0066ff");

new Chart(ctx,{

    type:"bar",

    data:{

        labels:weekDays,

        datasets:[{

            label:"Study Hours",

            data:chartData,

            backgroundColor:gradient,

            borderRadius:15,

            borderSkipped:false

        }]
    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                labels:{

                    color:"white",

                    font:{
                        size:16
                    }

                }
            }
        },

        scales:{

            x:{

                ticks:{
                    color:"white"
                },

                grid:{
                    color:"rgba(255,255,255,0.1)"
                }
            },

            y:{

                beginAtZero:true,

                ticks:{
                    color:"white"
                },

                grid:{
                    color:"rgba(255,255,255,0.1)"
                }
            }
        }
    }
});

// =====================================
// MOTIVATION
// =====================================

const messages = [

    "🔥 Keep learning every day.",

    "🚀 Productivity creates success.",

    "📚 Consistency beats motivation.",

    "🏆 Smart work wins.",

    "💡 Progress matters."

];

let randomMessage =
messages[
Math.floor(Math.random() * messages.length)
];

const message =
document.createElement("p");

message.innerText =
randomMessage;

message.style.color = "white";

message.style.marginTop = "30px";

message.style.fontSize = "18px";

message.style.fontWeight = "500";

message.style.textAlign = "center";

document.querySelector(".container")
.appendChild(message);

console.log("✅ Dynamic Analytics Ready");