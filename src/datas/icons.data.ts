import MyPcWindow from "../ui/Window/MyPcWindow";
import InternetWindow from "../ui/Window/InternetWindow";
import CalendarWindow from "../ui/Window/CalendarWindow";
import type { WindowProps } from "../types/windowProps";
import MusicWindow from "../ui/Window/MusicWindow";
import LikeWindow from "../ui/Window/LikeWindow";
import CalculatorWindow from "../ui/Window/CalculatorWindow";
import VideoWindow from "../ui/Window/VideoWindow";

export const icons = {
    "Rashmi's PC" : 'Hardware/MyComputer1',
    Internet : 'System/Globe',
    Calendar : 'System/Calendar',
    Calculator: 'System/Calc',
    Music : 'Hardware/HeadPhones',
    Video: 'System/video',
    "Like This": 'Symbols/Favourite2',
}

// 👇 mapping label to component
export const windowComponents: Record<string, React.FC<WindowProps>> = {
  "Rashmi's PC": MyPcWindow,
  Internet: InternetWindow,
  Calendar: CalendarWindow,
  Calculator: CalculatorWindow,
  Music: MusicWindow,
  Video: VideoWindow,
  "Like This": LikeWindow,
};