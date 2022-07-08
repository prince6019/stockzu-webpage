import "./App.css";
import Blogs from "./components/Blogs";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Team />
      <Login />
      <Carousel />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
