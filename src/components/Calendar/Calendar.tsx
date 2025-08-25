import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as styles from './Calendar.css';

interface CalendarSectionProps {
  selectedDate: number | null;
  onDateSelect: (date: number) => void;
  currentMonth?: string;
  currentDate?: Date;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  selectedDate,
  onDateSelect,
  currentMonth = "2025.07",
  currentDate = new Date(),
  onPrevMonth,
  onNextMonth
}) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const firstDayOfWeek = firstDay.getDay();
    
    const daysInMonth = lastDay.getDate();
    
    const calendar: (number | null)[][] = [];
    let currentWeek: (number | null)[] = [];
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push(day);
      
      if (currentWeek.length === 7) {
        calendar.push([...currentWeek]);
        currentWeek = [];
      }
    }
    
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      calendar.push([...currentWeek]);
    }
    
    return calendar;
  }, [currentDate]);

  const today = useMemo(() => {
    const now = new Date();
    const isCurrentMonth = 
      now.getFullYear() === currentDate.getFullYear() && 
      now.getMonth() === currentDate.getMonth();
    
    return isCurrentMonth ? now.getDate() : null;
  }, [currentDate]);

  const isPastDate = (day: number | null) => {
    if (!day) return false;
    
    const now = new Date();
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return dateToCheck < todayStart;
  };

  const getButtonClassName = (day: number | null, isToday: boolean, isPast: boolean, isSelected: boolean) => {
    const classes = [styles.calendar.dateButton];
    
    if (!day) classes.push(styles.calendar.invisibleDate);
    if (isToday) classes.push(styles.calendar.todayDate);
    if (isPast) classes.push(styles.calendar.pastDate);
    if (isSelected) classes.push(styles.calendar.selectedDate);
    
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className={styles.calendar.container}>
      <div>
        <h3 className={styles.calendar.sectionTitle}>상담 날짜 선택</h3>
        
        <div className={styles.calendar.header}>
          <button 
            className={styles.calendar.navButton}
            onClick={onPrevMonth}
          >
            <ChevronLeft size={16} />
          </button>
          <span className={styles.calendar.month}>{currentMonth}</span>
          <button 
            className={styles.calendar.navButton}
            onClick={onNextMonth}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className={styles.calendar.daysGrid}>
          {daysOfWeek.map((day, index) => (
            <div key={index} className={styles.calendar.dayHeader}>
              {day}
            </div>
          ))}
        </div>

        <div className={styles.calendar.grid}>
          {calendarDays.flat().map((day, index) => {
            const isToday = day === today;
            const isPast = isPastDate(day);
            const isSelected = day === selectedDate;
            
            return (
              <button
                key={index}
                onClick={() => day && !isPast && onDateSelect(day)}
                disabled={!day || isPast}
                className={getButtonClassName(day, isToday, isPast, isSelected)}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;