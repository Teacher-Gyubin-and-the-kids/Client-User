import { theme, font, flex } from "@/styles";
import { style } from "@vanilla-extract/css";

export const calendar = {
  container: style({
    width: "50%",
    background: theme.white,
    padding: "24px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    borderLeft: "1px solid #e5e7eb",
    borderRight: "1px solid #e5e7eb",
  }),
  
  sectionTitle: style({
    ...font.H6,
    color: theme.text,
    marginBottom: "16px",
  }),
  
  header: style({
    ...flex.BETWEEN,
    marginBottom: "16px",
  }),
  
  navButton: style({
    padding: "4px",
    borderRadius: "4px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: theme.gray,
    transition: "background-color 0.2s ease",
    
    ":hover": {
      backgroundColor: "#f3f4f6",
    },
  }),
  
  month: style({
    ...font.p2,
    fontWeight: "500",
    color: theme.text,
  }),
  
  daysGrid: style({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "4px",
    marginBottom: "8px",
  }),
  
  dayHeader: style({
    ...font.p4,
    fontWeight: "500",
    color: theme.gray,
    padding: "8px 0",
    textAlign: "center",
  }),
  
  grid: style({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "4px",
  }),
  
  dateButton: style({
    height: "32px",
    ...font.p3,
    ...flex.CENTER,
    borderRadius: "4px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: theme.text,
    
    ":hover": {
      backgroundColor: "#f3f4f6",
    },
  }),
  
  todayDate: style({
    backgroundColor: "#e8f5e8",
    color: theme.primary,
    fontWeight: "500",
    border: `1px solid ${theme.primary}`,
  }),

  pastDate: style({
    color: "#adb5bd",
    cursor: "not-allowed",

    ":hover": {
      backgroundColor: "transparent",
    }
  }),

  invisibleDate: style({
    visibility: "hidden",
  }),
  
  selectedDate: style({
    backgroundColor: `${theme.primary} !important`,
    color: `${theme.white} !important`,
    fontWeight: "500",
    border: `1px solid ${theme.primary}`,
    
    ":hover": {
      backgroundColor: "#00b377 !important",
    },
  }),
};