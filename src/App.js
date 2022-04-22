import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Hello from "./routes/Hello";
import Detail from "./routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/hello" element={<Hello />} />
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
