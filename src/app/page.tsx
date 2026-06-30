import HeroBanner from "@/components/iaspe/sections/HeroBanner";
import SearchBar from "@/components/iaspe/sections/SearchBar";
import EditaisStatusGrid from "@/components/iaspe/sections/EditaisStatusGrid";
import CandidateArea from "@/components/iaspe/sections/CandidateArea";

export default function Home() {
  return (
    <>
      <div id="welcome" className="welcome-area"></div>

      <HeroBanner />

      <div className="py-2 py-sm-5 bg-white">
        <SearchBar />
        <EditaisStatusGrid />
      </div>

      <CandidateArea />
    </>
  );
}
