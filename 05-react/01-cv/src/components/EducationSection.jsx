import SectionHeading from "./SectionHeading";
import TextField from "./TextField";

const EducationSection = ({ editing }) => (
  <>
    <SectionHeading title="Education" />
    <div className="two-col">
      <TextField label="School" disabled={!editing} />
      <TextField label="Degree" disabled={!editing} />
      <TextField label="Start" type="date" disabled={!editing} />
      <TextField label="End" type="date" disabled={!editing} />
    </div>
    <div className="justify-right">
      <button type="button" disabled={!editing}>
        Add
      </button>
    </div>
  </>
);

export default EducationSection;
