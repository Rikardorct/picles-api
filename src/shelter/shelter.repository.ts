import { InjectModel } from "@nestjs/mongoose";
import { shelter } from "./schemas/shelter.schema";
import { Model } from "mongoose";
import IShelterRepository from "./interfaces/shelter.repository.interface";

export class ShelterRepository implements IShelterRepository {
    constructor(
        @InjectModel(shelter.name)
        private readonly shelterModel: Model<shelter>
    ){}

        async get(): Promise<shelter>
    {
        return await this.shelterModel.findOne()
    }
}