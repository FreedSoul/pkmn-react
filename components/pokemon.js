import useSWR from "swr"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const fetcher = (url) => {
  console.log(url)
  return fetch(url).then((res) => res.json())
}

export default function Pokemon({ name, url }) {
  //! day 2
  //? struggling with objects passed as props,func argument is obj name,
  //? prop in the call of component is the key inside object, to avoid this, use destructuring func({props})

  const { error, data: pkmn } = useSWR(`${url}${name}`, fetcher, {
    revalidateOnFocus: false,
  })
  const { data: species } = useSWR(
    pkmn ? `${pkmn.species.url}` : error,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  const { data: evolution } = useSWR(
    species ? `${species["evolution_chain"]["url"]}` : error,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  // pkmnId = data?.id

  if (error) return <h1>ohhh snapp!</h1>
  if (!pkmn) {
    return <div>cargando...</div>
  }
  if (!species) {
    return <div>cargando...</div>
  }
  if (!evolution) {
    return <div>cargando...</div>
  }
  // console.log(pkmn.species.url, "este es pkmn")
  // console.log(species["evolution_chain"]["url"], "este es species")
  // console.log(evolution.chain.evolves_to, "este es evolution")

  return (
    <div>
      <h2>{pkmn.name}</h2>
      <h2>{pkmn.id}</h2>
      <div className={styles.pkmnimg}>
        <Image
          src={pkmn.sprites.front_default}
          alt={pkmn.name}
          layout={"fill"}
        ></Image>
      </div>
      <div>
        {evolution && <p>{evolution.chain.species.name}</p>}
        {evolution.chain.evolves_to[0]?.species.name && (
          <p>{"=>" + evolution?.chain.evolves_to[0].species.name}</p>
        )}
        {evolution.chain.evolves_to[0]?.evolves_to[0]?.species.name && (
          <p>
            {"=>" + evolution?.chain.evolves_to[0].evolves_to[0]?.species.name}
          </p>
        )}
        <div className={styles.pkmnimg}>
          {/* <Image
              src={{evolution?.chain.species.sprites.front_default}
              alt={evolution.name}
              layout={"fill"}
            ></Image> */}
        </div>
      </div>
    </div>
  )
}
