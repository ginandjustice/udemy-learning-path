import { render } from "react-dom";
import { App } from "./App";
import "./global.css";

const root = document.createElement("div");
document.body.appendChild(root);

render(<App />, root);