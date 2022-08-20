/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { CreatePetResponse } from "../responses/pets.pb";
import { CreatePetRequest } from "../requests/pets.pb";

export const protobufPackage = "pets";

export const PETS_PACKAGE_NAME = "pets";

export interface PetsServiceClient {
  create(request: CreatePetRequest): Observable<CreatePetResponse>;
}

export interface PetsServiceController {
  create(
    request: CreatePetRequest
  ):
    | Promise<CreatePetResponse>
    | Observable<CreatePetResponse>
    | CreatePetResponse;
}

export function PetsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["create"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("PetsService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("PetsService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const PETS_SERVICE_NAME = "PetsService";
