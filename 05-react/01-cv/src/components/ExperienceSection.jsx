import SectionHeading from "./SectionHeading";
import TextField from "./TextField";

const ExperienceSection = () => (
  <>
    <SectionHeading title="Experience" />
    <div className="two-col">
      <TextField label="Company" />
      <TextField label="Title" />
      <TextField label="Start" type="date" />
      <TextField label="End" type="date" />
    </div>
    <TextField label="Responsibilities" type="textarea" />
    <div className="justify-right">
      <button type="button">Add</button>
    </div>
  </>
);

export default ExperienceSection;
