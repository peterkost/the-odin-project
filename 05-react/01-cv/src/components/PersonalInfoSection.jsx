import SectionHeading from "./SectionHeading";
import TextField from "./TextField";

const PeronalInfoSection = () => (
  <>
    <SectionHeading title="Personal Information" />
    <div className="two-col">
      <TextField label="First Name" />
      <TextField label="Last Name" />
      <TextField label="Email" type="email" />
      <TextField label="Phone Number" type="phone" />
    </div>
  </>
);

export default PeronalInfoSection;
