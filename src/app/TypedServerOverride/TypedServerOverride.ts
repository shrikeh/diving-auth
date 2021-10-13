import { Server, ServiceDefinition } from "@grpc/grpc-js";

export class TypedServerOverride extends Server {
  addTypedService<TypedServiceImplementation extends Record<any,any>>(
    service: ServiceDefinition,
    implementation: TypedServiceImplementation
  ): void {
    this.addService(service, implementation);
  }
}

export default TypedServerOverride;
