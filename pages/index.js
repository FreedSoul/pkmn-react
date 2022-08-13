import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState, useRef } from "react"
import Pokemon from "../components/pokemon"
import { DebounceInput } from "react-debounce-input"

export default function Home() {

  const [pkname, setPkname] = useState('')

  const url = `https://pokeapi.co/api/v2/pokemon/`
  // const hola = useRef()

  const handleSubmit = (event) =>{
    event.preventDefault()
    // hola.current.value = ''
  }

  return (
    <div className={styles.container}>
      <h1>The Pokedex App</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          value={pkname}
          onChange={(event) => setPkname(event.target.value)}
          // onSubmit={ref.fieldName.value=""}
          type="text"
          name="pkname"
          // ref={hola}
          debounceTimeout={500}
          minLength={2}
        />
      </form>
      <Pokemon name={pkname !== "" ? pkname : "bulbasaur"} url={url} />
    </div>
  )
}
