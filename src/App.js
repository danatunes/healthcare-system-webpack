import { Navigate, Route, Routes } from "react-router-dom";
import { StartPageLayout } from "./layouts/start-page-layout";
import { MainLayout } from "./layouts/main-layout";
import { IndexLayout } from "./layouts/index-layout";
import { DoctorLayout } from "./layouts/doctor-layout";
import { lazy } from "react";
import { ChosenClinic } from "./pages/patient/chosenClinic/chosenClinic";
import DoctorProfileCalendar from "./components/doctorProfileCalendar";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Feedbacks } from "./components/Feedbacks/Feedbacks";

const Login = lazy(() => import("./pages/auth/login"));
const SignUp = lazy(() => import("./pages/auth/signUp"));
const Confirm = lazy(() => import("./pages/auth/confirm"));
const ResetPassword = lazy(() => import("./pages/auth/resetPassword"));
const DoctorProfile = lazy(() =>
  import("./pages/doctor/profile/doctorProfile")
);
const DoctorPatients = lazy(() => import("./pages/doctor/doctorPatients"));
const WaitingList = lazy(() => import("./pages/doctor/waitingList"));
const PatientProfile = lazy(() =>
  import("./pages/patient/profile/patientProfile")
);
const PatientProfileForDoctor = lazy(() =>
  import("./pages/doctor/profile/patientProfileForDoctor")
);
const PatientClinic = lazy(() => import("./pages/patient/patientClinic"));
const PatientClinics = lazy(() => import("./pages/patient/patientClinics"));
const Doctors = lazy(() => import("./pages/patient/chosenClinic/doctors"));

const Clinics = lazy(() => import("./pages/admin"));

const DoctorProfileForPatient = lazy(() =>
  import("./pages/patient/profile/doctorProfileForPatient")
);
const Feedback = lazy(() => import("./components/feedback"));

function App() {
  const user = useSelector(({ user }) => user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route exact path="/" element={<StartPageLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route exact path="/" element={<IndexLayout />}>
        <Route path="main" element={<MainLayout />} />
        <Route path="admin">
          <Route path="clinics" element={<Clinics />} />
          <Route path="clinic-admins" element={<div>clinic-admins</div>} />
          <Route path="add-doctor" element={<div>add-doc</div>} />
        </Route>
        <Route path="doctor" element={<DoctorLayout />}>
          <Route path=":id" element={<DoctorProfile />} />
          <Route path="patients">
            <Route path="" element={<DoctorPatients />} />
            <Route path=":id" element={<PatientProfileForDoctor />} />
            <Route path="waiting-list" element={<WaitingList />} />
          </Route>
        </Route>
        <Route exact path="patient">
          <Route path="" element={<PatientProfile />} />
          <Route path="clinic" element={<PatientClinic />} />
          <Route path="clinics">
            <Route path="" element={<PatientClinics />} />
            <Route path=":id" element={<ChosenClinic />}>
              <Route path="" element={<Doctors />} />
              <Route
                path="feedback"
                element={
                  <>
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                  </>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="doctors">
          <Route exact path=":id" element={<DoctorProfileForPatient />}>
            <Route
              path=""
              element={
                <div className="p-7">
                  Вернем красоту улыбки за первый прием, без боли и стресса с
                  гарантией качества до 5 лет на любую стоматологическую
                  процедуру
                </div>
              }
            />
            <Route path="feedback" element={<Feedbacks />} />
            <Route path="calendar" element={<DoctorProfileCalendar />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={user === null && <Navigate to="/main" />} />
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;
