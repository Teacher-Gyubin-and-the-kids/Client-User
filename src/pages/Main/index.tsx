import Aside from '@/components/Aside';
import CalendarSection from '../../components/Calendar/Calendar';
import { useAside } from './useAside';
import * as styles from './style.css';

const BookingMain = () => {
  const {
    selectedDate,
    currentDate,
    currentMonthText,
    bookingData,
    timeSelectionData,
    actions
  } = useAside();

  return (
    <div className={styles.booking.container}>
      {/* 왼쪽 예약 정보 사이드바 */}
      <Aside
        type="booking"
        position="left"
        data={bookingData}
        actions={{
          onEdit: actions.handleEditBooking,
          onCancel: actions.handleCancelBooking
        }}
      />

      {/* 가운데 달력 섹션 */}
      <CalendarSection
        selectedDate={selectedDate}
        onDateSelect={actions.setSelectedDate}
        currentMonth={currentMonthText} 
        currentDate={currentDate} 
        onPrevMonth={actions.goToPrevMonth}
        onNextMonth={actions.goToNextMonth}
      />

      {/* 오른쪽 시간 선택 사이드바 */}
      <Aside
        type="timeSelection"
        position="right"
        data={timeSelectionData}
        actions={{
          onTimeSelect: actions.setSelectedTime,
          onBooking: actions.handleNewBooking,
        }}
      />
    </div>
  );
};

export default BookingMain;