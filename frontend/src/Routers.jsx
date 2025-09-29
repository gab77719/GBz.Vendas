import {Routes, Route} from "react-router-dom"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>404-Página não encontrada</div>} />
        </Routes>
    )
}