import { Box, Container, Heading, Image } from "@chakra-ui/react"
// import Image from "next/image"
import styles from "../styles/PrintPkmn.module.css"
import FetchPkdxData from "./FetchPkdxData"


export default function PrintPkmn({ name, urlimg, children }) {
  const pkmn = FetchPkdxData(name,urlimg,name)
  return (
    <>
      {name && (
        // className={styles.pkmnevo}
        <Container centerContent mt="2" h={"200px"} bg="rgba(255,120,60,0.4)">
          <Heading as="h3" size={"md"}>
            {name}
          </Heading>
          {/* className={styles.pkmnimg} */}
          <Box h={'300px'} w={"200px"}>
            <Image
              boxSize={'100px'}
              src={pkmn.pkdx?.sprites?.front_default ?? "/pokedex-icon.png"}
              alt={name}
              layout={"fill"}
            ></Image>
          </Box>
          {children}
        </Container>
      )}
    </>
  )
}
