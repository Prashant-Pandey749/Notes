let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addnote() {
    let inputElement = document.getElementById("noteinput");
    let note = inputElement.value.trim();
    if (note === "") return;

    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    inputElement.value = "";
    shownotes();
}

function shownotes() {
    let list = document.getElementById("noteList");
    list.innerHTML = "";
    notes.forEach((note, index) => {
        list.innerHTML += `<li>${note} <button onclick="deleteNote(${index})">Delete</button></li>`;
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    shownotes();
}

shownotes();
