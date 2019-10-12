import axios from "axios";
import {InvalidCodeZip, NotFoundCodeZip} from "../utils/excepitons";

export const search = async cep => {
    try {
        if (!cep || cep.length !== 8)
            throw new InvalidCodeZip('Digite um CEP válido');

        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        if (response.data.erro)
            throw new NotFoundCodeZip('CEP não encontrado');
        return response.data;
    } catch (e) {
        if (e instanceof InvalidCodeZip || e instanceof NotFoundCodeZip)
            throw e;
        throw new Error('Tivemos um problema, tente novamente mais tarde');
    }
};

