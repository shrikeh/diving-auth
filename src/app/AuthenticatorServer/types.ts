import { IAuthenticatorServer } from "~proto/Authenticate_grpc_pb";

type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends { [_ in keyof T]: infer U } ? U : never;

type KnownOnly<T extends Record<any, any>> = Pick<T, KnownKeys<T>>;

export type ITypedAuthenticatorServer = KnownOnly<IAuthenticatorServer>;
