// the composeStyles function can be used whenever you need to join multiple styles into a single one

import { composeStyles, style } from "@vanilla-extract/css";
import { atoms } from "./sprinkles.css";

export const menu = composeStyles(
  atoms({
    display: "flex",
    justifyContent: "space-between",
    padding: "large",

    // Conditional atoms:
    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
    fontSize: {
      desktop: "large",
      mobile: "medium"
    },
    background: {
      lightMode: "primary",
    },
  })
);

export const menuItems = composeStyles(
  atoms({
    display: {
      desktop: "flex",
      mobile: "grid",
    },
    gridTemplateColumns: {
      mobile: "4x",
    },
    paddingX: {
      desktop: "small",
      mobile: "none",
    },
    paddingY: {
      mobile: "medium",
    },

    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
  })
);

export const menuItem = composeStyles(
  atoms({
    display: "flex",
    alignItems: "center",
    paddingX: "medium",
    color: "white",

    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
  }),
  style({
    ":hover": {
      cursor: "pointer",
      color: "orange",
    },
  })
);

// styles are always referred to by the style function, which receives the object with all the CSS properties needed for that particular style object
// they must always be exported since they’ll be preprocessed by vanilla-extract before being injected into the final output.

// createTheme function is a very useful resource you may use from the lib whenever you need more generic, centralized style management - ex dark vs light mode

/* import { createTheme, style } from "@vanilla-extract/css";

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
}); */

