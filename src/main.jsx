import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./context";

const cart = {
  count: 0,
  setCount(newCount) {
    cart.count = newCount;
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContext.Provider value={cart}>
        <App />
      </GlobalContext.Provider>
    </BrowserRouter>
  </StrictMode>
);
