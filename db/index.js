const fs = require('fs').promises

async function getNotes(){
    const rawData = await fs.readFile('./db/db.json', 'utf-8');

    // Return the array of notes from notes.json
    return JSON.parse(rawData)
}

async function saveNotes(updatedNotesArray){
    // Overwrite the notes.json array
    await fs.writeFile('./db/db.json', JSON.stringify(updatedNotesArray, null, 2))

    console.log('notes json file updated')
}

module.exports = {getNotes, saveNotes}