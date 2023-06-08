// Config
import { SERVER_URL } from "../../../config";

export class TisanasService {

    static getTisanas =  async () => {
        const tisanasData = await fetch(`${SERVER_URL}/tizanas`);
        const tisanas = await tisanasData.json();
        return tisanas;
    };
}
