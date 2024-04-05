import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.tokens';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { ShelterSchemas, shelter } from './schemas/shelter.schema';



@Module({
  controllers: [ShelterController],

  imports: [MongooseModule.forFeature([{name:shelter.name, schema: ShelterSchemas}])],
  
    providers:
    [
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterDetailsUseCase

    }
  ]
})
export class ShelterModule {}
