import { Navigate, Route, Routes } from "react-router-dom";
import { StartPageLayout } from "./layouts/start-page-layout";
import { MainLayout } from "./layouts/main-layout";
import { IndexLayout } from "./layouts/index-layout";
import { DoctorLayout } from "./layouts/doctor-layout";
import { lazy } from "react";
import { ChosenClinic } from "./pages/patient/chosenClinic/chosenClinic";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Feedbacks } from "./components/Feedbacks/Feedbacks";

const Home = lazy(() => import("./pages/map"));

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
const DescriptionDoctor = lazy(() => import("./components/descriptionDoctor"));
const PatientClinic = lazy(() => import("./pages/patient/patientClinic"));
const PatientClinics = lazy(() => import("./pages/patient/patientClinics"));
const Doctors = lazy(() => import("./pages/patient/chosenClinic/doctors"));

const Clinics = lazy(() =>
  import("./pages/admin/admin-global/add-admin-clinics")
);

const DoctorProfileForPatient = lazy(() =>
  import("./pages/patient/profile/doctorProfileForPatient")
);
const Feedback = lazy(() => import("./components/feedback"));

const Admin = lazy(() => import("./pages/admin/admin-global/main"));
const AdminsClinic = lazy(() =>
  import("./pages/admin/admin-clinic/add-clinic")
);
const Specializations = lazy(() =>
  import("./pages/admin/admin-global/add-specializations")
);

const AdminClinic = lazy(() =>
  import("./pages/admin/admin-clinic/admin-clinic-pages")
);

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
        <Route path="map-pharmacy" element={<Home />} />
        <Route path="admin-clinic">
          <Route path="" element={<AdminClinic />} />
        </Route>
        <Route path="admin">
          <Route path="" element={<Admin />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="clinic-admins" element={<AdminsClinic />} />
          <Route path="specializations" element={<Specializations />} />
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
              <Route path="feedback" element={<Feedbacks type="clinic" />} />
            </Route>
          </Route>
        </Route>
        <Route path="doctors">
          <Route exact path=":id" element={<DoctorProfileForPatient />}>
            <Route path="" element={<DescriptionDoctor />} />
            <Route path="feedback" element={<Feedbacks type="doctor" />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={user === null && <Navigate to="/main" />} />
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;
