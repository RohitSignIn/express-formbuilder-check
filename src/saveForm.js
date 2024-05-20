const mongoose = require("mongoose")

const saveForm = (req, res) => {
      app.post('save/user', function(req,res,next){
        var u = new User(req.body)
        db('mydb.users').save(u)
        res.send(200)
        // that's it! You've saved a user
      });
}

module.exports = saveForm;