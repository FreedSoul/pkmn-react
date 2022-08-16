import styles from "../styles/Home.module.css"
import useSWR from "swr"
import { useState,useEffect } from "react"
import PrintPkmn from "../components/PrintPkmn"
import FetchPkdxData from "../components/FetchPkdxData"
import { DebounceInput } from "react-debounce-input"
import Link from "next/link"

export default function WhatPkmn() {
  const [whatpkmn, setwhatpkmn] = useState("")
  // const [pkmnInfo, setPkmnInfo] = useState({})
  const [answer, setAnswer] = useState("")
  const [pkmnId, setPkmnId] = useState(0)
  const url = `https://pokeapi.co/api/v2/pokemon/`
  const totalpkmns = 905
  const pkmnInfo = FetchPkdxData(pkmnId,url,pkmnId)
  const getARandomId = () => Math.floor(Math.random() * totalpkmns)

  useEffect(() => {
    setPkmnId(getARandomId)
  }, [])

  useEffect(() => {
    setwhatpkmn(pkmnInfo?.pkdx?.name)
  }, [pkmnInfo])
  // console.log({ whatpkmn }, { answer })

  const handleRefresh = () => {
    setwhatpkmn(pkmnInfo?.pkdx?.name),
    setPkmnId(getARandomId)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // hola.current.value = ''
  }
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>The pokedex</a>
      </Link>
      <Link href="/compare">
        <a>let&lsquo;s compare pokemons!</a>
      </Link>
      <h1>What&lsquo;s That Pokemon?</h1>
      <div className={styles.areapokemon}>
        <PrintPkmn name={pkmnId} urlimg={url}></PrintPkmn>
      </div>
      {whatpkmn === answer &&
        "you guessed it (destapar el pokemon tambn despues de tener el filtro)"}
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          type="text"
          name="whatpkmn"
          debounceTimeout={500}
          minLength={2}
        />
      </form>
      <button onClick={handleRefresh}>recargar pokemon</button>
    </div>
  )
}
