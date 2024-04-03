import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

 export default class GetShelterDetailsUseCase implements 
 IUseCase<null, GetShelterDetailsUseCaseOutput>{
     run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
         shelterName: 'Abriguinho novo',
         ShelterMail: 'abriguinho@gmail.com',
         shelterWhatsapp: '19992197030',
         ShelterPhone: '19993140801',
         createdAt: new Date (),
         updatedAt: new Date ()

        }))
     }
    }