import ExperienceInputs from "./ExperienceInputs";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

const ExperienceSection = ({ editing }) => {
  const [experienceSections, setExperienceSections] = useState([
    crypto.randomUUID(),
  ]);

  const handleAdd = () =>
    setExperienceSections([...experienceSections, crypto.randomUUID()]);

  const handleDelete = (target) =>
    setExperienceSections(experienceSections.filter((id) => id !== target));

  return (
    <>
      <SectionHeading title="Experience" />
      {experienceSections.map((id, index) => (
        <ExperienceInputs
          key={id}
          editing={editing}
          onAdd={handleAdd}
          onDelete={handleDelete}
          isLast={index === experienceSections.length - 1}
          isOnly={experienceSections.length === 1}
          inputId={id}
        />
      ))}
    </>
  );
};

export default ExperienceSection;
