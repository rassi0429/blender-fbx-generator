// ライブラリ読み込み
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { exec } = require('child_process')

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/output', express.static('output'));

var port = process.env.PORT || 3000; // port番号を指定


// GET http://localhost:3000/api/v1/
app.get('/', function (req, res) {
    if (!req.query.text) {
        res.send("query text needed")
        return
    }
    exec('blender blenderextracter/untitled.blend -b -P blenderextracter/test.py "' + req.query.text + '"', (err, stdout, stderr) => {
        // if (err) {
        //     console.log(`stderr: ${err}`)
        //     res.status(500).json({success:false})
        //     return
        // }
        // console.log(`stdout: ${stdout}`)
        res.json({
            success: true
        });
    })
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);