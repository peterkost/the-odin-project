import { useState } from "react";
import "./App.css";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ModeButton from "./components/ModeButton";
import PeronalInfoSection from "./components/PersonalInfoSection";

function App() {
  const [editing, setEditing] = useState(true);
  const toggleEditing = () => setEditing(!editing);

  return (
    <>
      <h1 id="title">KosCV</h1>
      <PeronalInfoSection editing={editing} />
      <EducationSection editing={editing} />
      <ExperienceSection editing={editing} />
      <ModeButton onClick={toggleEditing} editing={editing} />
    </>
  );
}

export default App;
