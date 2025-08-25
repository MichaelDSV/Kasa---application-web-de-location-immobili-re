import { useParams } from "react-router-dom"

export default function Housing() {
  const { id } = useParams()
  return (
    <>
      <h1>Logement {id}</h1>
      <p>Carrousel + infos du logement.</p>
    </>
  )
}
