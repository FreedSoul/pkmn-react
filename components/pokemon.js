import useSWR from "swr"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import PrintPkmn from "./PrintPkmn"
import FetchPkdxData from "./FetchPkdxData"
import PrintDetails from "./PrintDetails"
import { Center, Flex } from "@chakra-ui/react"

export const fetcher = (url) => {
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
  const EvoName = evolution?.chain.species.name
  const EvoName2 = evolution?.chain.evolves_to[0]?.species.name
  const EvoName3 = evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name
  const Evo2 = FetchPkdxData(EvoName2, url, evolution)
  const Evo3 = FetchPkdxData(EvoName3, url, evolution)
  const Evo = FetchPkdxData(EvoName, url, evolution)

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
    <>
      <Center>
        {/* serached pkmn */}
        <PrintPkmn name={pkmn.name} urlimg={url}>
          <PrintDetails name={pkmn.name} url={url} />
        </PrintPkmn>
      </Center>
      {/* <Flex justifyContent={"space-between"} alignItems={"baseline"}>
        <PrintPkmn name={EvoName} urlimg={url}>
          <PrintDetails name={EvoName} url={url} />
        </PrintPkmn>

        <PrintPkmn name={EvoName2} urlimg={url}>
          <PrintDetails name={EvoName2} url={url} />
        </PrintPkmn>

        <PrintPkmn name={EvoName3} urlimg={url}>
          <PrintDetails name={EvoName3} url={url} />
        </PrintPkmn>
      </Flex> */}
    </>
  )
}
