import logo from "./connor-circle.png";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [factData, setFactData] = useState(null);
  const [clockwise, setClockwise] = useState(true);

  const getFacts = async () => {
    const { data } = await axios.get(
      "https://new-api-cm.herokuapp.com/axoltl-facts"
    );
    setFactData(data);
  };

  const handleImgClick = () => {
    setClockwise(!clockwise);
    getFacts();
  };

  useEffect(() => {
    getFacts();
  }, []);
  return (
    <div className="App-wrapper">
      <img
        src={logo}
        onClick={() => handleImgClick()}
        className={`Connor-logo ${
          clockwise ? "clockwise" : "counter-clockwise"
        }`}
        alt="logo"
      />
      <h3>Placeholder for the Box Game PWA</h3>
      <h4>Here are some axoltl facts. Click my face for more.</h4>
      {factData && factData.facts}
      <br />
      <br />
      {factData && (
        <img style={{ width: "200px" }} src={factData.url} alt="axoltl facts" />
      )}
    </div>
  );
}

export default App;
