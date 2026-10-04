import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// Глобални стилове — редът е важен: шрифтове → токени → базов слой
import './styles/fonts.css'
import './styles/tokens.css'
import './styles/base.css'

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);