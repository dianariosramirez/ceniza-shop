// Utils
import { delay } from "../../../commons/utils";

// Resources
import { tizanas } from "../../../resources/productsData";

export class TizanasService {

    static getTizanas =  async () => {
        await delay(3000);
        return tizanas;
    };
}

