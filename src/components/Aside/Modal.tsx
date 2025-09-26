import React, { useState } from "react";
import { useRequestAdvice } from "@/services/advice/advice.mutation";
import { type AdviceType } from "@/types";
import * as styles from "./style.css";
import { Toastify } from "../Toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  selectedTime: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  selectedTime,
}) => {
  const [content, setContent] = useState("");

  const { mutate: requestAdvice, isPending } = useRequestAdvice();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const showToast = (message: string) => {
    Toastify({ content: message, type: "info" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      showToast("상담 내용을 입력해주세요.");
      return;
    }

    const adviceData: AdviceType = {
      desiredDate: selectedDate,
      desiredTime: selectedTime,
      content: content.trim(),
    };

    requestAdvice(adviceData, {
      onSuccess: () => {
        showToast("상담 예약이 완료되었습니다!");
          onClose();
        setContent("");
      },
      onError: (error) => {
        if(error.message.includes("409")) {
          showToast("이미 예약된 시간입니다. \n다른 시간을 선택해주세요.");
        }
      },
    });
  };

  const handleClose = () => {
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal.overlay} onClick={handleClose}>
      <div
        className={styles.modal.container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal.header}>
          <h2 className={styles.modal.title}>상담 예약</h2>
          <button
            className={styles.modal.closeButton}
            onClick={handleClose}
            type="button"
          >
            ×
          </button>
        </div>

        <div className={styles.modal.dateTimeInfo}>
          <p className={styles.modal.dateTimeText}>
            <strong>예약 날짜:</strong> {selectedDate}
          </p>{" "}
          &nbsp;
          <p className={styles.modal.dateTimeText}>
            <strong>예약 시간:</strong> {selectedTime}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.modal.form}>
          <div className={styles.modal.formGroup}>
            <label htmlFor="content" className={styles.modal.label}>
              상담 내용 <span className={styles.modal.required}>*</span>
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={handleInputChange}
              className={styles.modal.textarea}
              required
              placeholder="상담받고 싶은 내용을 자세히 적어주세요 (2줄 이상)"
              rows={6}
            />
          </div>

          <div className={styles.modal.buttonGroup}>
            <button
              type="button"
              onClick={handleClose}
              className={styles.modal.cancelButton}
              disabled={isPending}
            >
              취소
            </button>
            <button
              type="submit"
              className={styles.modal.confirmButton}
              disabled={isPending || !content.trim()}
            >
              {isPending ? "예약 중..." : "예약 확인"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;