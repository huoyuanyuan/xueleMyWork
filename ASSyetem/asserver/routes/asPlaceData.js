/**
 * Created by Administrator on 2016/11/1 0001.
 */
var express = require('express');
var router = express.Router();
var url = require("url");
var comFunc = require("../config/commonFunc");

router.get("/", function (req,res,next) {
    var reqUrlObj = url.parse(req.url,true).query;
    var data = comFunc.getASplaceData(reqUrlObj.id, function (data) {
        if(data.length == 0){
            res.json({
                state:1,
                message:"fali"
            });
        }else {
            res.json({
                state:0,
                message:"success",
                data:data[0]
            });
        }
    });
});

module.exports = router;