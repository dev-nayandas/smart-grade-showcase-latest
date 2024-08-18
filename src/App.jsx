import Footer from "./Footer";
import Hero from "./Hero";
import NabVar from "./NabVar";
import Results from "./Results";

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <NabVar/>
        <Hero/>
        <Results/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
