import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { useState } from "react";
import { bgImg } from "./datas/wallpaper.data";
import SettingsWindow from "./ui/Window/SettingsWindow";
import Toolbar from "./ui/Toolbar/Toolbar";

function App() {
  const [bg, setBg] = useState(bgImg[0]);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Layout bg={bg}>
      <Home />
      {showSettings && (
        <SettingsWindow setBg={setBg} onClose={() => setShowSettings(false)} />
      )}

      <Toolbar>
        <button className="w-12 h-12" onClick={() => setShowSettings(true)}>
          <img src="/icons/refreshcl_by_tpdk/PNG/Office/wheel-1.png" />
        </button>
      </Toolbar>
    </Layout>
  );
}

export default App;
