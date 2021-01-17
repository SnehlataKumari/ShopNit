import Banner from "../components/Banner/Banner";
import MiniBanner from "../components/Banner/MiniBanner";
import DividerBar from "../components/DividerBar/DividerBar";
import Header from "../components/Header/Header";
import HotDealCards from "../components/HotDealCards/HotDealsCard";
import QuickView from "../components/QuickView/QuickView";
function HomePage() {
  return (
    <>
    <Header />
    <Banner />
    <MiniBanner/>
    <HotDealCards/>
    <DividerBar/>
    <QuickView/>
    </>
  )
}

export default HomePage;
