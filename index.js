const mysql = require('mysql');
const baglanti = mysql.createConnection(require('./db').dbconfig);


module.exports.index = function(req,res) {
    var sanatcisql = "select (SELECT count(*) from sanatci) as sanatcitotal,(SELECT count(*) from album) as albumtotal ,(SELECT count(*) from muziktur) as muzikturtotal";
    baglanti.query(sanatcisql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.render('index',{result:result});
        }
    });  

   
}   