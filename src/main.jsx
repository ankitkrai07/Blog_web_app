import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";

const root = document.getElementById("root");
const rootElement = createRoot(root); // Use createRoot from "react-dom/client"
rootElement.render(<App />);
