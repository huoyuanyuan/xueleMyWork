var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post("/login", function (req,res,next) {
  var reqData = req.body;
  req.models.admin.find({admin_name:reqData.admin_name}, function (err,rows) {
    if(!err){
      if(rows.length != 0){
        var dbData = rows[0];
        if(dbData.password == reqData.password){

          req.session.currentAdminId = dbData.admin_id;
          req.session.currentAdmin = dbData.admin_name;
          res.json({
            state:0,
            message:"login success"
          });
        }else {
          res.json({
            state:2,
            message:"password fail"
          });
        }
      }else {
        res.json({
          state:1,
          message:"admin not find"
        });
      }
    }else {
      res.json({
        state:3,
        message:err
      });
    }
  });
});


module.exports = router;
