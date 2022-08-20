import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from './controllers/pets.controller';
import { Pet } from './models/entities/pets.entity';
import { PetsService } from './services/pets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetController],
  providers: [PetsService],
})
export class AppModule {}
