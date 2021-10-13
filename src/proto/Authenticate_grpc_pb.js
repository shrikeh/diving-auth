// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var BearerToken_pb = require('./BearerToken_pb.js');
var EncryptedCredentials_pb = require('./EncryptedCredentials_pb.js');

function serialize_auth_BearerToken(arg) {
  if (!(arg instanceof BearerToken_pb.BearerToken)) {
    throw new Error('Expected argument of type auth.BearerToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_BearerToken(buffer_arg) {
  return BearerToken_pb.BearerToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_EncryptedCredentials(arg) {
  if (!(arg instanceof EncryptedCredentials_pb.EncryptedCredentials)) {
    throw new Error('Expected argument of type auth.EncryptedCredentials');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_EncryptedCredentials(buffer_arg) {
  return EncryptedCredentials_pb.EncryptedCredentials.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthenticatorService = exports.AuthenticatorService = {
  authenticate: {
    path: '/auth.Authenticator/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: EncryptedCredentials_pb.EncryptedCredentials,
    responseType: BearerToken_pb.BearerToken,
    requestSerialize: serialize_auth_EncryptedCredentials,
    requestDeserialize: deserialize_auth_EncryptedCredentials,
    responseSerialize: serialize_auth_BearerToken,
    responseDeserialize: deserialize_auth_BearerToken,
  },
};

exports.AuthenticatorClient = grpc.makeGenericClientConstructor(AuthenticatorService);
