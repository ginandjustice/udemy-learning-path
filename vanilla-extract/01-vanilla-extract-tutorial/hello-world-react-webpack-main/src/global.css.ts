import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

globalStyle("body, body *", {
  all: "unset",
  boxSizing: "border-box",
  fontFamily: vars.fontFamily.body,
  color: vars.color.black,
  padding: 0,
  margin: 0,
});