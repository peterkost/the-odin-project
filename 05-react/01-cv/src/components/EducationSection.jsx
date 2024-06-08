import EducationInputs from "./EducationInputs";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

const EducationSection = ({ editing }) => {
  const [educationSections, setEducationSections] = useState([
    crypto.randomUUID(),
  ]);

  const handleAdd = () =>
    setEducationSections([...educationSections, crypto.randomUUID()]);

  const handleDelete = (target) =>
    setEducationSections(educationSections.filter((id) => id !== target));

  return (
    <>
      <SectionHeading title="Education" />
      {educationSections.map((id, index) => (
        <EducationInputs
          key={id}
          editing={editing}
          onAdd={handleAdd}
          onDelete={handleDelete}
          isLast={index === educationSections.length - 1}
          isOnly={educationSections.length === 1}
          inputId={id}
        />
      ))}
    </>
  );
};

export default EducationSection;
