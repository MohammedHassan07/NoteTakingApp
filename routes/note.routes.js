const express = require('express')
const { verifyToken } = require('../middleware/verifyToken')
const {addNote, getSingleNote, getAllNotes, updateNote, deleteNote} = require('../controller/note.contoller')

const route = express.Router()

route.use(verifyToken)

route.post('/add-note', addNote)

route.post('/get-single-note', getSingleNote)

route.post('/get-notes', getAllNotes)

route.post('/update-note', updateNote)

route.post('/delete-note', deleteNote)


module.exports = route