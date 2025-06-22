import Header from "./components/Header";
import Footer from "./components/Footer";
import StoryGrid from "./components/StoryGrid";
import SubmitForm from "./components/SubmitForm";
import CareDuelAndAwards from "./components/CareDuelAndAwards";
import RaffleWidget from "./components/RaffleWidget";
import RaffleSidebar from "./components/RaffleSidebar";
import Home from "./pages/Home";
const App = () => (
  <div className="font-lora main-page text-[#424242]" id="main">
    <Header />
    <main>
      
      <CareDuelAndAwards/>
      <StoryGrid />
      <Home/>
      <SubmitForm />
      <RaffleWidget/>
      <RaffleSidebar/>
    </main>
    <Footer />
  </div>
);

export default App;
