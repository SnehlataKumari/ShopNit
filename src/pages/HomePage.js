import Banner from "../components/Banner/Banner";
import MiniBanner from "../components/MiniBanner/MiniBanner";
import DividerBar from "../components/DividerBar/DividerBar";
import Header from "../components/Header/Header";
import HotDealCards from "../components/HotDealCards/HotDealsCard";
import QuickView from "../components/QuickView/QuickView";
import t1 from "../assets/img/quickView/t1.jpg";
import t2 from "../assets/img/quickView/t2.jpg";
import t3 from "../assets/img/quickView/t3.jpg";
import t4 from "../assets/img/quickView/t4.jpg";
import t5 from "../assets/img/quickView/t5.jpg";
import t6 from "../assets/img/quickView/t6.jpg";
import t7 from "../assets/img/quickView/t7.jpg";
import t8 from "../assets/img/quickView/t8.jpg";
import t9 from "../assets/img/quickView/t9.jpg";
import t10 from "../assets/img/quickView/t10.jpg";
import t11 from "../assets/img/quickView/t11.jpg";
import t12 from "../assets/img/quickView/t12.jpg";
import t13 from "../assets/img/quickView/t13.jpg";
import t14 from "../assets/img/quickView/t14.jpg";
import t15 from "../assets/img/quickView/t15.jpg";
import t16 from "../assets/img/quickView/t16.jpg";
import t17 from "../assets/img/quickView/t17.jpg";
import t18 from "../assets/img/quickView/t18.jpg";
import t19 from "../assets/img/quickView/t19.jpg";
import t20 from "../assets/img/quickView/t20.jpg";
import t21 from "../assets/img/quickView/t21.jpg";
import t22 from "../assets/img/quickView/t22.jpg";
import t23 from "../assets/img/quickView/t23.jpg";
import t24 from "../assets/img/quickView/t24.jpg";
import OurSerivces from "../components/OurServices/OurServices";
import "./HomePage.css";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <MiniBanner />
      <HotDealCards />
      <DividerBar heading="HALF SLEEVE T-SHIRTS" />
      <QuickView
        itemsList={[
          [t1, t2, t3, t4],
          [t5, t6, t7, t8],
        ]}
      />
      <DividerBar heading="FULL SLEEVE T-SHIRTS" />
      <QuickView
        itemsList={[
          [t9, t10, t11, t12],
          [t13, t14, t15, t16],
        ]}
      />
      <DividerBar heading="HOODIES" />
      <QuickView
        itemsList={[
          [t17, t18, t19, t20],
          [t21, t22, t23, t24],
        ]}
      />
      <DividerBar heading="OUR SERVICES" />
      <OurSerivces />
      <Footer />
    </>
  );
}

export default HomePage;
