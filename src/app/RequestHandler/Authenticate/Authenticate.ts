import { Request, Response } from "express";
import AuthClient from "~app/AuthClient/AuthClient";

export class Authenticate {

  constructor(private readonly authClient: AuthClient) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      if (!req.body) {

      }
      const encryptedCredentials = Buffer.from(req.body, "base64");

      const bearerToken = await this.authClient.authenticate(encryptedCredentials);
      res.send(this.base64EncodeBearerToken(bearerToken.serializeBinary()));
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private base64EncodeBearerToken(serializedBearerToken: Uint8Array): string {
    return Buffer.from(serializedBearerToken).toString("base64");
  }
}

export default Authenticate;


