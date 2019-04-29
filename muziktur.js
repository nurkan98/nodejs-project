const mysql = require('mysql');
const baglanti = mysql.createConnection(require('./db').dbconfig);
      
module.exports.muzikturListele = function(req,res){
    baglanti.query('SELECT * FROM muziktur', function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.render('muzikturlistele',{muziktur: result});
        }
    });
}  
module.exports.muzikturEkle = function(req,res){
    res.render('muzikturekle');    
}
module.exports.muzikturEklePost = function(req,res) {
    var muziktur=req.body.muziktur;
    var sql = "INSERT INTO muziktur SET MuzikTur='"+muziktur+"'";
    baglanti.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/muzikturlistele')
        }
    });    
}

module.exports.muzikturGuncelle = function(req,res){
    var muzikturid=req.params.id;
    baglanti.query('SELECT * FROM muziktur where MuzikTurId='+muzikturid, function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.render('muzikturguncelle',{muziktur: result});
        }
    });
}
module.exports.muzikturGuncellePost = function(req,res){
    var muzikturid=req.params.id;
    var muziktur=req.body.muziktur;
    var sql = "UPDATE muziktur SET MuzikTur='"+muziktur+"' where MuzikTurId="+muzikturid;
    baglanti.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/muzikturlistele')
        }
    });    
}
module.exports.muzikturSil = function(req,res){
    var muzikturid=req.params.id;
    baglanti.query('DELETE FROM muziktur where MuzikTurId='+muzikturid, function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.redirect('/muzikturlistele')
        }
    }); 
}

