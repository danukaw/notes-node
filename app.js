console.log('App is starting..');

const filesys = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

/* const user = os.userInfo();

filesys.appendFile('message.txt', `Hello ${user.username} !`, (e)=> {
    console.log()
});
console.log(os.userInfo()); */
/* const addNotes = notes.addNotes();
console.log(addNotes); */

/* const addNumbers = notes.add(10, 12);
console.log('Addition of numbers', addNumbers); */

/* console.log(_.isString(true));
console.log(_.isString("Danuka Wijetunge"));

let uniqueArray = _.uniq(['1','2','1','Danuka','Rajika','3','Danuka','Nimesha']);
console.log(uniqueArray); */

/* console.log(process.argv); */

let argv = yargs.argv;
let command = yargs.argv._[0];

console.log("process ", process.argv);
console.log("yargs process ", argv);
console.log("Command is ",command);

if(command === "add") {

    let noteSaved = notes.addNotes(argv.title, argv.body);
    if(!_.isEmpty(noteSaved) && !_.isEqual('undefined')) {
        console.log("note is saved successfully ");
    } else {
        console.log('Note title is taken');
    } 

} else if (command === "list") {

    let allNotes = notes.getAll();
    console.log(" --- All notes ---");
    console.log(allNotes);

} else if (command ==="remove") {
    
    let noteremoved = notes.removeNote(argv.title);
    let message = noteremoved ? 'note was removed' : 'note was not found';
    console.log(message);

} else if (command ==="read") {

    let selectedNote = notes.readNote(argv.title);
    let message = (selectedNote && selectedNote.length === 1)  ? `note body is ${selectedNote[0].body}` : 'note was not found';
    console.log(message);

} else {

    console.log("command cann't be recorgnized");

}



