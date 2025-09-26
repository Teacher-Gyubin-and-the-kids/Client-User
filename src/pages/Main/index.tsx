import Aside from '@/components/Aside';
import CalendarSection from '@/components/Calendar/Calendar';
import Modal from '@/components/Aside/Modal';
import { useAside } from './useAside';
import * as styles from './style.css';

const Main = () => {
  const {
    selectedDate,
    selectedTime,
    currentDate,
    selectedDateText,
    currentMonthText,
    bookingData,
    timeSelectionData,
    isModalOpen,
    actions
  } = useAside();

  return (
    <div className={styles.booking.container}>
      <Aside
        type="booking"
        position="left"
        data={bookingData}
      />

      <CalendarSection
        selectedDate={selectedDate}
        onDateSelect={actions.setSelectedDate}
        currentMonth={currentMonthText} 
        currentDate={currentDate} 
        onPrevMonth={actions.goToPrevMonth}
        onNextMonth={actions.goToNextMonth}
      />

      <Aside
        type="timeSelection"
        position="right"
        data={timeSelectionData}
        actions={{
          onTimeSelect: actions.setSelectedTime,
          onBooking: actions.handleNewBooking,
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={actions.closeModal}
        selectedDate={selectedDateText}
        selectedTime={selectedTime}
      />
    </div>
  );
};

export default Main;