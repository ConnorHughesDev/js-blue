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

//! GET all entries
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

//! GET entries by user
router.get("/mine", validateJWT, async (req, res) => {
    let { id } = req.user;
    try {
        const userJournals = await JournalModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userJournals);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//! GET entries by title
router.get("/:title", async (req, res) => {
    const { title } = req.params;
    try {
        const results = await JournalModel.findAll({
            where: { title: title }
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//! PUT updating a journal entry
router.put("/update/:entryId", validateJWT, async (req, res) => {
    const { title, date, entry } = req.body.journal;
    const journalId = req.params.entryId;
    const  userId = req.user.id;

    const query = {
        where: {
            id: journalId,
            owner: userId
        }
    };

    const updatedJournal = {
        title: title,
        date: date,
        entry: entry
    };

    try {
        const update = await JournalModel.update(updatedJournal, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//! DELETE a journal
router.delete("/delete/:id", validateJWT, async (req, res) => {
    const ownerId = req.user.id;
    const journalId = req.params.id;

    try {
        const query = {
            where: {
                id: journalId,
                owner: ownerId
            }
        };

        await JournalModel.destroy(query);
        res.status(200).json({ message: "Journal Entry Removed" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

module.exports = router;