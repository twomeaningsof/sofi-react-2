import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warning from "./components/Warning";
import PlayersPage from "./pages/PlayersPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import "./style/index.scss";

const App = () => (
  <>
    <Warning>The resoultion is not supported.</Warning>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayersPage pageSize={20} />} />
        <Route path="/teams" element={<TeamsPage pageSize={10} />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
