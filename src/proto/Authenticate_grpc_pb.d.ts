// package: auth
// file: Authenticate.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Authenticate_pb from "./Authenticate_pb";
import * as BearerToken_pb from "./BearerToken_pb";
import * as EncryptedCredentials_pb from "./EncryptedCredentials_pb";

interface IAuthenticatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authenticate: IAuthenticatorService_IAuthenticate;
}

interface IAuthenticatorService_IAuthenticate extends grpc.MethodDefinition<EncryptedCredentials_pb.EncryptedCredentials, BearerToken_pb.BearerToken> {
    path: "/auth.Authenticator/Authenticate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<EncryptedCredentials_pb.EncryptedCredentials>;
    requestDeserialize: grpc.deserialize<EncryptedCredentials_pb.EncryptedCredentials>;
    responseSerialize: grpc.serialize<BearerToken_pb.BearerToken>;
    responseDeserialize: grpc.deserialize<BearerToken_pb.BearerToken>;
}

export const AuthenticatorService: IAuthenticatorService;

export interface IAuthenticatorServer extends grpc.UntypedServiceImplementation {
    authenticate: grpc.handleUnaryCall<EncryptedCredentials_pb.EncryptedCredentials, BearerToken_pb.BearerToken>;
}

export interface IAuthenticatorClient {
    authenticate(request: EncryptedCredentials_pb.EncryptedCredentials, callback: (error: grpc.ServiceError | null, response: BearerToken_pb.BearerToken) => void): grpc.ClientUnaryCall;
    authenticate(request: EncryptedCredentials_pb.EncryptedCredentials, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: BearerToken_pb.BearerToken) => void): grpc.ClientUnaryCall;
    authenticate(request: EncryptedCredentials_pb.EncryptedCredentials, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: BearerToken_pb.BearerToken) => void): grpc.ClientUnaryCall;
}

export class AuthenticatorClient extends grpc.Client implements IAuthenticatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public authenticate(request: EncryptedCredentials_pb.EncryptedCredentials, callback: (error: grpc.ServiceError | null, response: BearerToken_pb.BearerToken) => void): grpc.ClientUnaryCall;
    public authenticate(request: EncryptedCredentials_pb.EncryptedCredentials, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: BearerToken_pb.BearerToken) => void): grpc.ClientUnaryCall;
    public authenticate(request: EncryptedCredentials_pb.EncryptedCredentials, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: BearerToken_pb.BearerToken) => void): grpc.ClientUnaryCall;
}
