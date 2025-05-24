import { createContext, useState, useEffect, useCallback } from 'react';
import { initialPatients } from '../data/patientsData';
import { STORAGE_KEYS } from '../constants';

// Create and export the context
const PatientContext = createContext();

export function PatientProvider({ children }) {
    const [patients, setPatients] = useState(() => {
        try {
            const savedPatients = localStorage.getItem(STORAGE_KEYS.PATIENT_DATA);
            return savedPatients ? JSON.parse(savedPatients) : initialPatients;
        } catch (error) {
            console.error('Error loading patients from localStorage:', error);
            return initialPatients;
        }
    });

    // Save to localStorage whenever patients data changes
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEYS.PATIENT_DATA, JSON.stringify(patients));
        } catch (error) {
            console.error('Error saving patients to localStorage:', error);
        }
    }, [patients]);

    const addPatient = useCallback((newPatient) => {
        setPatients(prevPatients => {
            const maxId = prevPatients.length > 0 ? Math.max(...prevPatients.map(p => p.id)) : 0;
            return [...prevPatients, {
                ...newPatient,
                id: maxId + 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }];
        });
    }, []);

    const editPatient = useCallback((updatedPatient) => {
        setPatients(prevPatients =>
            prevPatients.map(patient =>
                patient.id === updatedPatient.id
                    ? { ...updatedPatient, updatedAt: new Date().toISOString() }
                    : patient
            )
        );
    }, []);

    const deletePatient = useCallback((patientId) => {
        setPatients(prevPatients => {
            const filteredPatients = prevPatients.filter(patient => patient.id !== patientId);
            return filteredPatients.map((patient, index) => ({
                ...patient,
                id: index + 1,
                updatedAt: new Date().toISOString(),
            }));
        });
    }, []);

    const clearAllData = useCallback(() => {
        try {
            localStorage.removeItem(STORAGE_KEYS.PATIENT_DATA);
            setPatients(initialPatients);
        } catch (error) {
            console.error('Error clearing patient data:', error);
        }
    }, []);

    const value = {
        patients,
        addPatient,
        editPatient,
        deletePatient,
        clearAllData,
    };

    return (
        <PatientContext.Provider value={value}>
            {children}
        </PatientContext.Provider>
    );
}

export { PatientContext }; 