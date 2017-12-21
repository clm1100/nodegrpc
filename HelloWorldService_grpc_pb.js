// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var HelloWorldService_pb = require('./HelloWorldService_pb.js');

function serialize_com_sdp_grpctest_HelloRequest(arg) {
  if (!(arg instanceof HelloWorldService_pb.HelloRequest)) {
    throw new Error('Expected argument of type com.sdp.grpctest.HelloRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_sdp_grpctest_HelloRequest(buffer_arg) {
  return HelloWorldService_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sdp_grpctest_HelloResponse(arg) {
  if (!(arg instanceof HelloWorldService_pb.HelloResponse)) {
    throw new Error('Expected argument of type com.sdp.grpctest.HelloResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_sdp_grpctest_HelloResponse(buffer_arg) {
  return HelloWorldService_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 服务HelloWorld
var HelloWorldServiceService = exports.HelloWorldServiceService = {
  hello: {
    path: '/com.sdp.grpctest.HelloWorldService/hello',
    requestStream: false,
    responseStream: false,
    requestType: HelloWorldService_pb.HelloRequest,
    responseType: HelloWorldService_pb.HelloResponse,
    requestSerialize: serialize_com_sdp_grpctest_HelloRequest,
    requestDeserialize: deserialize_com_sdp_grpctest_HelloRequest,
    responseSerialize: serialize_com_sdp_grpctest_HelloResponse,
    responseDeserialize: deserialize_com_sdp_grpctest_HelloResponse,
  },
};

exports.HelloWorldServiceClient = grpc.makeGenericClientConstructor(HelloWorldServiceService);
