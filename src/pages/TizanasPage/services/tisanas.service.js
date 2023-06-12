// Config
import { SERVER_URL } from "../../../config";
import { delay } from "../../../commons/utils";

export class TisanasService {

    static getTisanas =  async () => {
        const tisanasData = await fetch(`${SERVER_URL}/tizanas`);
        const tisanas = await tisanasData.json();
        await delay(500);
        return tisanas;
    };
}
