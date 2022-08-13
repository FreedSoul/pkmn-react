import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState,useEffect } from "react"
import PrintPkmn from "../components/PrintPkmn"
import Evolutions from "../components/Evolutions"
import { DebounceInput } from "react-debounce-input"

export default function WhatPkmn() {
  const [whatpkmn, setwhatpkmn] = useState("")
  const [pkmnId, setPkmnId] = useState(0)
  const url = `https://pokeapi.co/api/v2/pokemon/`
  const totalpkmns = 905
  useEffect(() => {
    setPkmnId(Math.floor(Math.random() * totalpkmns))
  },[])
  const urlimg = Evolutions(pkmnId,url,true)
  console.log(urlimg)
  const handleSubmit = (event) => {
    event.preventDefault()
    // hola.current.value = ''
  }
  return (
    <div className={styles.container}>
      <h1>Whats That Pokemon?</h1>
      <div className={styles.areapokemon}></div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          value={whatpkmn}
          onChange={(event) => setwhatpkmn(event.target.value)}
          type="text"
          name="whatpkmn"
          debounceTimeout={500}
          minLength={2}
        />
      </form>
      <button
        onClick={() => setPkmnId(Math.floor(Math.random() * totalpkmns))}
      >recargar pokemon</button>
      <PrintPkmn name={pkmnId} urlimg={urlimg.urlimg}></PrintPkmn>
    </div>
  )
}
