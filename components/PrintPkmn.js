import Image from "next/image"
import styles from "../styles/PrintPkmn.module.css"
import FetchPkdxData from "./FetchPkdxData"


export default function PrintPkmn({ name, urlimg, children }) {
  const pkmn = FetchPkdxData(name,urlimg,name)
  return (
    <>
      {name && (
        <div className={styles.pkmnevo}>
          <h2>{name}</h2>
          <div className={styles.pkmnimg}>
            <Image
              src={
                pkmn.pkdx?.sprites?.front_default ??
                "/pokedex-icon.png"
              }
              alt={name}
              layout={"fill"}
            ></Image>
          </div>
          {children}
        </div>
      )}
    </>
  )
}
