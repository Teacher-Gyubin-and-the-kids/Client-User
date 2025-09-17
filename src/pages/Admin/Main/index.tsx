import React, { useEffect, useState } from "react";
import AdminCalendarSection from "./components/Calendar/Calendar";
import AdminAside from "./components/Aside";
import TimeSlotList from "./components/TimeSlotList";
import Modal from "./components/Modal";
import { useAside } from "./useAside";
import axios from "axios";

const mapStatus = (status: string): BookingStatus => {
  switch (status) {
    case "PENDING":
      return "pending";
    case "ACCEPTED":
      return "accepted";
    case "REJECTED":
      return "rejected";
    case "EXPIRED":
      return "expired";
    default:
      return "available";
  }
};

type BookingStatus = "pending" | "accepted" | "rejected" | "expired" | "available";

interface TimeSlot {
  id?: number;
  time: string;
  status: BookingStatus;
  studentName?: string;
  studentId?: string;
  reason?: string;
}

interface AdviceData {
  id: number;
  desiredDate: string;
  desiredTime: string;
  content: string;
  userId: number;
  studentNumber: number;
  fullName: string;
  status: string;
}

const DEFAULT_TIME_SLOTS = [
  "08:40 ~ 09:30",
  "09:40 ~ 10:30",
  "10:40 ~ 11:30",
  "11:40 ~ 12:30",
  "12:40 ~ 13:40",
  "13:40 ~ 14:30",
  "14:40 ~ 15:30",
  "15:40 ~ 16:30",
  "16:40 ~ 18:10",
  "18:20 ~ 19:10",
];

const AdminPage: React.FC = () => {
  const [advices, setAdvices] = useState<AdviceData[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const { currentDate, selectedDate, selectedDateText, actions } = useAside();

  const fetchAdvices = async () => {
    try {
      const res = await axios.get("http://172.28.7.18:8080/advice/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const advicesData: AdviceData[] = Array.isArray(res.data)
        ? res.data.map((item: any) => item.body?.data).filter(Boolean)
        : [];

      setAdvices(advicesData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAdvices();
  }, []);

  const handleTimeSlotUpdate = (updatedSlot: TimeSlot) => {
    setAdvices(prev =>
      prev.map(a =>
        a.id === updatedSlot.id
          ? { ...a, status: updatedSlot.status === "accepted" ? "ACCEPTED" : "REJECTED" }
          : a
      )
    );
  };

  const getSlotsForDate = (): TimeSlot[] => {
    if (!selectedDate) return [];

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    const reserved = advices
      .filter((a) => a.desiredDate === dateStr)
      .map<TimeSlot>((a) => ({
        id: a.id,
        time: a.desiredTime,
        status: mapStatus(a.status),
        studentName: a.fullName,
        studentId: String(a.studentNumber),
        reason: a.content,
      }));

    return DEFAULT_TIME_SLOTS.map((slot) => {
      const match = reserved.find((r) => r.time === slot);
      if (match) return match;
      return { time: slot, status: "available" };
    });
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    if (slot.status === "available" || slot.status === "expired") return;
    setSelectedSlot(slot);
    setModalOpen(true);
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminAside position="left" />

      <div style={{ flex: 1, padding: "20px" }}>
        <AdminCalendarSection
          selectedDate={selectedDate}
          onDateSelect={actions.setSelectedDate}
          currentMonth={`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}
          currentDate={currentDate}
          onPrevMonth={actions.goToPrevMonth}
          onNextMonth={actions.goToNextMonth}
        />

        <TimeSlotList
          selectedDate={selectedDateText === "날짜를 선택해주세요" ? null : selectedDateText}
          timeSlots={getSlotsForDate()}
          onTimeSlotSelect={handleTimeSlotSelect}
        />
      </div>

      {modalOpen && selectedSlot && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          selectedDate={`${selectedDateText} ${selectedSlot.time} 상담`}
          timeSlot={selectedSlot}
          type="accepted"
          onUpdateSlot={handleTimeSlotUpdate}
        />
      )}
    </div>
  );
};

export default AdminPage;