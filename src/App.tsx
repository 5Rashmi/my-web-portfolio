import "./App.css";
import { lazy, useEffect, useState } from "react";
import { bgImg } from "./datas/wallpaper.data";
import Toolbar from "./ui/Toolbar/Toolbar";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "./ui/loading/LoadingScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const Home = lazy(() => import("./components/Home"));
const SettingsWindow = lazy(() => import("./ui/Window/SettingsWindow"));
const MessageWindow = lazy(() => import("./ui/Window/MessageWindow"));

function App() {
  const [bg, setBg] = useState(bgImg[0]);
  const [showSettings, setShowSettings] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Layout bg={bg}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Toaster position="bottom-right" />
            {showSettings && (
              <SettingsWindow
                setBg={setBg}
                onClose={() => setShowSettings(false)}
              />
            )}
            {showMessage && (
              <MessageWindow onClose={() => setShowMessage(false)} />
            )}

            <Toolbar>
              <button
                className="w-10 h-10"
                onClick={() => setShowSettings(true)}
              >
                <img src="/icons/refreshcl_by_tpdk/PNG/Office/wheel-1.png" />
              </button>
              <button
                className="w-10 h-10"
                onClick={() => setShowMessage(true)}
              >
                <img src="/icons/ui-icons/chat.png" />
              </button>
            </Toolbar>
          </>
        )}
      </Layout>
    </Router>
  );
}

export default App;
