import httpService from "./http.service";
import configFile from "../../config.json";
const signsEndpoint = "signs/";
const limit = configFile.limit;
const signsService = {
    get: async currentPage => {
        const { data } = await httpService.get(
            `${signsEndpoint}?page=${currentPage}&limit=${limit}`
        );
        return data;
    },
    search: async text => {
        const { data } = await httpService.post(`${signsEndpoint}search/`, {
            payload: text,
        });
        return data;
    },
    getCurrent: async id => {
        const { data } = await httpService.get(`${signsEndpoint}${id}`);
        return data;
    },
    delele: async id => {
        const { data } = await httpService.delete(`${signsEndpoint}${id}`);
        return data;
    },
};
export default signsService;
