// Config
import { SERVER_URL } from "../../../config";

export class PaquetesService {

    static getPaquetes = async () => {
        const paquetesData = await fetch(`${SERVER_URL}/paquetes`);
        const paquetes = await paquetesData.json();
        return paquetes;
    }
}

