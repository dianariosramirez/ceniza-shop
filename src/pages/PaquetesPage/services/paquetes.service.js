// Config
import { SERVER_URL } from "../../../config";
import { delay } from "../../../commons/utils";

export class PaquetesService {

    static getPaquetes = async () => {
        const paquetesData = await fetch(`${SERVER_URL}/paquetes`);
        const paquetes = await paquetesData.json();
        await delay(500);
        return paquetes;
    }
}

