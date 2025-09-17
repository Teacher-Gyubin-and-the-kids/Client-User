import React from "react";
import * as styles from "./style.css";
import { statusStyles } from "./style.css";

type BookingStatus = "pending" | "accepted" | "rejected" | "expired" | "available";

interface TimeSlot {
  time: string;
  status: BookingStatus;
  studentName?: string;
  studentId?: string;
  reason?: string;
}

interface TimeSlotListProps {
  selectedDate: string | null;
  timeSlots: TimeSlot[];
  onTimeSlotSelect: (timeSlot: TimeSlot) => void;
}

const TimeSlotList: React.FC<TimeSlotListProps> = ({ selectedDate, timeSlots, onTimeSlotSelect }) => {
  const getStatusText = (status: BookingStatus) => {
    switch (status) {
      case "pending":
        return "예약됨";
      case "accepted":
        return "승인됨";
      case "rejected":
        return "거부됨";
      default:
        return "";
    }
  };

  if (!selectedDate) {
    return (
      <div className={styles.timeSlotList.container}>
        <div className={styles.timeSlotList.emptyState}>날짜를 선택해 주세요</div>
      </div>
    );
  }

  return (
    <div className={styles.timeSlotList.container}>
      <div className={styles.timeSlotList.header}>
        <h3 className={styles.timeSlotList.sectionTitle}>예약 시간</h3>
        <p className={styles.timeSlotList.dateText}>{selectedDate}</p>
      </div>

      <div className={styles.timeSlotList.list}>
        {timeSlots.map((timeSlot) => (
          <button
            key={timeSlot.time}
            onClick={() => onTimeSlotSelect(timeSlot)}
            className={`${styles.timeSlotList.timeSlot} ${statusStyles[timeSlot.status]}`}
            disabled={timeSlot.status === "available" || timeSlot.status === "expired"}
          >
            <div className={styles.timeSlotList.timeSlotContent}>
              <span className={styles.timeSlotList.timeText}>{timeSlot.time}</span>
              <span className={styles.timeSlotList.statusText}>{getStatusText(timeSlot.status)}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotList;