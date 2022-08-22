import styles from "../styles/Home.module.css"
import useSWR from "swr"
import { useState, useEffect } from "react"
import PrintPkmn from "../components/PrintPkmn"
import FetchPkdxData from "../components/FetchPkdxData"
import { DebounceInput } from "react-debounce-input"
import Link from "next/link"
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react"

export default function WhatPkmn() {
  const [whatpkmn, setwhatpkmn] = useState("")
  // const [pkmnInfo, setPkmnInfo] = useState({})
  const [answer, setAnswer] = useState("")
  const [pkmnId, setPkmnId] = useState(0)
  const url = `https://pokeapi.co/api/v2/pokemon/`
  const totalpkmns = 905
  const pkmnInfo = FetchPkdxData(pkmnId, url, pkmnId)
  const getARandomId = () => Math.floor(Math.random() * totalpkmns)

  useEffect(() => {
    setPkmnId(getARandomId)
  }, [])

  useEffect(() => {
    setwhatpkmn(pkmnInfo?.pkdx?.name)
  }, [pkmnInfo])
  // console.log({ whatpkmn }, { answer })

  const handleRefresh = () => {
    setwhatpkmn(pkmnInfo?.pkdx?.name), setPkmnId(getARandomId)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // hola.current.value = ''
  }
  return (
    <div className={styles.container}>
      <Flex>
        <Box
          p="2"
          width="140px"
          bg={"red.500"}
          border={"2px"}
          borderColor={"white"}
        >
          <Link href="/">
            <a>The pokedex</a>
          </Link>
        </Box>
        <Spacer />
        <Box
          p="2"
          width="140px"
          bg={"blue.500"}
          border={"2px"}
          borderColor={"white"}
        >
          <Link href="/whatpkmn">
            <a>Let&lsquo;s compare some Pokemons!</a>
          </Link>
        </Box>
      </Flex>
      <Center>
        <Heading
          as={"h1"}
          color={"black"}
          zIndex={"1"}
          mt={["30px", "20px"]}
          bg="rgba(0, 230, 203, 0.34)"
          border={"2px"}
          borderColor={"white"}
          padding={"30px"}
        >
          <a>what&lsquo;s that pokemon?</a>
        </Heading>
      </Center>
      <VStack>
        <VStack flexDirection={"column"}>
          <Box
            position={"relative"}
            right={["0vw", "-125px", "-10vw", "-10vw"]}
          >
            <Box >
              <PrintPkmn name={pkmnId} urlimg={url} filter></PrintPkmn>
            </Box>
          </Box>
          <Box position={"relative"} top="40px">
            <Box
              padding={"8px"}
              bg={"rgba(0, 229, 201, 0.73)"}
              position="relative"
              top={"-260px"}
              borderRadius={"5px"}
            >
              <Input
                as={DebounceInput}
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                variant={"filled"}
                bg="rgba(0,255,148,0.6)"
                zIndex={"5"}
                border={"2px"}
                borderColor={"black"}
                focusBorderColor="black"
                color={"black"}
                position={"static"}
                // right={["16vw", "10vw", "10vw", "9vw"]}
                // top={"10px"}
                size={["md", "md", "lg"]}
                fontSize={["lg", "lg"]}
                placeholder="guess the pokemon name..."
                width={["300px", "300px", "300px"]}
                type="text"
                name="whatname"
                debounceTimeout={500}
                minLength={2}
                autoComplete={"off"}
              />
            </Box>
            {/* position={"fixed"} top={"100px"} */}
            <Button
              position={"relative"}
              top={"-100px"}
              right={"-100px"}
              bg={"grey"}
              onClick={handleRefresh}
            >
              recargar pokemon
            </Button>
          </Box>
        </VStack>
        <Box bg={"white"} position={"relative"}>
          {whatpkmn === answer &&
            "you guessed it (destapar el pokemon tambn despues de tener el filtro)"}
        </Box>
      </VStack>
    </div>
  )
}
