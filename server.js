var grpc = require('grpc');
var messages = require('./HelloWorldService_pb.js');
var services = require('./HelloWorldService_grpc_pb.js');



var hello = function (call, callback) {
    var response = new messages.HelloResponse();

    if (call.request.getName() == "前端学院" && call.request.getPass() == "123456") {
        response.setHellostring('登陆成功');
    } else {
        response.setHellostring('账号或密码错误');
    }
    callback(null, response);
}
var server = new grpc.Server();
server.addService(
    services.HelloWorldServiceService, {
        hello: hello
    }
);
server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
server.start(function (err, data) {
    console.log("已经启动了server端start111111111")
    console.log(err);
    console.log(data);
});
console.log("已经启动了server端")