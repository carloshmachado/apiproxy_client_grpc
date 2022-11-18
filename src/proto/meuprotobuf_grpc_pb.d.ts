// package: createuser
// file: meuprotobuf.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as meuprotobuf_pb from "./meuprotobuf_pb";

interface IMeuServiceGRPCService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IMeuServiceGRPCService_IcreateUser;
    healthCheck: IMeuServiceGRPCService_IhealthCheck;
}

interface IMeuServiceGRPCService_IcreateUser extends grpc.MethodDefinition<meuprotobuf_pb.CreateUserRequest, meuprotobuf_pb.CreateUserReply> {
    path: "/createuser.MeuServiceGRPC/createUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<meuprotobuf_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<meuprotobuf_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<meuprotobuf_pb.CreateUserReply>;
    responseDeserialize: grpc.deserialize<meuprotobuf_pb.CreateUserReply>;
}
interface IMeuServiceGRPCService_IhealthCheck extends grpc.MethodDefinition<meuprotobuf_pb.HealthCheckRequest, meuprotobuf_pb.HealthCheckReply> {
    path: "/createuser.MeuServiceGRPC/healthCheck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<meuprotobuf_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<meuprotobuf_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<meuprotobuf_pb.HealthCheckReply>;
    responseDeserialize: grpc.deserialize<meuprotobuf_pb.HealthCheckReply>;
}

export const MeuServiceGRPCService: IMeuServiceGRPCService;

export interface IMeuServiceGRPCServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<meuprotobuf_pb.CreateUserRequest, meuprotobuf_pb.CreateUserReply>;
    healthCheck: grpc.handleUnaryCall<meuprotobuf_pb.HealthCheckRequest, meuprotobuf_pb.HealthCheckReply>;
}

export interface IMeuServiceGRPCClient {
    createUser(request: meuprotobuf_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    createUser(request: meuprotobuf_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    createUser(request: meuprotobuf_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: meuprotobuf_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: meuprotobuf_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: meuprotobuf_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
}

export class MeuServiceGRPCClient extends grpc.Client implements IMeuServiceGRPCClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: meuprotobuf_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    public createUser(request: meuprotobuf_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    public createUser(request: meuprotobuf_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: meuprotobuf_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: meuprotobuf_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: meuprotobuf_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meuprotobuf_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
}
