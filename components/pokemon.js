import useSWR from "swr"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import PrintPkmn from "./PrintPkmn"

const fetcher = (url) => {
  // console.log(url)
  return fetch(url).then((res) => res.json())
}

export default function Pokemon({ name, url }) {
  //! day 2
  //? struggling with objects passed as props,func argument is obj name,
  //? prop in the call of component is the key inside object, to avoid this, use destructuring func({props})

  const {  data: pkmn, error:pkmnError } = useSWR(`${url}${name}`, fetcher, {
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
    
  // console.log(evolution)
  // console.log(evolution["chain"]["evolves_to"][0].species.name, 'evo name')
  const { ftEvoUrl, ftEvoUrlError } = useSWR(
    true ? `${url}${evolution?.chain.evolves_to[0]?.species.name}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  console.log(
    evolution ? `${url}${evolution?.chain.evolves_to[0]?.species.name}` : null
  )
  // console.log({ftEvoUrlError})
  const { ftEvoUrl2, ftEvoUrl2Error } = useSWR(
    () => evolution
      ? `${url}${evolution.chain.evolves_to[0]?.evolves_to[0]?.species.name}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
    // console.log(evolution?.chain?.evolves_to[0]?.evolves_to[0]?.species.name)
  const { ftEvoUrl3, ftEvoUrl3Error } = useSWR(
    () => evolution ? `${url}${evolution.chain.species.name}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  if(pkmnError){
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
  if (ftEvoUrlError) {
    return <div>no evolution here</div>
  }
  if (!ftEvoUrl) {
    return <div>evolution url cargando...</div>
  }
  if (ftEvoUrl2Error) {
    return <div>no evolution2</div>
  }
  if (!ftEvoUrl2) {
    return <div>evolution2 url cargando...</div>
  }
  if (ftEvoUrl3Error) {
    return <div>no evolution3</div>
  }
  if (!ftEvoUrl3) {
    return <div>evolution3 url cargando...</div>
  }
  // if (!ftEvoImg) {
  //   return <div>evolution img cargando...</div>
  // }
  // if (error) return <h1>ohhh snapp!</h1>
  // console.log(pkmn.species.url, "este es pkmn")
  // console.log(species["evolution_chain"]["url"], "este es species")
  // console.log(evolution.chain.evolves_to, "este es evolution")

  return (
    <div>
      <PrintPkmn
        name={pkmn.name}
        conditional={true}
        urlimg={pkmn.sprites.front_default}
        alt={pkmn.name}
      ></PrintPkmn>
      {/* //   <h2>{pkmn.name}</h2>
      <h2>{pkmn.id}</h2>
      <div className={styles.pkmnimg}>
        <Image
          src={pkmn.sprites.front_default}
          alt={pkmn.name}
          layout={"fill"}
        ></Image>
       </div> */}
      <div className={styles.evolutions}>
        <PrintPkmn
          name={evolution?.chain.species.name}
          conditional={evolution}
          urlimg={ftEvoUrl3.sprites.front_default}
          alt={evolution?.chain.species.name}
        ></PrintPkmn>
        {/* {evolution && (
          <div className={styles.pkmnevo}>
            <p>{evolution?.chain.species.name}</p>
            <div className={styles.pkmnimg}>
              <Image
                src={ftEvoUrl3.sprites.front_default}
                alt={evolution.name}
                layout={"fill"}
              ></Image>
            </div>
          </div>
        )} */}

        <PrintPkmn
          name={evolution?.chain.evolves_to[0]?.species.name}
          conditional={evolution.chain.evolves_to[0]?.species.name}
          urlimg={ftEvoUrl.sprites.front_default}
          alt={evolution?.chain.evolves_to[0]?.species.name}
        ></PrintPkmn>
        {/* {evolution.chain.evolves_to[0]?.species.name && (
          <div className={styles.pkmnevo}>
            <p>{"=>" + evolution?.chain.evolves_to[0].species.name}</p>
            <div className={styles.pkmnimg}>
              <Image
                src={ftEvoUrl.sprites.front_default}
                alt={evolution.name}
                layout={"fill"}
              ></Image>
            </div>
          </div>
        )} */}
        <PrintPkmn
          name={evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name}
          conditional={
            evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name
          }
          urlimg={ftEvoUrl2.sprites.front_default}
          alt={evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name}
        ></PrintPkmn>
        {/* {evolution.chain.evolves_to[0]?.evolves_to[0]?.species.name && (
          <div className={styles.pkmnevo}>
            <p>
              {"=>" + evolution?.chain.evolves_to[0].evolves_to[0].species.name}
            </p>
            <div className={styles.pkmnimg}>
              <Image
                src={ftEvoUrl2.sprites.front_default}
                alt={evolution.name}
                layout={"fill"}
              ></Image>
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}
