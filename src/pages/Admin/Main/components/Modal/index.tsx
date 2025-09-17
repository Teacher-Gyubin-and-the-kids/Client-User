import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import * as styles from './style.css';
import axios from 'axios';

type ModalType = 'accepted' | 'info';

type BookingStatus = "pending" | "accepted" | "rejected" | "expired" | "available";

interface TimeSlot {
  id?: number;
  time: string;
  status: BookingStatus;
  studentName?: string;
  studentId?: string;
  reason?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate?: string;
  timeSlot: TimeSlot;
  type: ModalType;
  onUpdateSlot?: (updatedSlot: TimeSlot) => void;
}

const Modal: React.FC<ModalProps> = ({ 
  onClose, 
  selectedDate = "",
  timeSlot,
  type = 'accepted',
  onUpdateSlot = () => {}
}) => {
  const [roomNumber, setRoomNumber] = useState(timeSlot?.studentId || '');
  const [name, setName] = useState(timeSlot?.studentName || '');
  const [description, setDescription] = useState(timeSlot?.reason || '');
  const [id, setId] = useState<number | undefined>(timeSlot?.id);

  useEffect(() => {
    setRoomNumber(timeSlot?.studentId || '');
    setName(timeSlot?.studentName || '');
    setDescription(timeSlot?.reason || '');
    setId(timeSlot?.id);
  }, [timeSlot]);

  const handleSubmit = async () => {
    try {
      await axios.patch(
        `http://172.28.7.18:8080/advice/${timeSlot.id}/approve`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
      );

      onUpdateSlot?.({ ...timeSlot, status: 'accepted' });
      alert('승인되었습니다.');
      onClose();
    } catch (e) {
      console.error(e);
      alert('승인 요청 실패');
    }
  };

  const handleReject = async () => {
    try {
      await axios.delete(
        `http://172.28.7.18:8080/advice/${timeSlot.id}/delete`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
      );

      onUpdateSlot?.({ ...timeSlot, status: 'rejected' });
      alert('거부되었습니다.');
      onClose();
    } catch (e) {
      console.error(e);
      alert('거부 요청 실패');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal.container}>
        <div className={styles.modal.header}>
          <button className={styles.modal.backButton} onClick={onClose}>
            <ChevronLeft size={24} />
          </button>
          <h2 className={styles.modal.title}>{selectedDate}</h2>
        </div>

        <div className={styles.modal.content}>
          <div className={styles.modal.field}>
            <label className={styles.modal.label}>학번</label>
            <div className={styles.modal.displayBox}>{roomNumber}</div>
          </div>

          <div className={styles.modal.field}>
            <label className={styles.modal.label}>이름</label>
            <div className={styles.modal.displayBox}>{name}</div>
          </div>

          <div className={styles.modal.field}>
            <label className={styles.modal.label}>상담 사유</label>
            <div className={styles.modal.textareaDisplay}>{description}</div>
          </div>
        </div>

        {type === 'accepted' && timeSlot.status === 'pending' && (
          <div className={styles.modal.buttonGroup}>
            <button className={styles.modal.cancelButton} onClick={handleReject}>
              거부
            </button>
            <button className={styles.modal.submitButton} onClick={handleSubmit}>
              승인
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;