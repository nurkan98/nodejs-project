const mysql = require('mysql');
const moment = require('moment');
const baglanti = mysql.createConnection(require('./db').dbconfig);

      
module.exports.albumListele = function(req,res){
    baglanti.query('SELECT * FROM album,sanatci,muziktur where sanatci.SanatciId=album.SanatciId and album.MuzikTurId=muziktur.MuzikTurId', function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.render('albumlistele',{album: result,moment:moment,baglanti:baglanti});
        }
    });
}  
module.exports.albumEkle = function(req,res){
    baglanti.query('SELECT * FROM sanatci', function(err, sanatci) {
        baglanti.query('SELECT * FROM muziktur', function(err, muziktur) {
            res.render('albumekle',{muziktur:muziktur,sanatci:sanatci});    
        });
    });

}
module.exports.albumEklePost = function(req,res) {
    var albumadi=req.body.albumadi;
    var sanatciid=req.body.sanatciadi;
    var albumcikis=req.body.albumcikistarihi;
    var muziktur=req.body.muziktur;
    var sql = "INSERT INTO album SET AlbumAdi='"+albumadi+"',SanatciId="+sanatciid+",CikisTarihi='"+albumcikis+"',MuzikTurId="+muziktur;
    baglanti.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/albumlistele')
        }
    });    
}
module.exports.albumGuncelle = function(req,res){
    var albumid=req.params.id;
    baglanti.query('SELECT * FROM album where AlbumId='+albumid, function(err, album) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            baglanti.query('SELECT * FROM sanatci', function(err, sanatci) {
                baglanti.query('SELECT * FROM muziktur', function(err, muziktur) {
                    res.render('albumguncelle',{moment:moment,album:album,muziktur:muziktur,sanatci:sanatci});    
                });
            });        }
    });
}
module.exports.albumGuncellePost = function(req,res){
    var albumid=req.params.id;
    var albumadi=req.body.albumadi;
    var sanatciid=req.body.sanatciadi;
    var albumcikis=req.body.albumcikistarihi;
    var muziktur=req.body.muziktur;
    var sql = "UPDATE album SET AlbumAdi='"+albumadi+"',SanatciId="+sanatciid+",CikisTarihi='"+albumcikis+"',MuzikTurId="+muziktur+" where AlbumId="+albumid;
    baglanti.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/albumlistele')
        }
    });    
}
module.exports.albumSil = function(req,res){
    var albumid=req.params.id;
    baglanti.query('DELETE FROM album where AlbumId='+albumid, function(err, result) {
        if(err){
            console.log('Veritabaniyla Baglanti Kurulamadi');
            throw err;
        } 
        else {
            res.redirect('/albumlistele')
        }
    }); 
}

