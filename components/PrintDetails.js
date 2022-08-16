import Image from "next/image"
import styles from "../styles/PrintDetails.module.css"
import useSWR from "swr"
import { fetcher } from "./pokemon"

function FetchDetails(name, url) {
  const { data, error } = useSWR(name ? `${url}${name}` : null, fetcher)

  return {
    details: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default function PrintDetails({ name, url }) {
  const details = FetchDetails(name, url).details

  const abilities = details?.abilities.map((abilityItem, index) => {
    return <li key={index}>{abilityItem.ability.name}</li>
  })

  const weight = (details?.weight / 10) + " Kg"

  const height = (details?.height / 10) + " Mt"

  const baseExp = details?.base_experience

  const types = details?.types.map(H => H.type.name)
  .map((W, index) => {
    return (
      <li key={index}>{W}</li>
    )
  })

  const stats = details?.stats.map((statItem, index) => {
    return (
      <li key={index}>{statItem.stat.name + " - - " + statItem.base_stat}</li>
    )
  })

    const movesLevel = details?.moves
      .map((moveItem) => {
        return [moveItem.move.name,moveItem.version_group_details
          .map((item) => {
            if (
              item.version_group.name === "x-y" &&
              item.move_learn_method.name === "level-up"
            ) {
              return item.level_learned_at
            } else {
              return 0
            }
          })
          .filter((u) => u !== 0)
      ]})
      .filter((y) => JSON.stringify(y[1]) !== '[]').map(y => y.flat())
      .map((q, index) => <li key={index}>{q[0] +'- - '+ ((q[1]&&q[2])??q[1])}</li>)
// -----------------------------------------------------------------------------------------
      const movesMachine = details?.moves
        .map((moveItem) => {
          return [
            moveItem.move.name,
            moveItem.version_group_details
              .map((item) => {
                if (
                  item.version_group.name === "x-y" &&
                  item.move_learn_method.name === "machine"
                ) {
                  return item
                } else {
                  return 0
                }
              })
              .filter((u) => u !== 0),
          ]
        })
        .filter((y) => JSON.stringify(y[1]) !== "[]")
        .map(t => t[0])
        .map((q, index) => (
          <li key={index}>{q}</li>
        ))
    // console.log(movesLevel2, name, "level")
  console.log("-----------")
  return (
    <>
      {details&&
        <div className={styles.details}>
          <div className={styles.types}>
            <h3>types</h3>
            <div className={styles.types}>{<ul>{types}</ul>}</div>
          </div>
          <div className={styles.abilities}>
            <h3>Abilities</h3>
            <div className={styles.ability}>{<ul>{abilities}</ul>}</div>
          </div>
          <div className={styles.weight}>
            <h3>weight</h3>
            <div className={styles.weightvalue}>{weight}</div>
          </div>
          <div className={styles.height}>
            <h3>height</h3>
            <div className={styles.heightvalue}>{height}</div>
          </div>
          <div className={styles.baseExp}>
            <h3>baseExp</h3>
            <div className={styles.baseExpvalue}>{baseExp}</div>
          </div>
          <div className={styles.stats}>
            <h2>stats</h2>
            <div className={styles.statsvalue}>{stats}</div>
          </div>
          <div className={styles.movesLevel}>
            <h3>Moves Level</h3>
            <div className={styles.movesvalue}>{movesLevel}</div>
          </div>
          <div className={styles.movesMachine}>
            <h3>Moves Machine</h3>
            <div className={styles.movesvalue}>{movesMachine}</div>
          </div>
        </div>
      }
    </>
  )
}
