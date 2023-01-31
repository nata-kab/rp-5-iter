import { cleanup } from "@testing-library/react";
import mockAxios from "axios";
import getApiDataAxios from "../getApiDataAxios";

const ipAddressesArr = ["1.1.1.1"];

const mockResponseData = [
  {
    data: {
      query: "1.1.1.1",
      country: "USA",
      as: "test",
    },
  },
];

const mockOutputGetApi = [
  {
    id: "1.1.1.1",
    country: "USA",
    as: "test",
  },
];

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("getApiDataAxios", () => {
  it("call axios and return a response", async () => {
    (mockAxios.all as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(mockResponseData)
    );

    const ipData = await getApiDataAxios(ipAddressesArr);
    expect(ipData).toEqual(mockOutputGetApi);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `http://ip-api.com/json/${ipAddressesArr}?fields=query,country,as`
    );
  });
});
