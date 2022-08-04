import httpService from "./http.service";

const signsEndpoint = "signs/";

const signsService = {
  get: async () => {
    const { data } = await httpService.get(`${signsEndpoint}?padge=2&limit=3`);
    return data;
  },
};
export default signsService;
