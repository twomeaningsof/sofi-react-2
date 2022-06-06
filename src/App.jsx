import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.scss";
import Warning from "./components/Warning";
import PlayersPage from "./pages/PlayersPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";

function App() {
  return (
    <>
      <Warning>The resoultion is not supported.</Warning>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
