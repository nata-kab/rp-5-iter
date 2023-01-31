import axios from "axios";

export type IpApiData = {
  query: string;
  country: string;
  as: string;
};

export type GetIpDataResponse = {
  status: string;
  statusText: string;
  data: IpApiData[];
  query: string;
  country: string;
  as: string;
};

const getApiDataAxios = async (ipAddresses: string[]) => {
  const urls: string[] = ipAddresses.map(
    (item) => `http://ip-api.com/json/${item}?fields=query,country,as`
  );

  const requests = urls.map((url) => axios.get<GetIpDataResponse>(url));

  try {
    const apiResponse = await axios.all(requests);
    const apiData = apiResponse.map(({ data }) => {
      const { query, country, as } = data;
      return {
        id: query,
        country: country,
        as: as,
      };
    });
    return apiData;
  } catch (error) {
    console.log("An unexpected error occurred", error);
  }
};

export default getApiDataAxios;
