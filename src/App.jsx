import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header/Header";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";

function App() {
  const [selectBeast, setSelectBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBeastSelect = (beastName) => {
    console.log('beastName', beastName);
    // Find the selected beast from data.json
    const selectedBeast = data.find((beast) => beast.title === beastName);
    console.log('Matching beast', selectedBeast)
    if (selectedBeast) {
      setSelectBeast(selectedBeast);
      setShowModal(true);
    }
  };
  return (
    <>
      <Header title="Horned Beast" />
      <Gallery 
      data={data}
      handleBeastSelect={handleBeastSelect} 
      />
      
      {selectBeast && (
        <SelectedBeast
          selectBeast={selectBeast}
          showModal={showModal}
          handleCloseModal={() => setShowModal(false)}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
