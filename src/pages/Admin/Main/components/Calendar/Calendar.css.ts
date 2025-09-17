import { theme } from "@/styles";
import { style } from "@vanilla-extract/css";

export const calendar = {
  mainContainer: style({
    width: "70%",
    height: "90%",
    position: "absolute",
    background: theme.white,
    marginLeft: "309px",
    paddingLeft: "69px",
    paddingTop: "80px",
  }),
  
  pageTitle: style({
    fontSize: "28px",
    fontWeight: "600",
    color: "black",
    margin: "0",
    marginBottom: "60px",
  }),
  
  calendarWrapper: style({
    width: "695px",
  }),
  
  header: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "30px",
    width: "695px",
  }),
  
  navButton: style({
    width: "20px",
    height: "30px",
    padding: "0",
    borderRadius: "4px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "#878787",
    transition: "background-color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    ":hover": {
      backgroundColor: "#f3f4f6",
    },
  }),
  
  month: style({
    fontSize: "16px",
    fontWeight: "500",
    color: theme.text,
  }),
  
  daysGrid: style({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "0",
    marginBottom: "19px",
    width: "695px",
    height: "26px",
  }),
  
  dayHeader: style({
    width: "77px",
    height: "26px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "600",
    color: "#222222",
    margin: "0 13px",
  }),
  
  grid: style({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "0",
    width: "695px",
    height: "361px",
  }),
  
  dateButton: style({
    width: "77px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "400",
    color: "#222222",
    transition: "all 0.2s ease",
    margin: "0 13px",
    
    ":hover": {
      backgroundColor: "#f3f4f6",
    },
    
    ":active": {
      backgroundColor: "#e5e7eb",
    },
    
    ":disabled": {
      cursor: "not-allowed",
    },
  }),
  
  dateContent: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    height: "100%",
  }),
  
  todayLabel: style({
    fontSize: "10px",
    fontWeight: "400",
    color: "#00CC87",
    lineHeight: "1",
  }),
  
  todayDate: style({
    color: "#00CC87",
    border: "1px solid #00CC87",
    borderRadius: "4px",
    backgroundColor: "transparent",
  }),

  pastDate: style({
    color: "#BABABA",
    
    ":hover": {
      backgroundColor: "transparent",
    },
  }),

  invisibleDate: style({
    visibility: "hidden",
  }),
  
  selectedDate: style({
    backgroundColor: "#f3f4f6",
  }),
};
