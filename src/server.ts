import { AuthenticatorServer, ITypedAuthenticatorServer } from "~app/AuthenticatorServer";
import { TypedServerOverride } from "~app/TypedServerOverride";
import { AuthenticatorService } from "~proto/Authenticate_grpc_pb";
import { SimpleAuthenticator } from "~app/Authenticator/SimpleAuthenticator";
import { ServerCredentials } from "@grpc/grpc-js";

const server = new TypedServerOverride();

server.addTypedService<ITypedAuthenticatorServer>(
  AuthenticatorService,
  new AuthenticatorServer(new SimpleAuthenticator())
);

server.bindAsync(
  `0.0.0.0:50051`,
  ServerCredentials.createInsecure(),
  (err, port) => {
    console.log("Starting server...");
    console.log(err);
    console.log(port);
    server.start();
    console.log("here");
  }
);


