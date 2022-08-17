import { Route, Routes } from "react-router"
import { IndexView } from "./views/IndexView"

export const URLS = () => {
    <Routes>
        <Route path="/" element={<IndexView/>} />
    </Routes>
}