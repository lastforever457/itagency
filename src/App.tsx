import { observer } from "mobx-react-lite";
import Home from "./pages/home.tsx";
import Header from "./components/header.tsx";
import AcademyInterested from "./pages/academy-interested.tsx";
import BizHaqimizda from "./pages/biz-haqimizda.tsx";
import WhoWe from "./pages/who-we.tsx";
import Products from "./pages/products.tsx";
import Trust from "./pages/trust.tsx";
import SwiperComponent from "./components/swiper-component.tsx";
import ServiceComponent from "./components/services.tsx";
import Portfolio from "./pages/portfolio.tsx";

const App = observer(() => {
  return (
    <>
      <Header />
      <Home />
      <SwiperComponent />
      <ServiceComponent />
      <Portfolio />
      <WhoWe />
      <AcademyInterested />
      <Trust />
      <Products />
      <BizHaqimizda />
    </>
  );
});

export default App;
