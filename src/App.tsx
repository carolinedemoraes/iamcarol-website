import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./components/MainPage/MainPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./components/Projects/Projects";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
