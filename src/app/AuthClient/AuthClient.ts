import { BearerToken } from "~proto/BearerToken_pb";

export interface AuthClient {
  authenticate(message: Buffer): Promise<BearerToken>;
}

export default AuthClient;
