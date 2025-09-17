import { theme } from "@/styles";
import { style } from "@vanilla-extract/css";

export const timeSlotList = {
  container: style({
    width: "356px",
    background: theme.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "absolute",
    right: "0",
    top: "0",
    padding: "24px",
    overflowY: "auto",
  }),
  
  header: style({
    marginBottom: "24px",
  }),
  
  sectionTitle: style({
    fontSize: '28px',
    fontWeight: '600',
    color: '#222222',
    marginBottom: "16px",
    marginTop: '56px',
  }),
  
  dateText: style({
    fontSize: '14px',
    color: '#878787',
    marginTop: "8px",
  }),
  
  list: style({
    display: "flex",
    width: "268px",
    flexDirection: "column",
    borderTop: "1px solid #D9D9D9",
    gap: "8px",
    flex: 1,
    overflowY: "auto",
    marginBottom: "16px",
    paddingRight: "4px",
    paddingTop: "15px",
    marginTop: "20px",
    
    "::-webkit-scrollbar": {
      width: "6px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      borderRadius: "3px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#c1c1c1",
      borderRadius: "3px",
    },
  }),
  
  timeSlot: style({
    width: "100%",
    height: "57px",
    textAlign: "left",
    padding: "12px 0",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.2s ease",
    paddingLeft: "24px",
    
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: "#f3f4f6",
      },
    },
    
    ":disabled": {
      cursor: "default",
    },
  }),
  
  timeSlotContent: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2px",
    cursor: "pointer",
  }),
  
  timeText: style({
    fontSize: "17px",
    fontWeight: "400",
  }),
  
  statusText: style({
    fontSize: "12px",
    fontWeight: "400",
  }),

  emptyState: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    fontSize: "18px",
    fontWeight: "500",
    color: "#666",
  }),
};

export const statusStyles = {
  pending: style({
    color: '#00CC87',
  }),
  accepted: style({
    color: '#A375FF',
  }),
  rejected: style({
    color: '#FF5C5F',
  }),
  expired: style({
    color: '#BABABA',
  }),
  available: style({
    color: '#000000',
  }),
};