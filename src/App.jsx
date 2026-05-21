import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
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

const DASHBOARD_TAB_BY_SLUG = {
  beranda: "Beranda",
  misi: "Misi",
  event: "Event",
  level: "Level",
  pekerjaan: "Pekerjaan",
  sosial: "Sosial",
  pesan: "Pesan",
  pengaturan: "Pengaturan",
};

const DASHBOARD_SLUG_BY_TAB = {
  Beranda: "beranda",
  Misi: "misi",
  Event: "event",
  Level: "level",
  Pekerjaan: "pekerjaan",
  Sosial: "sosial",
  Pesan: "pesan",
  Pengaturan: "pengaturan",
};

const PENGATURAN_MENU_BY_SLUG = {
  profil: "profil",
  tampilan: "tampilan",
  privasi: "privasi",
  wallet: "wallet",
};

const DEFAULT_PENGATURAN_MENU = "profil";

function DashboardRoute() {
  const { tab, section } = useParams();
  const navigate = useNavigate();
  const tabKey = tab ? tab.toLowerCase() : "";
  const tabLabel = DASHBOARD_TAB_BY_SLUG[tabKey];
  const storedPengaturan =
    typeof window !== "undefined" ? localStorage.getItem("activePengaturanMenu") : null;
  const fallbackPengaturan = PENGATURAN_MENU_BY_SLUG[storedPengaturan]
    ? storedPengaturan
    : DEFAULT_PENGATURAN_MENU;
  const resolvePengaturanMenu = (menu) =>
    PENGATURAN_MENU_BY_SLUG[menu] ? menu : fallbackPengaturan;

  if (!tabLabel) {
    return <Navigate to="/dashboard/beranda" replace />;
  }

  if (tabLabel === "Pengaturan") {
    const sectionKey = section ? section.toLowerCase() : "";
    const menu = resolvePengaturanMenu(sectionKey);

    if (!section || !PENGATURAN_MENU_BY_SLUG[sectionKey]) {
      return <Navigate to={`/dashboard/pengaturan/${menu}`} replace />;
    }

    return (
      <DashboardPage
        routeTab="Pengaturan"
        routePengaturan={menu}
        onTabChange={(nextTab, nextMenu) => {
          const slug = DASHBOARD_SLUG_BY_TAB[nextTab] || "beranda";
          if (slug === "pengaturan") {
            const nextPengaturan = resolvePengaturanMenu(nextMenu);
            if (nextPengaturan !== sectionKey) {
              navigate(`/dashboard/pengaturan/${nextPengaturan}`);
            }
            return;
          }

          if (slug !== tabKey) {
            navigate(`/dashboard/${slug}`);
          }
        }}
        onPengaturanChange={(nextMenu) => {
          const nextPengaturan = resolvePengaturanMenu(nextMenu);
          if (nextPengaturan !== sectionKey) {
            navigate(`/dashboard/pengaturan/${nextPengaturan}`);
          }
        }}
      />
    );
  }

  if (section) {
    return <Navigate to={`/dashboard/${tabKey}`} replace />;
  }

  return (
    <DashboardPage
      routeTab={tabLabel}
      onTabChange={(nextTab, nextMenu) => {
        const slug = DASHBOARD_SLUG_BY_TAB[nextTab] || "beranda";
        if (slug === "pengaturan") {
          const nextPengaturan = resolvePengaturanMenu(nextMenu);
          navigate(`/dashboard/pengaturan/${nextPengaturan}`);
          return;
        }
        if (slug !== tabKey) {
          navigate(`/dashboard/${slug}`);
        }
      }}
    />
  );
}

function App() {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");

  const landingContent = (
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
          <LandingPage
            onStartQuest={() => navigate("/role")}
            onDaftar={() => navigate("/role")}
            onLogin={() => navigate("/login")}
          />
        </motion.div>
      )}
    </>
  );

  return (
    <Routes>
      <Route path="/" element={landingContent} />
      <Route
        path="/role"
        element={
          <RoleSelectionPage
            onClose={() => navigate("/")}
            onLogin={() => navigate("/login")}
            onSelectRole={(selectedRole) => {
              setRole(selectedRole);
              if (selectedRole === "umkm") {
                navigate("/register");
                return;
              }

              navigate("/age");
            }}
          />
        }
      />
      <Route
        path="/age"
        element={
          <AgeQuestionPage
            role={role}
            onNext={(selectedAge) => {
              setAge(selectedAge);
              navigate("/education");
            }}
            onClose={() => navigate("/")}
            onLogin={() => navigate("/login")}
          />
        }
      />
      <Route
        path="/education"
        element={
          <EducationQuestionPage
            role={role}
            age={age}
            onNext={(selectedEducation) => {
              setEducation(selectedEducation);
              navigate("/interest");
            }}
            onClose={() => navigate("/")}
            onLogin={() => navigate("/login")}
          />
        }
      />
      <Route
        path="/interest"
        element={
          <LearningInterestPage
            role={role}
            age={age}
            education={education}
            onNext={() => navigate("/register")}
            onClose={() => navigate("/")}
            onLogin={() => navigate("/login")}
          />
        }
      />
      <Route
        path="/register"
        element={
          <RegistrationPage
            role={role}
            onClose={() => navigate("/")}
            onLogin={() => navigate("/login")}
            onRegister={() => {
              if (role === "umkm") {
                navigate("/umkm");
                return;
              }

              navigate("/new-dashboard");
            }}
          />
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage
            onClose={() => navigate("/")}
            onRegister={() => navigate("/role")}
            onLoginUser={() => navigate("/dashboard/beranda")}
            onLoginUMKM={() => navigate("/umkm")}
          />
        }
      />
      <Route
        path="/new-dashboard"
        element={
          <NewUserDashboard
            onBuat={() => navigate("/register")}
            onMasuk={() => navigate("/dashboard/beranda")}
          />
        }
      />
      <Route path="/umkm" element={<UMKMDashboard onLogout={() => navigate("/")} routeMenu="Beranda" />} />
      <Route path="/umkm/pesan" element={<UMKMDashboard onLogout={() => navigate("/")} routeMenu="Pesan" />} />
      <Route path="/umkm/pengaturan" element={<UMKMDashboard onLogout={() => navigate("/")} routeMenu="Pengaturan" routePengaturanMenu="profil" />} />
      <Route path="/umkm/pengaturan/:section" element={<UMKMDashboard onLogout={() => navigate("/")} routeMenu="Pengaturan" />} />
      <Route path="/dashboard" element={<Navigate to="/dashboard/beranda" replace />} />
      <Route path="/dashboard/:tab/:section" element={<DashboardRoute />} />
      <Route path="/dashboard/:tab" element={<DashboardRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;





