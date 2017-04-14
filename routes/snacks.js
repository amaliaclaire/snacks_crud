var express = require('express');
var router = express.Router();
var db = require('../db/indexConnection.js')

/* GET snack listing. */
router.get('/', function(req, res, next) {
  db('snacks').then(snacks =>{
    res.render('snacks/index', {snacks});
  })
});


// create form tables for snacks

router.get('/new', function(req, res, next){
  res.render('snacks/new')
})

// Get single snack (1 index)

router.get('/:id', function(req, res, next){
  let id = req.params.id
  db('snacks').select('*').where({
    'id': id
  }).then(snack =>{
    res.render('snacks/show', {snack : snack[0]})
  })
})

// editing the single id edits

router.get('/:id/edits', (req, res, next) =>{
  const id = req.params.id
  db('snacks').select('*').where({id}).first().then((snack)=>{
    res.render('snacks/edits', {snack})
  })
})

// // post new stacks into form

router.post('/', (req, res, next)=>{
  var snack = {
    name: req.body.name,
    image_url: req.body['image-url'],
    review_description: req.body['review-description'],
    my_rating: req.body['my-rating']
  }

  var name = req.body.name
  if(!name){
    res.render('snacks/new', {error: 'please insert name', snack})
  }else{

    db('snacks').insert(snack, '*').then((newSnack) =>{
      console.log(newSnack);
      var id = newSnack[0].id

      res.redirect('/snacks/' + id) 
    })
  }
})

//put method (editing the snack)

router.put('/:id', (req, res, next) =>{
  const id = req.params.id

  var snack = {
    name: req.body.name,
    image_url: req.body['image-url'],
    review_description: req.body['review-description'],
    my_rating: req.body['my-rating']
  }

  db('snacks')
  .update(snack, '*')
  .where('id', id)
  .then((snackStuff) =>{

    res.redirect(`/snacks/${id}`)
  })
})


router.delete('/:id', function (req, res, next){
  var id = req.params.id

  db('snacks').del().where({id}).then(()=>{
    res.redirect('/snacks')
  })
})

module.exports = router;
