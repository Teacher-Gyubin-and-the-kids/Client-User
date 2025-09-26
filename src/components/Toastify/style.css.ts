import { flex, font, screen, theme } from "@/styles";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "auto",
  height: "auto",
  backgroundColor: theme.white,
  position: "absolute",
  borderRight: `8px solid ${theme.primary}`,
  top: 0,
  right: 0,
  gap: "5%",
  padding: "5%",
  maxWidth: "320px",
  maxHeight: "100px",
  ...flex.VERTICAL,
});

export const content = style({
  ...font.H5,
  ...flex.BETWEEN,
});

export const icon = style({
  width: "20px",
  height: "20px",
  "@media": {
    [`screen and (max-width: ${screen.phone})`]: {
      width: "18px",
      height: "18px",
    },
  },
});