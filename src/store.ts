import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"; //middleware
import { v4 as uuidv4 } from "uuid";

import { DraftPatient, Patient } from "./types";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"]; // CREANDO ID => get (leer)

  // - ACTIONS
  addPatient: (data: DraftPatient) => void;
  removePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

// * Helper function crear una paciente con identificación única
const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: "", // CREANDO ID => get (leer)

        // - ACTIONS
        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },

        // // -
        removePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id), //no hay copia "..."
          }));
        },

        getPatientById: (id) => {
          console.log(id);
          set(() => ({
            activeId: id,
          }));
        },

        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId
                ? { id: state.activeId, ...data }
                : patient
            ),
            activeId: "",
          }));
        },
        //
      }),
      { name: "patient-storage" }
      // storage:createJSONStorage(()=>localStorage) //viene por default O cambia por session storage
    )
  )
);
