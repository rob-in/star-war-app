import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CharacterDetails, CharacterList } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}
export default App;
