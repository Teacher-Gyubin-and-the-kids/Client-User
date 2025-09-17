import { theme, flex } from "@/styles";
import { style } from "@vanilla-extract/css";

export const aside = {
  container: style({
    width: "229px",
    position: "absolute",
    background: theme.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    top: "0",
  }),
  
  leftPosition: style({
    ...flex.COLUMN_FLEX,
    left: "80px",
  }),
  
  rightPosition: style({
    right: "0",
    boxShadow: "-1px 0 3px 0 rgba(0, 0, 0, 0.1), -1px 0 2px 0 rgba(0, 0, 0, 0.06)",
  }),
  
  header: style({
    marginBottom: "24px",
  }),
  
  adminTitle: style({
    fontSize: '28px',
    fontWeight: '700',
    color: 'black',
    margin: '0',
    marginTop: '80px',
  }),
  
  statusSection: style({
    marginTop: '81px',
  }),
  
  statusSectionTitle: style({
    fontSize: '16px',
    fontWeight: '500',
    color: '#878787',
    margin: '0',
    marginBottom: '20px',
  }),
  
  statusList: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }),
  
  statusItem: style({
    display: 'flex',
    alignItems: 'center',
  }),
  
  statusIndicator: style({
    width: '22px',
    height: '23px',
    borderRadius: '50%',
    marginRight: '20px',
  }),
  
  statusLabel: style({
    fontSize: '14px',
    fontWeight: '500',
    color: 'black',
  }),
};