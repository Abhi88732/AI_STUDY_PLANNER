// =====================================
// SMART NOTES APPLICATION
// =====================================

console.log("📝 Smart Notes Loaded Successfully");

// =====================================
// ELEMENTS
// =====================================

const noteTitle =
document.getElementById("noteTitle");

const note =
document.getElementById("note");

const status =
document.getElementById("status");

const notesContainer =
document.getElementById("notesContainer");

// =====================================
// LOAD NOTES
// =====================================

let notes =
JSON.parse(localStorage.getItem("notes")) || [];

// =====================================
// DISPLAY NOTES
// =====================================

function displayNotes(){

    notesContainer.innerHTML = "";

    // No Notes

    if(notes.length === 0){

        notesContainer.innerHTML = `

            <p class="empty">
                No Notes Saved Yet 📭
            </p>

        `;

        return;
    }

    // Show Notes

    notes.forEach((item,index)=>{

        const noteCard =
        document.createElement("div");

        noteCard.classList.add("note-card");

        noteCard.innerHTML = `

            <h3>${item.title}</h3>

            <p>${item.text}</p>

            <div class="note-buttons">

                <button
                  onclick="editNote(${index})"
                >
                  ✏ Edit
                </button>

                <button
                  onclick="deleteNote(${index})"
                >
                  🗑 Delete
                </button>

            </div>

        `;

        notesContainer.appendChild(noteCard);

    });

}

// =====================================
// SAVE NOTE
// =====================================

function saveNote(){

    // Validation

    if(
        noteTitle.value.trim() === "" ||
        note.value.trim() === ""
    ){

        status.innerText =
        "⚠ Please fill all fields";

        status.style.color = "#ffcc00";

        return;
    }

    // Create Note Object

    const newNote = {

        title: noteTitle.value,

        text: note.value

    };

    // Push Note

    notes.push(newNote);

    // Save To LocalStorage

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    // Clear Fields

    noteTitle.value = "";

    note.value = "";

    // Update Status

    status.innerText =
    "✅ Note Saved Successfully";

    status.style.color = "#00ffd5";

    // Refresh Notes

    displayNotes();

}

// =====================================
// DELETE NOTE
// =====================================

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    displayNotes();

    status.innerText =
    "🗑 Note Deleted";

    status.style.color = "#ff5e5e";

}

// =====================================
// EDIT NOTE
// =====================================

function editNote(index){

    noteTitle.value =
    notes[index].title;

    note.value =
    notes[index].text;

    // Remove Old Note

    notes.splice(index,1);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    displayNotes();

    status.innerText =
    "✏ Editing Note";

    status.style.color = "#00bfff";

}

// =====================================
// CLEAR NOTE
// =====================================

function clearNote(){

    noteTitle.value = "";

    note.value = "";

    status.innerText =
    "🧹 Cleared";

    status.style.color = "#ffffff";

}

// =====================================
// INITIAL LOAD
// =====================================

displayNotes();

// =====================================
// WELCOME MESSAGE
// =====================================

let username =
localStorage.getItem("username") || "Student";

console.log(
`📚 Welcome Back, ${username}`
);

// =====================================
// APPLICATION STATUS
// =====================================

console.log("✅ Smart Notes Running Perfectly");