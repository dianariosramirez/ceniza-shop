// Utils
import { delay } from "../../../commons/utils";

//Resources
import { paquetes } from "../../../resources/productsData";

export class PaquetesService {

    static getPaquetes = async () => {
        await delay(3000);
        return paquetes;
    }
}