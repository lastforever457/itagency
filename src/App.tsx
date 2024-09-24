import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Header from "./components/header.tsx";
import AcademyInterested from "./pages/academy-interested.tsx";
import BizHaqimizda from "./pages/biz-haqimizda.tsx";

const App = observer(() => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy-interested" element={<AcademyInterested />} />
        <Route path="/biz-haqimizda" element={<BizHaqimizda />} />
      </Routes>
    </>
  );
});

export default App;
