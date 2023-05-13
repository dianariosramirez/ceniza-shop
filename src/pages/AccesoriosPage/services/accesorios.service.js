// Config
import { SERVER_URL } from "../../../config";

export class AccesoriosService {

    static getAccesorios = async () => {
        const accesoriosData = await fetch(`${SERVER_URL}/accesorios`);
        const accesorios = await accesoriosData.json();
        return accesorios;
    }
}