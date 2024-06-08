import SectionHeading from "./SectionHeading";
import TextField from "./TextField";

const EducationSection = () => (
  <>
    <SectionHeading title="Education" />
    <div className="two-col">
      <TextField label="School" />
      <TextField label="Degree" />
      <TextField label="Start" type="date" />
      <TextField label="End" type="date" />
    </div>
    <div className="justify-right">
      <button type="button">Add</button>
    </div>
  </>
);

export default EducationSection;
