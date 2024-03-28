import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header/Header";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import BeastByHorns from "./components/BeastByHorns";

function App() {
  const [selectBeast, setSelectBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (selectedValue) => {
    if (selectedValue === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(beast => beast.horns.toString() === selectedValue);
      setFilteredData(filtered);
    }
  }

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
      <BeastByHorns data={data} handleFilter={handleFilter} />

      <Gallery 
      filteredData={filteredData}
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
