import React from 'react';
import * as styles from './style.css';
import Sad from "@/assets/sad-gray.png"
import { Link } from 'react-router-dom';

type AsideType = 'booking' | 'timeSelection' | 'login';

interface User {
  id: string;
  name: string;
}

interface BookingData {
  studentId: string;
  studentName: string;
  bookingDate: string;
  bookingTime: string;
}

interface TimeSelectionData {
  selectedTime: string;
  selectedDate: string;
  timeSlots: string[];
}

interface LoginData {
  message?: string;
}

interface BaseAsideProps {
  type: AsideType;
  position: 'left' | 'right';
  user?: User | null;
}

interface LoginAsideProps extends BaseAsideProps {
  type: 'login';
  data: LoginData;
}

interface BookingAsideProps extends BaseAsideProps {
  type: 'booking';
  data: BookingData;
  actions: {
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

type AsideProps = LoginAsideProps | BookingAsideProps | TimeSelectionAsideProps;

const Aside: React.FC<AsideProps> = (props) => {
  const { type, position } = props;
  
  const containerClass = `
    ${styles.aside.container}
    ${position === 'left' ? styles.aside.leftPosition : styles.aside.rightPosition}
  `;

  if (type === 'login') {
    const { data } = props as LoginAsideProps;
    
    return (
      <div className={containerClass}>
        <div className={styles.aside.header}>
          <h2 className={styles.aside.title}>Weesh</h2>
          {data.message && (
            <div className={styles.aside.login}>
              <img src={Sad} alt="슬퍼요" width={80} height={80} />
              <p className={styles.aside.loginTitle}>{data.message}</p>
            </div>
          )}
          <Link to={"/login"} className={styles.aside.goToLogin}>
            로그인하기
          </Link>
        </div>
      </div>
    );
  }

  if (type === 'booking') {
    const { data, actions } = props as BookingAsideProps;
    
    return (
      <div className={containerClass}>
        <div className={styles.aside.header}>
          <h2 className={styles.aside.title}>
            {data.studentId} {data.studentName}
          </h2>
          <p className={styles.aside.subtitle}>
            {data.bookingDate} {data.bookingTime} 예약됨
          </p>
        </div>
        
        <div className={styles.aside.buttonGroup}>
          <button 
            className={styles.aside.primaryButton}
            onClick={actions.onEdit}
          >
            수정하기
          </button>
          <button 
            className={styles.aside.secondaryButton}
            onClick={actions.onCancel}
          >
            예약 취소
          </button>
        </div>
      </div>
    );
  }

  if (type === 'timeSelection') {
    const { data, actions } = props as TimeSelectionAsideProps;
    
    return (
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
          onClick={actions.onBooking}
        >
          예약하기
        </button>
      </div>
    );
  }

  return null;
};

export default Aside;