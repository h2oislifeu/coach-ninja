import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, addMonths, subMonths, isSameDay } from 'date-fns';

const Calendar = () => {
  const [selectedTab, setSelectedTab] = useState('calendar');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper to generate calendar days for the current month
  const generateCalendarDays = () => {
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);
    const startDate = startOfWeek(startMonth);
    const days = [];

    let current = startDate;

    while (current <= endMonth || current.getDay() !== 0) {
      days.push(
        <div
          key={current}
          className={`calendar-day ${isSameDay(current, new Date()) ? 'today' : ''}`}
        >
          <span className="day-number">{current.getMonth() === currentDate.getMonth() ? format(current, 'd') : ''}</span>
        </div>
      );
      current = addDays(current, 1);
    }

    return days;
  };

  return (
    <div className="calendar-section">
      <div className="calendar-nav">
        <button 
          className={`tab ${selectedTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setSelectedTab('calendar')}
        >
          Calendar
        </button>
        <button 
          className={`tab ${selectedTab === 'holiday' ? 'active' : ''}`}
          onClick={() => setSelectedTab('holiday')}
        >
          Holiday
        </button>
        <button 
          className={`tab ${selectedTab === 'timeoff' ? 'active' : ''}`}
          onClick={() => setSelectedTab('timeoff')}
        >
          Time Off
        </button>
      </div>

      <div className="calendar-header">
        <button className="nav-btn" onClick={() => setCurrentDate(subMonths(currentDate, 1))}>&lt;</button>
        <h3>{format(currentDate, 'MMMM yyyy')}</h3>
        <button className="nav-btn" onClick={() => setCurrentDate(addMonths(currentDate, 1))}>&gt;</button>
      </div>

      <div className="calendar-grid">
        <div className="weekdays">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="days-grid">
          {generateCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
