const express=require('express');
const app=express();
const path=require('path');
const index=require('./index');
const sanatci=require('./sanatci');
const muziktur=require('./muziktur');
const album=require('./album');

const bodyParser  = require('body-parser');


app.use('/public',express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',index.index);

app.get('/sanatcilistele',sanatci.sanatciListele);
app.get('/sanatciekle',sanatci.sanatciEkle);
app.post('/sanatciekle',sanatci.sanatciEklePost)
app.post('/sanatciguncelle/:id',sanatci.sanatciGuncellePost)
app.get('/sanatciguncelle/:id',sanatci.sanatciGuncelle);
app.get('/sanatcisil/:id',sanatci.sanatciSil);

app.get('/muzikturlistele',muziktur.muzikturListele);
app.get('/muzikturekle',muziktur.muzikturEkle);
app.post('/muzikturekle',muziktur.muzikturEklePost)
app.post('/muzikturguncelle/:id',muziktur.muzikturGuncellePost)
app.get('/muzikturguncelle/:id',muziktur.muzikturGuncelle);
app.get('/muziktursil/:id',muziktur.muzikturSil);

app.get('/albumlistele',album.albumListele);
app.get('/albumekle',album.albumEkle);
app.post('/albumekle',album.albumEklePost);
app.post('/albumguncelle/:id',album.albumGuncellePost)
app.get('/albumguncelle/:id',album.albumGuncelle);
app.get('/albumsil/:id',album.albumSil);




app.listen(80);