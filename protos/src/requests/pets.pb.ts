/* eslint-disable */
import { Pet } from "../entities/pets.pb";

export const protobufPackage = "pets";

export interface CreatePetRequest {
  pet: Pet | undefined;
}

export const PETS_PACKAGE_NAME = "pets";
