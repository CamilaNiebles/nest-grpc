/* eslint-disable */
export const protobufPackage = "pets";

export enum Gender {
  FEMALE = 0,
  MALE = 1,
}

export interface Pet {
  name: string;
  age: number;
  ownerInformation: Owner | undefined;
  gender: Gender;
}

export interface Owner {
  name: string;
  lastName: string;
  ID: number;
  contactInformation: Contact | undefined;
}

export interface Contact {
  telephoneNumber: number;
  email: string;
}

export const PETS_PACKAGE_NAME = "pets";
