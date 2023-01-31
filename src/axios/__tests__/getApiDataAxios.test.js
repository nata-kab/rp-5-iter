import { cleanup } from "@testing-library/react";
import mockAxios from "axios";
import getApiDataAxios from "../getApiDataAxios";

const ipAddressesArr = ["1.1.1.1"];

const testData = {
  query: "1.1.1.1",
  country: "USA",
  as: "test",
};
afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("getApiDataAxios", () => {
  it("call axios and return a response", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: testData,
      })
    );

    const ipData = await getApiDataAxios(ipAddressesArr);

    expect(ipData).toEqual(ipData);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `http://ip-api.com/json/${ipAddressesArr}?fields=query,country,as`
    );
  });
});
