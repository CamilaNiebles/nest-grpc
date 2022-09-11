# NestJs gRPC

### What is this repository for?

This repo is an implementation using good practices in NestJs and gRPC as a protocol

### Docker Postgres configuration

To validate the config of the postgres container use `docker compose -f docker-compose.postgres.yml --env-file .env config` The flag `-f` is used to specify the name of the file.
To run the container using the docker-compose file, use the command `docker compose -f docker-compose.postgres.yml --env-file .env up -d`

### Who do I talk to?

- CNieblesR
