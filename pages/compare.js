import styles from "../styles/Home.module.css"
import { useState, useRef } from "react"
import PrintPkmn from "../components/PrintPkmn"
import PrintDetails from "../components/PrintDetails"
import { DebounceInput } from "react-debounce-input"
import FetchPkdxData from "../components/FetchPkdxData"
import Link from "next/link"

export default function Compare() {
  const [compare1, setCompare1] = useState("")
  const [compare2, setCompare2] = useState("")
  const [compare3, setCompare3] = useState("")

  const url = `https://pokeapi.co/api/v2/pokemon/`
  // const hola = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    // hola.current.value = ''
  }

  return (
    <div className={styles.container}>
      <Link href="/whatpkmn">
        <a>what&lsquo;s that pokemon?</a>
      </Link>
      <Link href="/">
        <a>The pokedex</a>
      </Link>
      <h1>lets compare some pokemons!</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          value={compare1}
          onChange={(event) => setCompare1(event.target.value)}
          type="text"
          name="pkname"
          debounceTimeout={500}
          minLength={2}
        />
      </form>
      <PrintPkmn name={compare1} urlimg={url}>
        <PrintDetails name={compare1} url={url} />
      </PrintPkmn>
      {/* ---------------------------------------------------- */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          value={compare2}
          onChange={(event) => setCompare2(event.target.value)}
          type="text"
          name="pkname"
          debounceTimeout={500}
          minLength={2}
        />
      </form>
      <PrintPkmn name={compare2} urlimg={url}>
        <PrintDetails name={compare2} url={url} />
      </PrintPkmn>
      {/* ---------------------------------------------------- */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          value={compare3}
          onChange={(event) => setCompare3(event.target.value)}
          type="text"
          name="pkname"
          debounceTimeout={500}
          minLength={2}
        />
      </form>
      <PrintPkmn name={compare3} urlimg={url}>
        <PrintDetails name={compare3} url={url} />
      </PrintPkmn>
    </div>
  )
}
