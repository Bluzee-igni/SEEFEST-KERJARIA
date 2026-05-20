import { useState } from "react";
import AgeQuestionPage from "./components/AgeQuestionPage";
import DashboardPage from "./components/DashboardPage";
import EducationQuestionPage from "./components/EducationQuestionPage";
import LandingPage from "./components/LandingPage";
import LearningInterestPage from "./components/LearningInterestPage";
import RoleSelectionPage from "./components/RoleSelectionPage";

function App() {
  const [page, setPage] = useState("landing");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");

  function handleSelectRole(selectedRole) {
    setRole(selectedRole);
    setPage("age");
  }

  if (page === "age") {
    return (
      <AgeQuestionPage
        role={role}
        onNext={(selectedAge) => {
          setAge(selectedAge);
          setPage("education");
        }}
        onClose={() => setPage("landing")}
        onLogin={() => setPage("landing")}
      />
    );
  }

  if (page === "education") {
    return (
      <EducationQuestionPage
        role={role}
        age={age}
        onNext={(selectedEducation) => {
          setEducation(selectedEducation);
          setPage("interest");
        }}
        onClose={() => setPage("landing")}
        onLogin={() => setPage("landing")}
      />
    );
  }

  if (page === "interest") {
    return (
      <LearningInterestPage
        role={role}
        age={age}
        education={education}
        onNext={() => setPage("dashboard")}
        onClose={() => setPage("landing")}
        onLogin={() => setPage("landing")}
      />
    );
  }

  if (page === "dashboard") {
    return <DashboardPage />;
  }

  if (page === "role") {
    return (
      <RoleSelectionPage
        onClose={() => setPage("landing")}
        onLogin={() => setPage("landing")}
        onSelectRole={handleSelectRole}
      />
    );
  }

  return <LandingPage onStartQuest={() => setPage("role")} />;
}

export default App;
