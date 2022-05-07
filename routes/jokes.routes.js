const JokesController = require ('../controllers/jokes.controllers');

module.exports = (app)=>{
    app.get('/api/jokes', JokesController.getAllJokes),
    app.post('/api/jokes', JokesController.createNewJokes),
    app.get ('/api/jokes/:id', JokesController.getJokeByID),
    app.put('/api/jokes/:id', JokesController.updateJokes),
    app.delete('/api/jokes/:id', JokesController.deleteJokes)
}
