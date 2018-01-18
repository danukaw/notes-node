console.log('notes are being loaded..');
const fs = require('fs');
/* console.log(module) */
let fetchNotes = () => {
    let notes = [];
    try {
        let noteStr = fs.readFileSync('note-data.json');
        notes = JSON.parse(noteStr);
    } catch (e) {

    }

    return notes;
}

let saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
}

let addNotes =  (title, body) => {
    console.log('Adding notes', title, body);
    //add note to a file.
    let notes = [];
    let noteObj = {
        title,
        body
    };

    notes = fetchNotes();

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length == 0) {
        notes.push(noteObj);
        saveNotes(notes);  
        return  notes;     
    }    
};

let getAll = () => {
    console.log("Getting all notes");
    try{
        let notesObjAry = fetchNotes();
        console.log("starting to list all notes from datasource");
        return notesObjAry.length > 0 ? notesObjAry : [];

    }catch(e) {
        console.log("data cannot be found..");
    }
};

let readNote = (title) => {
    console.log(" read a note by title ", title);
    try{
        let notesObjAry = fetchNotes();
    
        let selectedNote = notesObjAry.filter((note) => note.title === title);
        return selectedNote;
        
    } catch(e) {
        console.log("the title : ", title , " could not be found");
    }
    
    
};

let removeNote = (title) => {
    console.log(" remove a note ", title);
    try{
        let notesObjAry = fetchNotes();
    
        let selectedNote = notesObjAry.filter((note) => note.title != title);
        saveNotes(selectedNote);
       
        return notesObjAry.length !== selectedNote.length;
    } catch (e) {   
        console.log("the note going to remove is not in the data source");
    }
};

module.exports = {
    addNotes,
    getAll,
    readNote,
    removeNote
}