import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShelterModule, MongooseModule.forRoot('mongodb+srv://ricardorct16:Beatriz.1933@picles-cluster.uiwcbfs.mongodb.net/picles?retryWrites=true&w=majority&appName=Picles-cluster')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
