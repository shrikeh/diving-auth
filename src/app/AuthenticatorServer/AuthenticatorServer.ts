import { sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import { BearerToken } from "~proto/BearerToken_pb";
import { EncryptedCredentials } from "~proto/EncryptedCredentials_pb";
import { ITypedAuthenticatorServer } from "./types";
import Authenticator from "~app/Authenticator";

export class AuthenticatorServer implements ITypedAuthenticatorServer {

  constructor(private readonly authenticator: Authenticator) {}

  async authenticate(
    call: ServerUnaryCall<EncryptedCredentials, BearerToken>,
    callback: sendUnaryData<BearerToken>
  ): Promise<void> {
    const encryptedCredentials = call.request as EncryptedCredentials;

    callback(null, await this.authenticator.authenticate(encryptedCredentials));
  }
}

export default AuthenticatorServer;
