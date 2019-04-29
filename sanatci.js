const mysql = require('mysql');
const moment = require('moment');
const baglanti = mysql.createConnection(require('./db').dbconfig);

      
module.exports.sanatciListele = function(req,res){
    baglanti.query('SELECT * FROM sanatci', function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.render('sanatcilistele',{sanatci: result,moment:moment});
        }
    });
}  
module.exports.sanatciEkle = function(req,res){
    res.render('sanatciekle');    
}
module.exports.sanatciEklePost = function(req,res) {
    var sanatciadi=req.body.sanatciadi;
    var sanatciyasiyormu=req.body.sanatciyasiyormu;
    var sanatcidogumtarihi=req.body.sanatcidogumtarihi;
    var sql = "INSERT INTO sanatci SET SanatciAdi='"+sanatciadi+"',SanatciYasiyormu="+sanatciyasiyormu+",SanatciDogumTarihi='"+sanatcidogumtarihi+"'";
    baglanti.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/sanatcilistele')
        }
    });    
}
module.exports.sanatciGuncelle = function(req,res){
    var sanatciid=req.params.id;
    baglanti.query('SELECT * FROM sanatci where SanatciId='+sanatciid, function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.render('sanatciguncelle',{sanatci: result,moment:moment});
        }
    });
}

module.exports.sanatciGuncellePost = function(req,res){
    var sanatciid=req.params.id;
    var sanatciadi=req.body.sanatciadi;
    var sanatciyasiyormu=req.body.sanatciyasiyormu;
    var sanatcidogumtarihi=req.body.sanatcidogumtarihi;
    var sql = "UPDATE sanatci SET SanatciAdi='"+sanatciadi+"',SanatciYasiyormu="+sanatciyasiyormu+",SanatciDogumTarihi='"+sanatcidogumtarihi+"' where SanatciId="+sanatciid;
    baglanti.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/sanatcilistele')
        }
    });    
}
module.exports.sanatciSil = function(req,res){
    var sanatciid=req.params.id;
    baglanti.query('DELETE FROM sanatci where SanatciId='+sanatciid, function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.redirect('/sanatcilistele')
        }
    }); 
}

