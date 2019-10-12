import axios from "axios";

export const search = async cep => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.REACT_APP_KEY}`);
        return response.data.results[0].geometry.location;
    } catch (e) {
        throw new Error('Tivemos um problema, tente novamente mais tarde');
    }
};

