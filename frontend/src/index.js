import React from "react";
import "./index.css";
import MoviePop from "./MoviePop";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MoviePop tab="home" />);
