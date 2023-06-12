// Config
import { SERVER_URL } from "../../../config";
import { delay } from "../../../commons/utils";

export class AccesoriosService {

    static getAccesorios = async () => {
        const accesoriosData = await fetch(`${SERVER_URL}/accesorios`);
        const accesorios = await accesoriosData.json();
        await delay(500);
        return accesorios;
    }
}