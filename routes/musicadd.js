const express = require('express');
const Music = require('../model/Music');
const router = express.Router();


/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render("Musicadd", { title: "musiqa qo`shish sahifasi"})
});

router.post('/add', function(req, res) {
    console.log('Jo`natdik');

    const music = new Music();
    music.name = req.body.name;
    music.singer = req.body.singer;
    music.commit = req.body.commit;

    music.save((err) => {
        if(err) console.log(err);
        else{
            res.redirect('/')
        }
    })
})






module.exports = router;
