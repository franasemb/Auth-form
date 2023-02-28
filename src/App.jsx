import { Route, Routes, Navigate } from "react-router-dom";
import SingIn from "./components/pages/SingIn";
import PageNotFound from "./components/pages/pageNotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "./styles/index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/singin" />}></Route>
        <Route path="/singin" element={<SingIn />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
