// package: auth
// file: EncryptedCredentials.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EncryptedCredentials extends jspb.Message { 
    getCredentials(): string;
    setCredentials(value: string): EncryptedCredentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EncryptedCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: EncryptedCredentials): EncryptedCredentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EncryptedCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EncryptedCredentials;
    static deserializeBinaryFromReader(message: EncryptedCredentials, reader: jspb.BinaryReader): EncryptedCredentials;
}

export namespace EncryptedCredentials {
    export type AsObject = {
        credentials: string,
    }
}
