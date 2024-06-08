import SectionHeading from "./SectionHeading";
import TextField from "./TextField";

const PeronalInfoSection = ({ editing }) => {
  return (
    <>
      <SectionHeading title="Personal Information" />
      <div className="two-col">
        <TextField label="First Name" disabled={!editing} />
        <TextField label="Last Name" disabled={!editing} />
        <TextField label="Email" type="email" disabled={!editing} />
        <TextField label="Phone Number" type="phone" disabled={!editing} />
      </div>
    </>
  );
};

export default PeronalInfoSection;
