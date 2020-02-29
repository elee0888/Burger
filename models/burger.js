var orm = require("../config/orm.js");

var burger ={
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function (burger, cb){
        orm.insertOne("burgers", burger, function(res){
            cb(res);
        });
    },
    updateOne: function(cb){
        orm.updateOne([id],"burgers", function(res){
            cb(res);
        });
    },
    deleteOne:function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports=burger;