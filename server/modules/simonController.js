module.exports = {
    sendScore: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.sendScore(req.body.initials, req.body.score).then( score => {
           res.status(200).send(score) 
        });
    },

    getHighScores: (req, res) => {
        const db = req.app.get('db');
        db.getHighScores().then( scores => {
            res.status(200).send(scores)
        })
    },
}