import { AuthClient } from "~app/AuthClient/AuthClient";
import { BearerToken } from "~proto/BearerToken_pb";
import { IAuthenticatorClient } from "~proto/Authenticate_grpc_pb";
import { EncryptedCredentials } from "~proto/EncryptedCredentials_pb";
import { promisify } from "util";

export class GrpcClient implements AuthClient {

  constructor(private readonly authenticatorClient: IAuthenticatorClient) {}

  async authenticate(message: Buffer): Promise<BearerToken> {
    return this.authenticateEncryptedCredentials(EncryptedCredentials.deserializeBinary(message));
  }

 private async authenticateEncryptedCredentials(encryptedCredentials: EncryptedCredentials): Promise<BearerToken> {
    const promiseClient = promisify(this.authenticatorClient.authenticate.bind(this.authenticatorClient));

    return await promiseClient(encryptedCredentials) as BearerToken;
  }
}
