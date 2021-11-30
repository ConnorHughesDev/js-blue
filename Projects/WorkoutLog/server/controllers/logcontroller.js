const Express = require("express")
const router = Express.Router();
const { LogModel } = require("../models");
let validateJWT = require("../middleware/validate-jwt");

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey!! This is a practice route.')
});

// router.get('/about', (req, res) => {
//     res.send("This is the about route.");
// })

//! create log
router.post('/create', validateJWT, async (req, res) => {
    // console.log(req.body.log)
    // console.log(req.user)
    const { description, definition, result } = req.body.log;
    const { id } = req.user;
    const logEntry = {
        description,
        definition,
        result,
        owner: id
    }
    try {
        const newLog = await LogModel.create(logEntry);
        res.status(200).json(newLog);
    } catch (err) {
        res.status(500).json({ error: err });
    }


});

// //! GET all entries
// router.get("/", async (req, res) => {
//     try {
//         const entries = await LogModel.findAll();
//         res.status(200).json(entries);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// });


//! GET all logs for user
router.get("/mine", validateJWT, async (req, res) => {
    let { id } = req.user;
    try {
        const userLogs = await LogModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userLogs);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//! GET log by id for user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const results = await LogModel.findOne({
            where: { id: id }
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//! PUT updating a Log entry
router.put("/update/:logId", validateJWT, async (req, res) => {
    const { description, definition, result } = req.body.log;
    const logId = req.params.logId;
    const userId = req.user.id;

    const query = {
        where: {
            id: logId,
            owner: userId
        }
    };

    const updatedLog = {
        description: description,
        definition: definition,
        result: result
    };

    try {
        const update = await LogModel.update(updatedLog, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// //! DELETE a Log
router.delete("/delete/:id", validateJWT, async (req, res) => {
    try {
        await LogModel.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.status(200).json({
                message: "Log successfully deleted",
                deletedLog: result
            })
        })
    } catch (err) {
        res.status(500).json({
            message: `Failed to delete log: ${err}` 
        })
    }
})

module.exports = router;
