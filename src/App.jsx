import { BrowserRouter, Routes, Route } from "react-router";
import Rewards from "./components/Rewards";
import Options from "./components/Options";
import { WalletProvider } from "./context/WalletContext";
import HomePage from "./components/HomePage";
import Analytics from "./components/Analytics";
import LPPositions from "./components/LPPositions";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="/options" element={<Options />} />
            <Route path="/rewards" element={<Rewards/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/lp-positions" elements={<LPPositions/>}/>
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
