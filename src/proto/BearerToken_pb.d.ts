// package: auth
// file: BearerToken.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BearerToken extends jspb.Message { 
    getToken(): string;
    setToken(value: string): BearerToken;

    hasExpiry(): boolean;
    clearExpiry(): void;
    getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): BearerToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BearerToken.AsObject;
    static toObject(includeInstance: boolean, msg: BearerToken): BearerToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BearerToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BearerToken;
    static deserializeBinaryFromReader(message: BearerToken, reader: jspb.BinaryReader): BearerToken;
}

export namespace BearerToken {
    export type AsObject = {
        token: string,
        expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
