var grpc = require('grpc');
var messages = require('./HelloWorldService_pb.js');
var services = require('./HelloWorldService_grpc_pb.js')



var request = new messages.HelloRequest();
    request.setName('前端学院');
    request.setPass('123456');
var client = new services.HelloWorldServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
);
client.hello(request, function (err, data) {
    console.log('通过回调的参数参数得到相应的返回信息,')
    if (err) {
        console.error(err);
    }
    // console.log(data);
    console.log(data.getHellostring());
})