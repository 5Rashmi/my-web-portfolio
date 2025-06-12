import WallpaperSection from "../../components/WallpaperSection";
import type { WindowProps } from "../../types/windowProps";
import WindowWrapper from "./WindowWrapper";

interface SettingsWindowProps extends WindowProps {
  setBg: (bg: string) => void;
}

const SettingsWindow: React.FC<SettingsWindowProps> = ({ onClose, setBg }) => {
  return (
    <WindowWrapper title="Settings" onClose={onClose}>
      <h1 className="text-xl font-semibold mb-2">Wallpaper</h1>
      <WallpaperSection setBg={setBg} />
    </WindowWrapper>
  );
};
export default SettingsWindow;
