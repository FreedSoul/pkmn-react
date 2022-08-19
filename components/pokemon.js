import useSWR from "swr"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import PrintPkmn from "./PrintPkmn"
import FetchPkdxData from "./FetchPkdxData"
import PrintDetails from "./PrintDetails"
import { Box, Center, Container, Flex, Spacer, Spinner, Text } from "@chakra-ui/react"
import PrintEvo from "./PrintEvo"

export const fetcher = (url) => {
  // console.log(url)
  return fetch(url).then((res) => res.json())
}

export default function Pokemon({ name, url, newSearch }) {
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
    return (
      <Box position={'relative'} mt={'130px'} justifyContent={'center'}>
        <Text fontSize={'70px'} zIndex={'50'} textAlign={'center'}>NO PKMN</Text>
      </Box>
    )
  }
  if (!pkmn) {
    return (
      <Box position={"relative"} mt={"130px"}>
        <Container width={"100%"} h={"550px"} justifyContent={"center"}>
          <Center>
            <Spinner color="red.500" size={"xl"} thickness={"4px"} />
          </Center>
        </Container>
        <Text fontSize={"70px"} zIndex={"50"} textAlign={"center"}>
          pkmn cargando...
        </Text>
      </Box>
    )
  }
  if (speciesError) {
    return <div>no species</div>
  }
  if (!species) {
    return <div>species cargando...</div>
  }
  if (evolutionError) {
    return (
      <Box position={'relative'} mt={'130px'} justifyContent={'center'}>
        <Text fontSize={'70px'} zIndex={'50'} textAlign={'center'}>no evolution to show</Text>
      </Box>
    )
  }
  if (!evolution) {
    return (
      <Box position={"relative"} mt={"130px"}>
        <Container width={"100%"} h={"550px"} justifyContent={"center"}>
          <Center>
            <Spinner color="red.500" size={"xl"} thickness={"4px"} />
          </Center>
        </Container>
        <Text fontSize={"70px"} zIndex={"50"} textAlign={"center"}>
          Loading Evolutions....
        </Text>
      </Box>
    )
  }
  // console.log(Evo3)
  // console.log(evolution?.chain.evolves_to[0]?.evolves_to[0]?.species.name)
  const isLoading = () => {
    return ( 
      <Flex>
      </Flex>
    )
  }

  return (
    <>
      <Flex direction={"column"}>
        <Center >
          {/* serached pkmn */}
          <PrintPkmn name={pkmn.name} urlimg={url}>
            <PrintDetails name={pkmn.name} url={url} />
          </PrintPkmn>
        </Center>
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
        
      </Flex>
    </>
  )
}
