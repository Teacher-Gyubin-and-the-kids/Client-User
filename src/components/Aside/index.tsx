import React, { useState } from 'react';
import Modal from './Modal';
import * as styles from './style.css';

type AsideType = 'booking' | 'timeSelection';

interface User {
  id: string;
  name: string;
}

interface BookingData {
  bookingDate: string;
  bookingTime: string;
}

interface TimeSelectionData {
  selectedTime: string;
  selectedDate: string;
  timeSlots: string[];
}

interface BaseAsideProps {
  type: AsideType;
  position: 'left' | 'right';
  user?: User | null;
}

interface BookingAsideProps extends BaseAsideProps {
  type: 'booking';
  data: BookingData;
  actions?: {
    onEdit?: () => void;
    onCancel?: () => void;
  };
}

interface TimeSelectionAsideProps extends BaseAsideProps {
  type: 'timeSelection';
  data: TimeSelectionData;
  actions: {
    onTimeSelect: (time: string) => void;
    onBooking?: () => void;
  };
}

type AsideProps = BookingAsideProps | TimeSelectionAsideProps;

const Aside: React.FC<AsideProps> = (props) => {
  const { type, position } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const containerClass = `
    ${styles.aside.container}
    ${position === 'left' ? styles.aside.leftPosition : styles.aside.rightPosition}
  `;

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (type === 'booking') {
    const { data } = props as BookingAsideProps;
    
    return (
      <div className={containerClass}>
        <div className={styles.aside.header}>
          <h2 className={styles.aside.title}>
            Weesh
          </h2>
          <p className={styles.aside.subtitle}>
            {data.bookingDate} {data.bookingTime} 예약됨
          </p>
        </div>
      </div>
    );
  }

  if (type === 'timeSelection') {
    const { data, actions } = props as TimeSelectionAsideProps;
    
    return (
      <>
        <div className={containerClass}>
          <div className={styles.aside.header}>
            <h3 className={styles.aside.sectionTitle}>시간 선택</h3>
            <p className={styles.aside.dateText}>{data.selectedDate}</p>
          </div>

          <div className={styles.aside.timeSlotList}>
            {data.timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => actions.onTimeSelect(time)}
                className={`
                  ${styles.aside.timeSlot}
                  ${time === data.selectedTime ? styles.aside.selectedTimeSlot : ''}
                `}
              >
                {time}
              </button>
            ))}
          </div>

          <button 
            className={styles.aside.bookingButton}
            onClick={handleBookingClick}
            disabled={!data.selectedTime}
          >
            예약하기
          </button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          selectedDate={data.selectedDate}
          selectedTime={data.selectedTime}
        />
      </>
    );
  }

  return null;
};

export default Aside;