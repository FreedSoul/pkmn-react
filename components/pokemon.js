import useSWR from "swr"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import PrintPkmn from "./PrintPkmn"
import FetchPkdxData from "./FetchPkdxData"
import PrintDetails from "./PrintDetails"
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Spacer,
  Spinner,
  Text,
  chakra,
} from "@chakra-ui/react"
import PrintEvo from "./PrintEvo"
import { useState } from "react"
import { motion, isValidMotionProp } from "framer-motion"

export const fetcher = (url) => {
  // console.log(url)
  return fetch(url).then((res) => res.json())
}

function AnError({ text }) {
  return (
    <Box position={"relative"} mt={"130px"} justifyContent={"center"}>
      <Text fontSize={"70px"} zIndex={"50"} textAlign={"center"}>
        {text}
      </Text>
    </Box>
  )
}

const IsLoading = ({ text }) => {
  return (
    <Box position={"relative"} mt={"130px"}>
      <Container width={"100%"} h={"550px"} justifyContent={"center"}>
        <Center>
          <Spinner color="red.500" size={"xl"} thickness={"4px"} />
        </Center>
      </Container>
      <Text fontSize={"70px"} zIndex={"50"} textAlign={"center"}>
        {text}
      </Text>
    </Box>
  )
}

export default function Pokemon({ name, url, newSearch }) {
  //! day 2
  //? struggling with objects passed as props,func argument is obj name,
  //? prop in the call of component is the key inside object, to avoid this, use destructuring func({props})

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  })

  const [showevolutions, setShowevolutions] = useState(false)

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
  // const Evo2 = FetchPkdxData(EvoName2, url, evolution)
  // const Evo3 = FetchPkdxData(EvoName3, url, evolution)
  // const Evo = FetchPkdxData(EvoName, url, evolution)

  if (pkmnError) {
    return <AnError text="no pokemon" />
    // <Box position={'relative'} mt={'130px'} justifyContent={'center'}>
    //   <Text fontSize={'70px'} zIndex={'50'} textAlign={'center'}>NO PKMN</Text>
    // </Box>
  }
  if (!pkmn) {
    return <IsLoading text="pkmn cargando..." />
  }
  if (speciesError) {
    return <AnError text="no species" />
  }
  if (!species) {
    return <IsLoading text="species cargando..." />
  }
  if (evolutionError) {
    return <AnError text={"no evolution to show<"} />
  }
  if (!evolution) {
    return <IsLoading text="Loading Evolutions...." />
  }
  // console.log(Evo3)
  // console.log(evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name)

  return (
    <>
      <Flex direction={"column"} className={"guiaaaaaaaaaaa"}>
        <Center>
          {/* serached pkmn */}
          <PrintPkmn name={pkmn.name} urlimg={url}>
            <PrintDetails
              name={pkmn.name}
              url={url}
              setShowevolutions={setShowevolutions}
              showevolutions={showevolutions}
            />
            <Button
              w={"100px"}
              h="40px"
              // bg={"white"}
              position={"absolute"}
              top={["330px", "350px", "350px", "350px"]}
              right={["100px", "80px", "100px", "100px"]}
              _hover={{ fontWeight: "semibold" }}
              bg={!showevolutions ? "white" : "rgba(0,0,0,0.45)"}
              border={showevolutions ? "2px" : ""}
              borderColor={"blue.300"}
              boxShadow={"4px 5px 3px 1px rgba(0,0,0,0.75)"}
              aria-label="see Evolutions"
              onClick={() => {
                setShowevolutions(!showevolutions)
              }}
            >
              <Text fontSize="md">{"Evolutions"}</Text>
            </Button>
          </PrintPkmn>
        </Center>
        {showevolutions && (
          <ChakraBox
            h="fit-content"
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0.1,
              y: -500,
            }}
            transition={{
              duration: 1,
              type: "spring",
              opacity: 0.3,
            }}
          >
            <Flex
              direction={["column", "column", "row", "row"]}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <PrintEvo name={EvoName} urlimg={url} newSearch={newSearch} />

              {EvoName2 && (
                <PrintEvo name={EvoName2} urlimg={url} newSearch={newSearch} />
              )}
              {EvoName3 && (
                <PrintEvo name={EvoName3} urlimg={url} newSearch={newSearch} />
              )}
            </Flex>
          </ChakraBox>
        )}
      </Flex>
    </>
  )
}
