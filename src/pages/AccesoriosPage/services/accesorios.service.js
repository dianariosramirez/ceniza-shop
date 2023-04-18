// Utils
import { delay } from "../../../commons/utils";

// Resources
import { accesorios } from "../../../resources/productsData";

export class AccesoriosService {

    static getAccesorios = async () => {
        await delay(3000);
        return accesorios;
    }
}
