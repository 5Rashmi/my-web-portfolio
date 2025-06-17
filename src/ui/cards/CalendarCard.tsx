import { useState } from "react";
import { getCalendar } from "../../utils/calendar";

const CalendarCard = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [showYearPicker, setShowYearPicker] = useState(false);

  const { calendarDays } = getCalendar(year, month);

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const handleYearSelect = (selectedYear: number) => {
    setYear(selectedYear);
    setShowYearPicker(false);
  };

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="px-2 py-1 bg-gray-700 rounded">
          ◀
        </button>
        <h2
          onClick={() => setShowYearPicker(!showYearPicker)}
          className="text-xl font-bold cursor-pointer"
        >
          {monthName} {year}
        </h2>
        <button onClick={handleNext} className="px-2 py-1 bg-gray-700 rounded">
          ▶
        </button>
      </div>

      {showYearPicker && (
        <div className="absolute max-h-[10rem] overflow-y-auto scrollbar-custom top-16 left-1/2 -translate-x-1/2 bg-gray-800 border border-gray-600 p-4 rounded shadow grid grid-cols-4 gap-2 z-30">
          {Array.from({ length: 200 }, (_, i) => {
            const y = today.getFullYear() - 100 + i;
            return (
              <button
                key={y}
                onClick={() => handleYearSelect(y)}
                className={`px-2 py-1 rounded hover:bg-blue-600 ${
                  y === year
                    ? "bg-blue-700 text-white font-semibold"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm font-semibold text-gray-400">
            {day}
          </div>
        ))}

        {calendarDays.map((date, i) => {
          const isToday = date && date.toDateString() === today.toDateString();

          return (
            <div
              key={i}
              className={`h-12 flex flex-col items-center justify-center rounded-lg text-xs ${
                !date
                  ? ""
                  : isToday
                  ? "bg-blue-700 text-white font-bold"
                  : date < today
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-800 text-white"
              }`}
            >
              {date && (
                <>
                  <div className="text-sm">{date.getDate()}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarCard;
