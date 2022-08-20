import { join } from 'path';
import { PETS_SERVICE_NAME } from '/Users/cnieblesr/Documents/code/gRPC/nest-grpc/protos/src/services/pets.pb';
export const grpcOptions = {
  url: 'localhost:6379',
  package: PETS_SERVICE_NAME,
  protoPath: join(__dirname, '../../../', '/protos/src/services/pets.pb'),
};
