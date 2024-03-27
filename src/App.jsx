import "./style.css";
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header title="Horned Beast" />
      <Gallery />
      <Footer />
    </>
  )
}

export default App