import { createContext, useState, useEffect } from 'react';
import { doctorsData } from '../data/doctorsData';

export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
    const [doctors, setDoctors] = useState(() => {
        const savedDoctors = localStorage.getItem('doctors');
        return savedDoctors ? JSON.parse(savedDoctors) : doctorsData;
    });

    useEffect(() => {
        localStorage.setItem('doctors', JSON.stringify(doctors));
    }, [doctors]);

    const addDoctor = (doctor) => {
        const newDoctor = {
            ...doctor,
            id: doctors.length > 0 ? Math.max(...doctors.map(d => d.id)) + 1 : 1,
            status: 'active'
        };
        setDoctors([...doctors, newDoctor]);
    };

    const updateDoctor = (id, updatedDoctor) => {
        setDoctors(doctors.map(doctor =>
            doctor.id === id ? { ...doctor, ...updatedDoctor } : doctor
        ));
    };

    const deleteDoctor = (id) => {
        setDoctors(doctors.filter(doctor => doctor.id !== id));
    };

    const getDoctorById = (id) => {
        return doctors.find(doctor => doctor.id === id);
    };

    return (
        <DoctorContext.Provider value={{
            doctors,
            addDoctor,
            updateDoctor,
            deleteDoctor,
            getDoctorById
        }}>
            {children}
        </DoctorContext.Provider>
    );
}; 