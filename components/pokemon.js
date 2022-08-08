import useSWR from "swr"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import PrintPkmn from "./PrintPkmn"
import Evolutions from "./Evolutions"

const fetcher = (url) => {
  // console.log(url)
  return fetch(url).then((res) => res.json())
}

export default function Pokemon({ name, url }) {
  //! day 2
  //? struggling with objects passed as props,func argument is obj name,
  //? prop in the call of component is the key inside object, to avoid this, use destructuring func({props})

  const { data: pkmn, error: pkmnError } = useSWR(`${url}${name}`, fetcher, {
    revalidateOnFocus: false,
  })
  const { data: species, error: speciesError } = useSWR(
    pkmn ? `${pkmn.species.url}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  // console.log({error})
  const { data: evolution, error: evolutionError } = useSWR(
    species ? `${species["evolution_chain"]["url"]}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  const Evo2 = Evolutions(
    evolution?.chain.evolves_to[0]?.species.name,
    url,
    evolution
  )
  const Evo3 = Evolutions(
    evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name,
    url,
    evolution
  )
  const Evo = Evolutions(evolution?.chain.species.name, url, evolution)

  if (pkmnError) {
    return <div>no pokemon</div>
  }
  if (!pkmn) {
    return <div>pkmn cargando...</div>
  }
  if (speciesError) {
    return <div>no species</div>
  }
  if (!species) {
    return <div>species cargando...</div>
  }
  if (evolutionError) {
    return <div>no evolution to show</div>
  }
  if (!evolution) {
    return <div>evolution cargando...</div>
  }
  // console.log(Evo3)
  // console.log(evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name)

  return (
    <div className={styles["fetched-container"]}>
      {/* serached pkmn */}
      <PrintPkmn
        name={pkmn.name}
        urlimg={pkmn.sprites.front_default}
      ></PrintPkmn>
      <div className={styles.evolutions}>
        <PrintPkmn
          name={evolution?.chain.species.name}
          urlimg={Evo.urlimg}
        ></PrintPkmn>

        <PrintPkmn
          name={evolution?.chain.evolves_to[0]?.species.name}
          urlimg={Evo2.urlimg}
        ></PrintPkmn>

        <PrintPkmn
          name={evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name}
          urlimg={Evo3.urlimg}
        ></PrintPkmn>
      </div>
    </div>
  )
}
