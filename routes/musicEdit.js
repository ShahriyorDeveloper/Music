const express = require('express');
const router = express.Router();
const Music = require('../model/Music');

/* GET users listing. */
router.get('/edit/:id', function(req, res, next) {

  Music.findById(req.params.id, (err, musics) => {
    console.log(musics)
    
      res.render("musicEdit",
       {
         title: "Musiqa o`zgartirish sahifasi",
         musics,
        });
  })
});

module.exports = router;
