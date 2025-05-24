// Local Storage Keys
export const STORAGE_KEYS = {
  PATIENT_DATA: "patient_management_data",
};

// Route Paths
export const ROUTES = {
  HOME: "/",
  PATIENTS: "/patients",
  ADD_PATIENT: "/add-patient",
  EDIT_PATIENT: "/add-patient/:id",
  DOCTOR_REGISTRATION: "/doctor-registration",
  PATIENT_DETAILS: "/patient-details/:id",
};

// Form Validation
export const VALIDATION = {
  PHONE_REGEX: /^[0-9]{10}$/,
  EMAIL_REGEX: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  REQUIRED_FIELD: "This field is required",
  INVALID_PHONE: "Please enter a valid 10-digit phone number",
  INVALID_EMAIL: "Please enter a valid email address",
};

// Table Configuration
export const TABLE_CONFIG = {
  ROWS_PER_PAGE: 10,
  ROWS_PER_PAGE_OPTIONS: [5, 10, 25, 50],
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: "MMM DD, YYYY",
  INPUT: "YYYY-MM-DD",
};
