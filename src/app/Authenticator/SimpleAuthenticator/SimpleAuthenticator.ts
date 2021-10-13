import Authenticator from "~app/Authenticator";
import { BearerToken } from "~proto/BearerToken_pb";
import { EncryptedCredentials } from "~proto/EncryptedCredentials_pb";

export class SimpleAuthenticator implements Authenticator {
    authenticate(encryptedCredentials: EncryptedCredentials): Promise<BearerToken> {
        throw new Error("Method not implemented.");
    }
}
