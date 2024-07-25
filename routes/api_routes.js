const router = require('express').Router();
const uuid = require('uuid')

const {getNotes, saveNotes} = require('../db')

// API Routes
// /api/notes

router.get('/notes', async (requestObj, responseObj) => {
  const notes = await getNotes()
  responseObj.json(notes)
})







router.post('/notes', async (requestObj, responseObj) => {
  const noteText = requestObj.body.text
  const noteTitle = requestObj.body.title

  const id = uuid.v4()

  console.log(noteText)

  const notes = await getNotes()
  const newNote = {
      id: id,
      title: noteTitle,
      text: noteText
  }
  notes.push(newNote);

  await saveNotes(notes);

  responseObj.json(newNote)

});

router.delete('/notes/:id', async (requestObj, responseObj) => {
    const notesId = requestObj.params.id 
    const notes = await getNotes()

    const result = notes.filter((note) => note.id !== notesId);

    await saveNotes(result);
    responseObj.json(result)

})


module.exports = router;