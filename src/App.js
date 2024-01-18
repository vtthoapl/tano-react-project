
import './App.css';
import CarouselPage from './Carousel/carousel';
import FastGame from './FastGame/fastGame';
import Footer from './Footer/footer';
import NavBar from './Nav/navBar';
import Services from './Services/services';
import Table from './Table/table';
import Card from './Card/card';


function App() {
  return (
    <div className="App">
      <NavBar />
    {/*   <CarouselPage /> is inside Nav page */}
      <FastGame />
      <Table />
      <Services />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
