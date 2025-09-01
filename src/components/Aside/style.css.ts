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

export const modal = {
  overlay: style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    ...flex.CENTER,
    zIndex: 1000,
  }),

  container: style({
    background: theme.white,
    borderRadius: "12px",
    padding: "24px",
    width: "90%",
    maxWidth: "500px",
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  }),

  header: style({
    ...flex.BETWEEN,
    alignItems: "center",
    marginBottom: "20px",
    paddingBottom: "16px",
    borderBottom: "1px solid #e5e7eb",
  }),

  title: style({
    ...font.H5,
    color: theme.text,
    margin: 0,
  }),

  closeButton: style({
    background: "none",
    border: "none",
    fontSize: "24px",
    color: theme.gray,
    cursor: "pointer",
    padding: "4px",
    lineHeight: 1,
    borderRadius: "4px",
    transition: "all 0.2s",

    ":hover": {
      color: theme.text,
      backgroundColor: "#f3f4f6",
    },
  }),

  dateTimeInfo: style({
    backgroundColor: "#f8fafc",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "24px",
  }),

  dateTimeText: style({
    ...font.p3,
    color: theme.text,
    margin: "4px 0",
  }),

  form: style({
    ...flex.COLUMN_FLEX,
    gap: "20px",
  }),

  formGroup: style({
    ...flex.COLUMN_FLEX,
  }),

  label: style({
    ...font.p2,
    fontWeight: "500",
    color: theme.text,
    marginBottom: "8px",
  }),

  required: style({
    color: "#ef4444",
  }),

  input: style({
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    ...font.p2,
    transition: "border-color 0.2s, box-shadow 0.2s",

    ":focus": {
      outline: "none",
      borderColor: theme.primary,
      boxShadow: `0 0 0 3px ${theme.primary}20`,
    },

    "::placeholder": {
      color: theme.gray,
    },
  }),

  textarea: style({
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    ...font.p2,
    resize: "vertical",
    minHeight: "100px",
    fontFamily: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s",

    ":focus": {
      outline: "none",
      borderColor: theme.primary,
      boxShadow: `0 0 0 3px ${theme.primary}20`,
    },

    "::placeholder": {
      color: theme.gray,
    },
  }),

  buttonGroup: style({
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    justifyContent: "flex-end",
    marginTop: "24px",
    paddingTop: "20px",
    borderTop: "1px solid #e5e7eb",
  }),

  cancelButton: style({
    padding: "10px 20px",
    borderRadius: "6px",
    ...font.btn2,
    cursor: "pointer",
    transition: "all 0.2s",
    border: "1px solid #d1d5db",
    backgroundColor: theme.white,
    color: theme.gray,

    ":hover": {
      backgroundColor: "#f9fafb",
      borderColor: "#9ca3af",
    },

    ":disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  }),

  confirmButton: style({
    padding: "10px 20px",
    borderRadius: "6px",
    ...font.btn2,
    cursor: "pointer",
    transition: "all 0.2s",
    border: `1px solid ${theme.primary}`,
    backgroundColor: theme.primary,
    color: theme.white,

    ":hover": {
      backgroundColor: "#00b377",
    },

    ":disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  }),
};