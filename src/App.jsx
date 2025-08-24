// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import LayoutWrapper from "./View/Layout/LayoutWrapper";
import Views from "./View/View";


function App() {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Views />
            </LayoutWrapper>
        </BrowserRouter>
    );
}

export default App;
