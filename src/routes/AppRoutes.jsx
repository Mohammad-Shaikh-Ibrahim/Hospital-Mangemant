import { Routes, Route, Navigate } from 'react-router-dom';
import Patients from '../pages/Patients';
import AddPatientReactHookForm from '../pages/AddPatientReactHookForm';
import DoctorRegistration from '../pages/DoctorRegistration';
import PatientDetails from '../pages/PatientDetails';
import DoctorDetails from '../pages/DoctorDetails';
import Doctors from '../pages/Doctors';
import LandingPage from '../pages/LandingPage';
import Layout from '../layouts/Layout';

const AppRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/add-patient" element={<AddPatientReactHookForm />} />
                <Route path="/add-patient/:id" element={<AddPatientReactHookForm />} />
                <Route path="/doctor-registration" element={<DoctorRegistration />} />
                <Route path="/patient-details/:id" element={<PatientDetails />} />
                <Route path="/doctor-details/:id" element={<DoctorDetails />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes; 