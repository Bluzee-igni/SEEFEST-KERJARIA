import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AgeQuestionPage from "./components/onboarding/AgeQuestionPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import EducationQuestionPage from "./components/onboarding/EducationQuestionPage";
import LandingPage from "./components/landing/LandingPage";
import LearningInterestPage from "./components/onboarding/LearningInterestPage";
import RoleSelectionPage from "./components/onboarding/RoleSelectionPage";
import RegistrationPage from "./components/onboarding/RegistrationPage";
import LoginPage from "./components/onboarding/LoginPage";
import UMKMDashboard from "./components/dashboard/UMKMDashboard";
import NewUserDashboard from "./components/dashboard/NewUserDashboard";
import SplashScreen from "./components/landing/SplashScreen";

function App() {
  const [page, setPage] = useState("landing");
  const [showSplash, setShowSplash] = useState(true);
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
        onLogin={() => setPage("login")}
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
        onLogin={() => setPage("login")}
      />
    );
  }

  if (page === "interest") {
    return (
      <LearningInterestPage
        role={role}
        age={age}
        education={education}
        onNext={() => setPage("register")}
        onClose={() => setPage("landing")}
        onLogin={() => setPage("login")}
      />
    );
  }

  if (page === "register") {
    return (
      <RegistrationPage
        onClose={() => setPage("landing")}
        onLogin={() => setPage("login")}
        onRegister={() => setPage("new_dashboard")}
      />
    );
  }

  if (page === "login") {
    return (
      <LoginPage
        onClose={() => setPage("landing")}
        onRegister={() => setPage("role")}
        onLoginUser={() => setPage("dashboard")}
        onLoginUMKM={() => setPage("umkm_dashboard")}
      />
    );
  }

  if (page === "dashboard") {
    return <DashboardPage />;
  }

  if (page === "umkm_dashboard") {
    return (
      <UMKMDashboard onLogout={() => setPage("landing")} />
    );
  }

  if (page === "new_dashboard") {
    return (
      <NewUserDashboard
        onBuat={() => setPage("register")}
        onMasuk={() => setPage("dashboard")}
      />
    );
  }

  if (page === "role") {
    return (
      <RoleSelectionPage
        onClose={() => setPage("landing")}
        onLogin={() => setPage("login")}
        onSelectRole={handleSelectRole}
      />
    );
  }

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash-wrapper"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SplashScreen onFinish={() => setShowSplash(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <LandingPage onStartQuest={() => setPage("role")} onDaftar={() => setPage("role")} onLogin={() => setPage("login")} />
        </motion.div>
      )}
    </>
  );
}

export default App;





