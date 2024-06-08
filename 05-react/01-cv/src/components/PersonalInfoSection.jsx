import { useState } from "react";
import SectionHeading from "./SectionHeading";
import TextField from "./TextField";

const PeronalInfoSection = ({ editing }) => {
  const [first, setFirst] = useState("");
  const handleFirstChange = (value) => setFirst(value);
  const [last, setLast] = useState("");
  const handleLastChange = (value) => setLast(value);
  const [email, setEmail] = useState("");
  const handleEmailChange = (value) => setEmail(value);
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (value) => setPhone(value);

  return (
    <>
      <SectionHeading title="Personal Information" />
      <div className="two-col">
        <TextField
          label="First Name"
          value={first}
          onChange={handleFirstChange}
          disabled={!editing}
        />
        <TextField
          label="Last Name"
          value={last}
          onChange={handleLastChange}
          disabled={!editing}
        />
        <TextField
          label="Email"
          value={email}
          type="email"
          onChange={handleEmailChange}
          disabled={!editing}
        />
        <TextField
          label="Phone Number"
          value={phone}
          type="phone"
          onChange={handlePhoneChange}
          disabled={!editing}
        />
      </div>
    </>
  );
};

export default PeronalInfoSection;
