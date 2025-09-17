import { theme } from "@/styles";
import { style } from "@vanilla-extract/css";

export const modal = {
  overlay: style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  }),

  container: style({
    width: "863px",
    height: "702px",
    backgroundColor: theme.white,
    borderRadius: "20px",
    boxShadow: "4px 4px 8.4px 5px rgba(0, 0, 0, 0.25)",
    padding: "40px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  }),

  header: style({
    display: "flex",
    alignItems: "center",
    marginBottom: "60px",
  }),

  backButton: style({
    width: "24px",
    height: "24px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#00CC87",
    marginRight: "16px",
  }),

  title: style({
    fontSize: "20px",
    fontWeight: "600",
    color: "#00CC87",
    margin: "0 auto",
  }),

  content: style({
    flex: 1,
    width: "430px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  }),

  field: style({
    display: "flex",
    maxHeight: "200px",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "40px",
    overflowY: "auto",
  }),

  label: style({
    fontSize: "16px",
    fontWeight: "500",
    color: "#878787",
  }),

  displayBox: style({
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #E5E5E5",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#878787",
    backgroundColor: "#FAFAFA",
    minHeight: "20px",
  }),

  textareaDisplay: style({
    width: "100%",
    minHeight: "120px",
    padding: "16px",
    border: "1px solid #E5E5E5",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#878787",
    backgroundColor: "#FAFAFA",
    lineHeight: "1.5",
  }),

  buttonGroup: style({
    display: "flex",
    width: "430px",
    gap: "16px",
    margin: "0 auto",
    marginTop: "auto",
  }),

  cancelButton: style({
    flex: 1,
    height: "48px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#D9D9D9",
    color: "#707070",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s ease",
    
    ":hover": {
      backgroundColor: "#CCCCCC",
    },
  }),

  submitButton: style({
    flex: 1,
    height: "48px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#00CC87",
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s ease",
    
    ":hover": {
      backgroundColor: "#00b377",
    },
  }),
};