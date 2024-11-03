type PatientDetailsItem = {
  label: string,
  input: string
}
export default function PatientDetailsItem({ label, input }: PatientDetailsItem) {
  return (
    <>
      <p className="font-bold mb-3 text-gray-700 uppercase">{label}:{" "}
        <span className="font-normal normal-case">{input}</span>
      </p>
    </>
  )
}
