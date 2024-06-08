import SectionHeading from "./SectionHeading";
import TextField from "./TextField";

const ExperienceSection = ({ editing }) => (
  <>
    <SectionHeading title="Experience" />
    <div className="two-col">
      <TextField label="Company" disabled={!editing} />
      <TextField label="Title" disabled={!editing} />
      <TextField label="Start" type="date" disabled={!editing} />
      <TextField label="End" type="date" disabled={!editing} />
    </div>
    <TextField label="Responsibilities" type="textarea" disabled={!editing} />
    <div className="justify-right">
      <button type="button" disabled={!editing}>
        Add
      </button>
    </div>
  </>
);

export default ExperienceSection;
