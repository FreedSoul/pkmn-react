import Image from "next/image"
// import styles from "../styles/PrintPkmn.module.css"
import styles from "../styles/Home.module.css"

const fetcher = (url) => {
  // console.log(url)
  return fetch(url).then((res) => res.json())
}

export default function PrintPkmn({ name, urlimg }) {

  return (
    <>      
        {name && (
          <div className={styles.pkmnevo}>
            <h2>{name}</h2>
            <div className={styles.pkmnimg}>
              <Image
                src={urlimg}
                alt={name}
                layout={"fill"}
              ></Image>
            </div>
          </div>
        )}
    </>
  )
}
