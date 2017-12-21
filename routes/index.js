var express = require('express');
var grpc = require('grpc');
var messages = require('../HelloWorldService_pb.js');
var services = require('../HelloWorldService_grpc_pb.js')
var request = new messages.HelloRequest();
var client = new services.HelloWorldServiceClient(
'localhost:50051',
grpc.credentials.createInsecure()
);




var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {
    name:req.query.name,
    pass:req.query.pass
  }
  request.setName(obj.name);
  request.setPass(obj.pass);
  client.hello(request, function (err, data) {
    console.log('通过回调的参数参数得到相应的返回信息,')
    console.log(data);
    if (err) {
        console.error(err);
    }
    console.log(data);
    for(var key in data){
        console.log(key)
    }
    console.log(data.getHellostring());
    // res.render('index', { title: 'Express' });
    res.send(data.getHellostring())
})

  
});

module.exports = router;
