import { Footer, TopNavbar } from "../components";
import {
  About,
  Explore,
  ExploreAll,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  Tour,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <TopNavbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <ExploreAll />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <GetStarted />
    </div>

    <div className="relative">
      <Tour />/
      <div className="gradient-04 z-0" />
      <WhatsNew />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
