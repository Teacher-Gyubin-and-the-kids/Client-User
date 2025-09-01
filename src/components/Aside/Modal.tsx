import React, { useState } from 'react';
import { useRequestAdvice } from '@/services/advice/advice.mutation';
import { type AdviceType } from '@/types';
import * as styles from './style.css';

interface AdviceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  selectedTime: string;
}

const AdviceBookingModal: React.FC<AdviceBookingModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  selectedTime
}) => {
  const [formData, setFormData] = useState({
    content: '',
    studentNumber: '',
    fullName: ''
  });

  const { mutate: requestAdvice, isPending } = useRequestAdvice();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const adviceData: AdviceType = {
      desiredDate: selectedDate,
      desiredTime: selectedTime,
      content: formData.content,
      studentNumber: parseInt(formData.studentNumber),
      fullName: formData.fullName
    };

    requestAdvice(adviceData, {
      onSuccess: () => {
        alert('상담 예약이 완료되었습니다!');
        onClose();
        // 폼 초기화
        setFormData({
          content: '',
          studentNumber: '',
          fullName: ''
        });
      },
      onError: (error) => {
        alert('예약에 실패했습니다. 다시 시도해주세요.');
        console.error('Booking error:', error);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal.overlay} onClick={onClose}>
      <div className={styles.modal.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal.header}>
          <h2 className={styles.modal.title}>상담 예약</h2>
          <button 
            className={styles.modal.closeButton}
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <div className={styles.modal.dateTimeInfo}>
          <p className={styles.modal.dateTimeText}><strong>예약 날짜:</strong> {selectedDate}</p> &nbsp;
          <p className={styles.modal.dateTimeText}><strong>예약 시간:</strong> {selectedTime}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.modal.form}>
          <div className={styles.modal.formGroup}>
            <label htmlFor="fullName" className={styles.modal.label}>
              이름 <span className={styles.modal.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={styles.modal.input}
              required
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className={styles.modal.formGroup}>
            <label htmlFor="studentNumber" className={styles.modal.label}>
              학번 <span className={styles.modal.required}>*</span>
            </label>
            <input
              type="number"
              id="studentNumber"
              name="studentNumber"
              value={formData.studentNumber}
              onChange={handleInputChange}
              className={styles.modal.input}
              required
              placeholder="학번을 입력하세요"
            />
          </div>

          <div className={styles.modal.formGroup}>
            <label htmlFor="content" className={styles.modal.label}>
              상담 내용 <span className={styles.modal.required}>*</span>
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className={styles.modal.textarea}
              required
              placeholder="상담받고 싶은 내용을 자세히 적어주세요"
              rows={4}
            />
          </div>

          <div className={styles.modal.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={styles.modal.cancelButton}
              disabled={isPending}
            >
              취소
            </button>
            <button
              type="submit"
              className={styles.modal.confirmButton}
              disabled={isPending}
            >
              {isPending ? '예약 중...' : '예약 확인'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdviceBookingModal;