import { useState } from "react"
import { hirlevelFeliratkozas } from "./api"

export default function Hirlevel() {

  const [vezeteknev, setVezeteknev] = useState("")
  const [keresztnev, setKeresztnev] = useState("")
  const [szuletesnap, setSzuletesnap] = useState("")
  const [email, setEmail] = useState("")

  async function kuldes(e) {
    e.preventDefault()

    const adat = await hirlevelFeliratkozas(
      vezeteknev,
      keresztnev,
      szuletesnap,
      email
    )

    console.log(adat)
  }

  return (
    <section className="hirlevel">

      <h2>IRATKOZZON FEL HÍRLEVELÜNKRE!</h2>

      <form onSubmit={kuldes}>

        <input
          type="text"
          placeholder="Vezetéknév"
          value={vezeteknev}
          onChange={(e) => setVezeteknev(e.target.value)}
        />

        <input
          type="text"
          placeholder="Keresztnév"
          value={keresztnev}
          onChange={(e) => setKeresztnev(e.target.value)}
        />

        <input
          type="date"
          value={szuletesnap}
          onChange={(e) => setSzuletesnap(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Küldés</button>
      </form>
    </section>
  )
}