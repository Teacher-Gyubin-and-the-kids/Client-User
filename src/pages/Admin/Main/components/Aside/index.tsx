import React from 'react';
import * as styles from './style.css';

interface AdminAsideProps {
  position: 'left' | 'right';
}

const AdminAside: React.FC<AdminAsideProps> = ({ position }) => {
  const containerClass = `
    ${styles.aside.container}
    ${position === 'left' ? styles.aside.leftPosition : styles.aside.rightPosition}
  `;

  const statusItems = [
    { color: '#00CC87', label: '예약' },
    { color: '#A375FF', label: '예약 승인' },
    { color: '#FF5C5F', label: '예약 거부' },
    { color: '#BABABA', label: '만료된 시간, 날짜' },
    { color: '#000000', label: '예약 안됨' }
  ];

  return (
    <div className={containerClass}>
      <div className={styles.aside.header}>
        <h1 className={styles.aside.adminTitle}>관리자 페이지</h1>
      </div>

      <div className={styles.aside.statusSection}>
        <h2 className={styles.aside.statusSectionTitle}>예약 상태 안내</h2>
        
        <div className={styles.aside.statusList}>
          {statusItems.map((item, index) => (
            <div key={index} className={styles.aside.statusItem}>
              <div 
                className={styles.aside.statusIndicator}
                style={{ backgroundColor: item.color }}
              />
              <span className={styles.aside.statusLabel}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAside;