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
      case "expired":
        return "만료됨";
      default:
        return "";
    }
  };

  const now = new Date();

  const isExpired = (dateStr: string, timeStr: string) => {
    // "08:40 ~ 09:30" → "09:30"
    const endTime = timeStr.split("~")[1]?.trim();
    console.log(endTime);
    if (!endTime) return false;

    // dateStr: "2025-09-17"
    const slotDateTime = new Date(`${dateStr}T${endTime}:00`);
    console.log(slotDateTime);
    return slotDateTime <= now;
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
        {timeSlots.map((timeSlot) => {
          const expired = isExpired(selectedDate, timeSlot.time);
          const effectiveStatus: BookingStatus = expired ? "expired" : timeSlot.status;

          return (
            <button
              key={timeSlot.time}
              onClick={() => onTimeSlotSelect(timeSlot)}
              className={`${styles.timeSlotList.timeSlot} ${statusStyles[effectiveStatus]}`}
              disabled={effectiveStatus === "available" || effectiveStatus === "expired"}
            >
              <div className={styles.timeSlotList.timeSlotContent}>
                <span className={styles.timeSlotList.timeText}>{timeSlot.time}</span>
                <span className={styles.timeSlotList.statusText}>
                  {getStatusText(effectiveStatus)}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotList;