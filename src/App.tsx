import { observer } from "mobx-react-lite";
import Home from "./pages/home.tsx";
import Header from "./components/header.tsx";
import WhoWe from "./pages/who-we.tsx";
import Trust from "./pages/trust.tsx";
import SwiperComponent from "./components/swiper-component.tsx";
import ServiceComponent from "./components/services.tsx";
import Portfolio from "./pages/portfolio.tsx";
import Contacts from "./pages/contacts.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomFooter from "./components/footer.tsx";
import Investment from "./pages/investment.tsx";
import Partnership from "./pages/partnership.tsx";

const App = observer(() => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
      once: true,
      mirror: true,
    });
  });
  return (
    <>
      <Header />
      <Home />
      <WhoWe />
      <SwiperComponent />
      <div className={"py-14 bg-[#000806]"}></div>
      {/*<AcademyInterested />*/}
      <Trust />
      <Portfolio />
      <ServiceComponent />
      {/*<Products />*/}
      <Partnership />
      <Investment />
      <Contacts />
      <CustomFooter />
    </>
  );
});

export default App;
