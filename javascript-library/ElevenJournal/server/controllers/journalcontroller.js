const Express = require('express'); //We import the Express framework and store it inside the variable 'Express'. This instance becomes our gateway to using Express methods.
const router = Express.Router(); //
let validateJWT = require("../middleware/validate-jwt"); // This option is best when you have a controller or multiple controllers where all of the routes need to be restricted. 
// Imprt the Journal Model
const { JournalModel } = require('../models');

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey!! This is a practice route!')
});

/*
==============================
Journal Create
==============================
*/
router.post('/create', validateJWT, async (req, res) => {
    const { title, date, entry } = req.body.journal;
    const { id } = req.user;
    const journalEntry = {
        title,
        date,
        entry,
        owner: id
    }
    try {
        const newJournal = await JournalModel.create(journalEntry);
        res.status(200).json(newJournal);
    } catch (err) {
        res.status(500).json({ error: err });
    }


});

/*
=================
Get all Journals
=================
*/
router.get("/", async (req, res) => {
    try {
        const entries = await JournalModel.findAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});
router.get('/about', (req, res) => {
    res.send('This is the about route!')
});

module.exports = router;