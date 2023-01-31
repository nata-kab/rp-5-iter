import ipAddresses from "./axios/ipAddresses";
import getApiDataAxios from "./axios/getApiDataAxios";

function App() {
  console.log(getApiDataAxios(ipAddresses));
  return <h1>Exercise 5</h1>;
}

export default App;
