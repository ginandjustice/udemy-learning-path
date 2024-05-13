import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#764abc",
    secondary: "white",
  },
  font: {
    menu: "1.5em",
  },
});

export const menuStyle = style({
  backgroundColor: vars.color.primary,
  fontSize: vars.font.menu,
  display: "block",
  width: "100%",
  color: "white",
  padding: 20,
});

export const menuItemsStyle = style({
  float: "right",
});

export const menuItemStyle = style({
  backgroundColor: vars.color.primary,
  color: vars.color.secondary,
  margin: 10,
  ":hover": {
    cursor: "pointer",
    color: "orange",
  },
});

export const sectionStyle = style({
  display: "inline-block",
  width: "100%",
  textAlign: "center",
  marginTop: "20%",
});