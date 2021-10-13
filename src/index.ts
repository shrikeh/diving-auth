import express from "express";
import { bodyParser } from "body-parser";
import { Authenticate } from "~app/RequestHandler/Authenticate";
import { GrpcClient } from "~app/AuthClient/GrpcClient";
import { AuthenticatorClient } from "~proto/Authenticate_grpc_pb";
import { credentials } from "@grpc/grpc-js";

const app = express();

const authRouter = express.Router();

const PORT = process.env.HTTP_PORT as string;
const BASE_URL = process.env.BASE_URL as string;

const AUTH_SERVICE = process.env.AUTH_SERVICE as string;

const authenticate = new Authenticate(new GrpcClient(new AuthenticatorClient(
  AUTH_SERVICE,
  credentials.createInsecure()
)));

authRouter.post('/', bodyParser.raw(), authenticate.handle);

app.use(BASE_URL, authRouter);

app.listen(PORT, () => {
  console.log("jaaaaaa");
});
