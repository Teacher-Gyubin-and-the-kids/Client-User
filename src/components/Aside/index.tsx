import React, { useState } from "react";
import Modal from "./Modal";
import * as styles from "./style.css";
import { useRequestLogout } from "@/services/auth/auth.mutation";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Sad from "@/assets/sad-gray.png";
import { Toastify } from "../Toastify";

type AsideType = "booking" | "timeSelection";

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
  position: "left" | "right";
  user?: User | null;
  isLoggedIn?: boolean;
}

interface BookingAsideProps extends BaseAsideProps {
  type: "booking";
  data?: BookingData;
  actions?: {
    onLogin?: () => void;
  };
}

interface TimeSelectionAsideProps extends BaseAsideProps {
  type: "timeSelection";
  data: TimeSelectionData;
  actions: {
    onTimeSelect: (time: string) => void;
    onBooking?: () => void;
  };
}

type AsideProps = BookingAsideProps | TimeSelectionAsideProps;

const Aside: React.FC<AsideProps> = (props) => {
  const { type, position, isLoggedIn: propIsLoggedIn = false } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn: authIsLoggedIn, checkAuthStatus } = useAuth();
  const { mutate: logout, isPending } = useRequestLogout();

  const isLoggedIn = propIsLoggedIn || authIsLoggedIn;

  const containerClass = `
    ${styles.aside.container}
    ${
      position === "left"
        ? styles.aside.leftPosition
        : styles.aside.rightPosition
    }
  `;

  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("정말 로그아웃을 하시겠습니까?");

    if (confirmLogout) {
      logout(undefined, {
        onSuccess: () => {
          checkAuthStatus();
          Toastify({ type: "info", content: "로그아웃 되었습니다." });
        },
        onError: () => {
          checkAuthStatus();
        },
      });
    }
  };

  const handleBookingClick = () => {
    if (type === "timeSelection") {
      const { actions } = props as TimeSelectionAsideProps;
      if (actions.onBooking) {
        actions.onBooking();
      } else {
        setIsModalOpen(true);
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (type === "booking") {
    return (
      <div className={containerClass}>
        <div className={styles.aside.header}>
          <h2 className={styles.aside.title}>Weesh</h2>
        </div>
        {isLoggedIn ? (
            <div className={styles.aside.buttonGroup}>
              <button
                className={styles.aside.bookingButton}
                onClick={handleLogoutClick}
                disabled={isPending}
              >
                {isPending ? "로그아웃 중..." : "로그아웃"}
              </button>
            </div>
        ) : (
          <div className={styles.aside.loginPrompt}>
            <img src={Sad} alt="슬퍼요" width={80} />
            <p className={styles.aside.loginMessage}>
              상담 예약을 위해 로그인이 필요합니다.
            </p>
            <Link className={styles.aside.loginText} to="/login">
              로그인하기
            </Link>
          </div>
        )}
      </div>
    );
  }

  if (type === "timeSelection") {
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
                  ${
                    time === data.selectedTime
                      ? styles.aside.selectedTimeSlot
                      : ""
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>

          <button
            className={
              !data.selectedTime || !isLoggedIn
                ? styles.aside.bookingButtonDisabled
                : styles.aside.bookingButton
            }
            onClick={handleBookingClick}
            disabled={!data.selectedTime || !isLoggedIn}
          >
            {isLoggedIn ? "예약하기" : "로그인 후 예약 가능"}
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
