// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var meuprotobuf_pb = require('./meuprotobuf_pb.js');

function serialize_createuser_CreateUserReply(arg) {
  if (!(arg instanceof meuprotobuf_pb.CreateUserReply)) {
    throw new Error('Expected argument of type createuser.CreateUserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_createuser_CreateUserReply(buffer_arg) {
  return meuprotobuf_pb.CreateUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_createuser_CreateUserRequest(arg) {
  if (!(arg instanceof meuprotobuf_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type createuser.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_createuser_CreateUserRequest(buffer_arg) {
  return meuprotobuf_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_createuser_HealthCheckReply(arg) {
  if (!(arg instanceof meuprotobuf_pb.HealthCheckReply)) {
    throw new Error('Expected argument of type createuser.HealthCheckReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_createuser_HealthCheckReply(buffer_arg) {
  return meuprotobuf_pb.HealthCheckReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_createuser_HealthCheckRequest(arg) {
  if (!(arg instanceof meuprotobuf_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type createuser.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_createuser_HealthCheckRequest(buffer_arg) {
  return meuprotobuf_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var MeuServiceGRPCService = exports.MeuServiceGRPCService = {
  // Sends a greeting
createUser: {
    path: '/createuser.MeuServiceGRPC/createUser',
    requestStream: false,
    responseStream: false,
    requestType: meuprotobuf_pb.CreateUserRequest,
    responseType: meuprotobuf_pb.CreateUserReply,
    requestSerialize: serialize_createuser_CreateUserRequest,
    requestDeserialize: deserialize_createuser_CreateUserRequest,
    responseSerialize: serialize_createuser_CreateUserReply,
    responseDeserialize: deserialize_createuser_CreateUserReply,
  },
  healthCheck: {
    path: '/createuser.MeuServiceGRPC/healthCheck',
    requestStream: false,
    responseStream: false,
    requestType: meuprotobuf_pb.HealthCheckRequest,
    responseType: meuprotobuf_pb.HealthCheckReply,
    requestSerialize: serialize_createuser_HealthCheckRequest,
    requestDeserialize: deserialize_createuser_HealthCheckRequest,
    responseSerialize: serialize_createuser_HealthCheckReply,
    responseDeserialize: deserialize_createuser_HealthCheckReply,
  },
};

exports.MeuServiceGRPCClient = grpc.makeGenericClientConstructor(MeuServiceGRPCService);
