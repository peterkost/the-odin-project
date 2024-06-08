import "./App.css";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ModeButton from "./components/ModeButton";
import PeronalInfoSection from "./components/PersonalInfoSection";

function App() {
  return (
    <>
      <h1 id="title">KosCV</h1>
      <PeronalInfoSection />
      <EducationSection />
      <ExperienceSection />
      <ModeButton />
    </>
  );
}

export default App;
