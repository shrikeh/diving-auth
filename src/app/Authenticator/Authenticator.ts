import { EncryptedCredentials } from "~proto/EncryptedCredentials_pb";
import { BearerToken } from "~proto/BearerToken_pb";

export interface Authenticator {
  authenticate(encryptedCredentials: EncryptedCredentials): Promise<BearerToken>;
}

export default Authenticator;
