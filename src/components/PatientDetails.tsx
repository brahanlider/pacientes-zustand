import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

  const { removePatient, getPatientById } = usePatientStore()

  const handleClick = () => {
    removePatient(patient.id)
    toast("Paciente Eliminado", { type: "error" })
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg">
      <PatientDetailsItem label="Id" input={patient.id}
      />
      <PatientDetailsItem label="Paciente" input={patient.name}
      />
      <PatientDetailsItem label="Propietario" input={patient.caretaker}
      />
      <PatientDetailsItem label="Email" input={patient.email}
      />
      <PatientDetailsItem label="Fecha" input={patient.date.toString()}
      />
      <PatientDetailsItem label="Sintomas" input={patient.symptoms}
      />

      <div className="flex justify-between gap-3 mt-10">
        <button
          type="button"
          className="bg-violet-600 text-white uppercase font-bold rounded-xl p-2 transition duration-200 ease-in-out transform hover:bg-violet-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400"
          onClick={() => getPatientById(patient.id)}
        >Editar
        </button >

        <button
          type="button"
          className="bg-red-600 text-white uppercase font-bold rounded-xl p-2 transition duration-200 ease-in-out transform hover:bg-red-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
          value="Eliminar"
          onClick={handleClick}
        >Eliminar
        </button >
      </div>

    </div>
  )
}
