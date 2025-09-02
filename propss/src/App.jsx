import Student from "./Student"

export default function App() {
  return (
    <>
      <Student name="Xyz" age={24} isStudent={true} />
      <Student name="Ram" age={21} isStudent={false} />
      <Student name="Sita" age={20} isStudent={true} />
      <Student name="Hari" age={40} isStudent={false} />
    </>
  )
}