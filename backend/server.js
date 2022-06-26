const express = require('express');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fileUploadRoutes = require("./routes/file-upload-routes");

const app = express();
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(express.static(path.join(__dirname,'../dist/fabrik-assignment')));

app.get('/{any*}', function(req,res) {    
res.sendFile(path.join(__dirname,'../dist/fabrik-assignment/index.html'));
});

app.use(fileUploadRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("server is listening")
});