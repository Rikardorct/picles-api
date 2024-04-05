import { shelter } from "../schemas/shelter.schema";


export default interface IShelterRepository {
    get (): Promise<shelter>;
}