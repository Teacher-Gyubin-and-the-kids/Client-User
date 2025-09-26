import { theme, font, flex } from "@/styles";
import { style } from "@vanilla-extract/css";

export const auth = {
  container: style({
    ...flex.CENTER,
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    padding: "20px",
  }),

  formWrapper: style({
    width: "100%",
    maxWidth: "500px",
    backgroundColor: theme.white,
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: "1px solid #e2e8f0",
  }),

  header: style({
    ...flex.COLUMN_CENTER,
    marginBottom: "32px",
    textAlign: "center",
    gap: "20px"
  }),

  title: style({
    ...font.H4,
    color: theme.text,
    marginBottom: "8px",
    fontWeight: "700",
  }),

  form: style({
    ...flex.COLUMN_FLEX,
    gap: "20px",
  }),

  inputGroup: style({
    ...flex.COLUMN_FLEX,
    gap: "6px",
  }),

  label: style({
    ...font.p3,
    color: theme.text,
    fontWeight: "500",
    marginBottom: "4px",
  }),

  input: style({
    ...font.p3,
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: theme.white,
    color: theme.text,
    transition: "all 0.2s ease",
    
    "::placeholder": {
      color: "#9ca3af",
    },

    ":focus": {
      outline: "none",
      borderColor: theme.primary,
      boxShadow: `0 0 0 3px ${theme.primary}20`,
    },

    ":hover": {
      borderColor: "#9ca3af",
    },
  }),

  inputError: style({
    borderColor: `${theme.red} !important`,
    boxShadow: `0 0 0 3px ${theme.red}20 !important`,
  }),

  passwordWrapper: style({
    position: "relative",
    ...flex.FLEX,
  }),

  passwordToggle: style({
    position: "absolute",
    top: "10px",
    right: "12px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    color: "#6b7280",
    fontSize: "18px",

    ":focus": {
      outline: "none",
    },
  }),

  errorText: style({
    ...font.p4,
    color: theme.red,
    marginTop: "4px",
  }),

  submitButton: style({
    ...font.p2,
    width: "100%",
    padding: "14px",
    backgroundColor: theme.primary,
    color: theme.white,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
    marginTop: "8px",

    ":hover": {
      backgroundColor: "#00b377",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },

    ":active": {
      transform: "translateY(0)",
    },

    ":disabled": {
      backgroundColor: "#9ca3af",
      cursor: "not-allowed",
      transform: "none",
      boxShadow: "none",
    },

    ":focus": {
      outline: "none",
      boxShadow: `0 0 0 3px ${theme.primary}40`,
    },
  }),

  footer: style({
    ...flex.CENTER,
    marginTop: "24px",
    textAlign: "center",
  }),

  footerText: style({
    ...font.p3,
    color: theme.gray,
    margin: "0",
  }),

  linkButton: style({
    ...font.p3,
    background: "transparent",
    border: "none",
    color: theme.primary,
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline",
    padding: "0 2px",

    ":hover": {
      color: "#00b377",
    },

    ":focus": {
      outline: "none",
      textDecoration: "none",
    },
  }),
};