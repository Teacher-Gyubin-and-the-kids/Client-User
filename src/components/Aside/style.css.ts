import { theme, font, flex } from "@/styles";
import { style } from "@vanilla-extract/css";

export const aside = {
  container: style({
    width: "25%",
    background: theme.white,
    padding: "24px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }),
  
  leftPosition: style({
    ...flex.COLUMN_FLEX,
  }),
  
  rightPosition: style({
    overflowY: "auto",
  }),
  
  header: style({
    marginBottom: "24px",
  }),
  
  title: style({
    ...font.H5,
    color: theme.text,
    marginBottom: "8px",
  }),

  login: style({
    ...flex.COLUMN_CENTER,
    gap: "19px",
    marginTop: "46px",
  }),

  loginTitle: style({
    ...font.H6,
    color: theme.gray,
    marginBottom: "8px",
  }),

  goToLogin: style({
    ...flex.CENTER,
    ...font.p2,
    color: theme.primary,
    cursor: "pointer",
    ":hover": {
      color: "#00b377",
      textDecoration: "underline",
    },
  }),
  
  subtitle: style({
    ...font.p3,
    color: theme.gray,
  }),
  
  sectionTitle: style({
    ...font.H6,
    color: theme.text,
    marginBottom: "16px",
  }),
  
  dateText: style({
    ...font.p3,
    color: theme.gray,
    marginTop: "8px",
  }),
  
  buttonGroup: style({
    display: "flex",
    gap: "8px",
    marginTop: "auto",
  }),
  
  primaryButton: style({
    flex: 1,
    backgroundColor: theme.primary,
    color: theme.white,
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    ...font.btn2,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    
    ":hover": {
      backgroundColor: "#00b377",
    },
  }),
  
  secondaryButton: style({
    flex: 1,
    backgroundColor: "#d1d5db",
    color: theme.text,
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    ...font.btn2,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    
    ":hover": {
      backgroundColor: theme.gray,
    },
  }),
  
  timeSlotList: style({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1,
    overflowY: "auto",
    marginBottom: "16px",
    paddingRight: "4px",
    
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
    textAlign: "left",
    padding: "12px 16px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    background: theme.white,
    ...font.p2,
    color: theme.text,
    cursor: "pointer",
    transition: "all 0.2s ease",
  }),
  
  selectedTimeSlot: style({
    borderColor: theme.primary,
    backgroundColor: "#ecfdf5",
    color: theme.text,
  }),
  
  bookingButton: style({
    width: "100%",
    backgroundColor: theme.primary,
    color: theme.white,
    padding: "12px 16px",
    borderRadius: "6px",
    border: "none",
    ...font.btn2,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    
    ":hover": {
      backgroundColor: "#00b377",
    },
  }),
};