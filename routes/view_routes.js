const router = require('express').Router();
const path = require('path')



router.get('/notes', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../public/notes.html'));
})

router.get('*', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports =  router