import Image from "next/image"
// import styles from "../styles/PrintPkmn.module.css"
import styles from "../styles/PrintDetails.module.css"
import useSWR from "swr"
import { fetcher } from "./pokemon"

function FetchDetails(name, url) {
  const { data, error } = useSWR(name?`${url}${name}`:null, fetcher)

  return {
    details: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default function PrintDetails({ name, url }) {
  const abilities = FetchDetails(name, url)
  console.log(typeof(abilities))
  const weight = FetchDetails(name, url).weight
  const height = FetchDetails(name, url).height
  const stats = FetchDetails(name, url).stats
  const moves = FetchDetails(name, url).moves
  return (
    <>
      {
        <div className={styles.details}>
          {/* <div className={styles.abilities}>
            <h2>Abilities</h2>
            <div className={styles.ability}>{abilities}</div>
          </div> */}
          <div className={styles.weight}>
            <h2>weight</h2>
            <div className={styles.weightvalue}>{weight}</div>
          </div>
          <div className={styles.height}>
            <h2>height</h2>
            <div className={styles.heightvalue}>{height}</div>
          </div>
          {/* <div className={styles.stats}>
            <h2>stats</h2>
            <div className={styles.statsvalue}>{stats}</div>
          </div>
          <div className={styles.moves}>
            <h2>moves</h2>
            <div className={styles.movesvalue}>{moves}</div>
          </div> */}
        </div>
      }
    </>
  )
}


