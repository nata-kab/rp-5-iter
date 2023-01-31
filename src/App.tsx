import ipAddresses from "./axios/ipAddresses";
import getApiDataAxios from "./axios/getApiDataAxios";
import "./App.css";

function App() {
  console.log(getApiDataAxios(ipAddresses));
  return <h1 className="title">Exercise 5</h1>;
}

export default App;
