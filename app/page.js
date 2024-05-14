import { Footer, TopNavbar } from "../components";
import {
  About,
  ExploreAll,
  GetStarted,
  Hero,
  Insights,
  Request3d,
  WhatsNew,
} from "../sections";
import CloudPoint from "../sections/CloudPoint";

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
      <Request3d />
    </div>

    <div className="relative">
      <div className="gradient-04 z-0" />
      <WhatsNew />
      <CloudPoint />
    </div>
    <Footer />
  </div>
);

export default Page;
