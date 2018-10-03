var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var fs = require('fs');

router.get('/getDetails', (req, res) => {
    var tmp = {
        name: 'sarath',
        email: 'chanduchama@gmail.com',
        password: 'ASDasd123!'
    };
    res.send(tmp);
});

router.get('/downloadFile', (req, res) => {

    console.log('came in man');
const s3client = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
  });

  const params = {
    Bucket: 'bpaas-dev-emr-files',
    Key: 'VINELAND_SPEND_ECC_COMPANYSITE_20170817.csv'
  }

  const sessionParams = {
      maxPartSize: '20MB', // default 20MB
      concurrentStreams: '5', // default 5
      maxRetries: '3', // default 3
      totalObjectSize: ''// required size of object being downloaded
  }
  const  downloader = require('s3-download')(s3client);

  const d = downloader.download(params, sessionParams);
  d.on('error', function(err){
      console.log(err);
  });
  // dat = size_of_part_downloaded
  d.on('part', function(dat){
      console.log(dat);
  });
  d.on('downloaded', function(dat){
      console.log(dat);
  });

  const w = fs.createWriteStream('/downloads/s3-corning-file.csv');
  d.pipe(w);

  res.send({
    data: 'success'
  });

});
module.exports = router;