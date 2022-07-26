import httpService from "./http.service";

const signsEndpoint = "signs/";

const signsService = {
  get: async () => {
    const { data } = await httpService.get(signsEndpoint);
    return data;
  },
};
export default signsService;
