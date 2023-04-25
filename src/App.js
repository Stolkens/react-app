import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import List from "./components/List/List";

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} /> 
          <Route path="*" element={<NotFound />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>        
      </Container>
    </main>
  );
};

export default App;
