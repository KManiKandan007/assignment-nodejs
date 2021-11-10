const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;

/// solution-1

router.get('/movie', function(req,res){
    let move =["a","b","c","d"]
    res.send(movie)
})

// solution-2
router.get('/movie/:movieId',function(req,res){
    let movie =["a","b","c","d"]
    let movieAtIndex = movie[index]
    res.send(movieAtIndex)
})
 

//solution-3

router.get('/movie/:movieId',function(req,res){
    let movie =["a","b","c","d"]
    let index = req.params.M=movieAtIndex
    let movieAtIndex= movies[index]
    if (index>movies.length){
        res.send("Invalid input")

    }else{
        res.send(movies[Index]) }

})


//solution -4

router.get('/newMovie',function(req,res){
    let movieName = [ {

        id: 1,
       
        name: 'The Shining',
       
       }, {
       
        id: 2,
       
        name: Incendies
       
       }, {
       
        id: 3,
       
        name: 'Rang de Basanti',
       
       }, {
       
        id: 4,
       
        name: 'Finding Demo',
       
       }]
       res.send(movieName)
})
    module.exports= router;
    console.log('------------');


    // solution-5

    router.get('/films/:filmId',function(req,res){
        let movieName =  [ {

        id: 1,
       
        name: 'The Shining',
       
       }, {
       
        id: 2,
       
        name: Incendies
       
       }, {
       
        id: 3,
       
        name: 'Rang de Basanti',
       
       }, {
       
        id: 4,
       
        name: 'Finding Demo',
       
       }]
        let index = req.params.M=movieAtIndex
        let movieAtIndex= movies[index]
        if (index>movies.length){
            res.send("No movie exist with this id")
    
        }else{
            res.send(movies[Index]) }
    } )





