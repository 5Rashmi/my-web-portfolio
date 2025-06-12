import MyPcWindow from "../ui/Window/MyPcWindow";
import InternetWindow from "../ui/Window/InternetWindow";
import CalendarWindow from "../ui/Window/CalendarWindow";
import type { WindowProps } from "../types/windowProps";
import MusicWindow from "../ui/Window/MusicWindow";

export const icons = {
    "Rashmi's PC" : 'Hardware/MyComputer1',
    Internet : 'Network/Internet_Connection',
    Calendar : 'System/Calendar',
    Music : 'Hardware/HeadPhones'
}

// 👇 mapping label to component
export const windowComponents: Record<string, React.FC<WindowProps>> = {
  "Rashmi's PC": MyPcWindow,
  Internet: InternetWindow,
  Calendar: CalendarWindow,
  Music: MusicWindow
};