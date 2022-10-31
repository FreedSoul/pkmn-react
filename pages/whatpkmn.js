import styles from "../styles/Home.module.css"
import useSWR from "swr"
import { useState, useEffect } from "react"
import PrintPkmn from "../components/PrintPkmn"
import FetchPkdxData from "../components/FetchPkdxData"
import { DebounceInput } from "react-debounce-input"
import Link from "next/link"
import { BsArrowRepeat } from "react-icons/bs"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
  VStack,
  Slide,
  Image
} from "@chakra-ui/react"

export default function WhatPkmn() {
  const [whatpkmn, setwhatpkmn] = useState("")
  const [answer, setAnswer] = useState(null)
  const [filter, setFilter] = useState(true)
  const [pkmnId, setPkmnId] = useState(0)
  // const [winaudio, setWinaudio] = useState(null)
  const url = `https://pokeapi.co/api/v2/pokemon/`
  const TOTAL_POKEMONS = 905
  const pkmnInfo = FetchPkdxData(pkmnId, url, pkmnId)
  const getARandomId = () => Math.floor(Math.random() * TOTAL_POKEMONS)

  useEffect(() => {
    setPkmnId(getARandomId)
  }, [])

  useEffect(() => {
    setwhatpkmn(pkmnInfo?.pkdx?.name)
  }, [pkmnInfo])

  useEffect(() => {
    if (whatpkmn === answer) {
      setFilter(false)
    }
  }, [whatpkmn, answer])
  
  const handleAnswer = (event) => {
    Audio.volume=0.1
    const simpleAnswer = event.target.value
    const cleanedAnswer = simpleAnswer.toLowerCase()
    setAnswer(cleanedAnswer)
  }
  console.log(typeof answer)
  const handleRefresh = (e) => {
    setwhatpkmn(pkmnInfo?.pkdx?.name),
      setPkmnId(getARandomId),
      setFilter(true),
      (e.target.value = ""),
      setAnswer("")
  }
  const specialNames = [
    "nidoran-m",
    "mr-mime",
    "nidoran-f",
    "ho-oh",
    "wormadam-plant",
    "mime-jr",
    "porygon-z",
    "giratina-altered",
    "deoxys-normal",
    "basculin-red-striped",
    "shaymin-land",
    "darmanitan-standard",
    "thundurus-incarnate",
    "keldeo-ordinary",
    "meowstic-male",
    "aegislash-shield",
    "pumpkaboo-average",
    "gourgeist-average",
    "tornadus-incarnate",
    "landorus-incarnate",
    "meloetta-aria",
    "type-null",
    "minior-red - meteor",
    "mimikyu-disguised",
    "jangmo-o",
    "hakamo-o",
    "kommo-o",
    "tapu-koko",
    "tapu-lele",
    "tapu-fini",
    "tapu-bulu",
    "toxtricity-amped",
    "mr-rime",
    "eiscue-ice",
    "indeedee-male",
    "morpeko-full-belly",
    "lycanroc-midday",
    "oricorio-baile",
    "wishiwashi-solo",
    "zygarde-50",
    "urshifu-single-strike",
    "basculegion-male",
  ]
  return (
    <div>
      <Flex>
        <Link href="/">
        <Box
          p="2"
          ml="25px"
          borderRadius={"5px"}
          width="140px"
          bg={"red.500"}
          border={"2px"}
          borderColor={"white"}
          cursor={"pointer"}
        >
            <a>The pokedex</a>
        </Box>
          </Link>
        <Spacer />
        <Link href="/compare">
        <Box
          p="2"
          mr="25px"
          borderRadius={"5px"}
          width="140px"
          bg={"blue.500"}
          border={"2px"}
          borderColor={"white"}
          cursor={"pointer"}
        >
            <a>Let&lsquo;s compare some Pokemons!</a>
        </Box>
          </Link>
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

      <VStack className="hola">
        <Box position={"relative"} top="40px">
          <ButtonGroup size="lg" isAttached variant="outline">
            <Button
              size="lg"
              color={"blackAlpha.700"}
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
              aria-label="other pokemon"
              bg={"aquamarine"}
              onClick={handleRefresh}
              fontSize={"44px"}
              leftIcon={<BsArrowRepeat />}
              zIndex={'dropdown'}
            >
              {/* <BsArrowRepeat>hi</BsArrowRepeat> */}
              <Text fontSize={"sm"}>Other Pokemon</Text>
            </Button>
          </ButtonGroup>
        </Box>
        <VStack flexDirection={"column"}>
          {whatpkmn === answer && (
            <>
              <Slide direction="bottom" in={true} style={{ zIndex: 10 }}>
                <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="100px"
                >
                  <AlertIcon boxSize="20px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    you guessed it
                  </AlertTitle>
                </Alert>
              </Slide>
            </>
          )}
            {whatpkmn === answer && (
              <audio id="pkmnlvl" src="level-up.mp3" autoPlay/>
            )}
          <Box position={'relative'} top={'10px'} right={'0px'}>
            <Image alt="smoke"  objectFit={'cover'} src={'/smoke1.png'} position={'absolute'} top={'160px'} right={'0px'} opacity={'0.95'}/>
            <PrintPkmn compare name={pkmnId} urlimg={url} filter={filter} />
          </Box>
          <Box
            padding={"8px"}
            bg={"rgba(0, 229, 201, 0.73)"}
            position="relative"
            top={["-420px", "-120px", "-120px", "-120px"]}
            borderRadius={"5px"}
          >
            <Input
              as={DebounceInput}
              value={answer}
              onChange={handleAnswer}
              variant={"filled"}
              bg="rgba(0,255,148,0.6)"
              zIndex={"5"}
              border={"2px"}
              borderColor={"black"}
              focusBorderColor="black"
              color={"black"}
              position={"static"}
              size={["md", "md", "md", "lg"]}
              fontSize={["lg", "lg", "lg", "lg"]}
              placeholder="guess the pokemon name..."
              width={["200px", "300px", "300px", "300px"]}
              type="text"
              name="whatname"
              debounceTimeout={1500}
              minLength={2}
              autoComplete={"off"}
            />
          </Box>
        </VStack>
        <Flex
          direction={"column"}
          // mt={["140px", "130px", "130px", "130px"]}
          // mb={["310px", "0px", "0px", "0px"]}
          // right={["0vw", "125px", "10vw", "10vw"]}
          h={["900px", "700px", "550px", "560px"]}
          w={["300px", "400px", "700px", "700px"]}
          top={["0px", "0px", "0px", "0px"]}
          bg={"rgba(0,255,148,0.6)"}
          padding={"20px"}
          border={"2px"}
          borderRadius="8.3"
          position={"relative"}
        >
          <Text fontSize={"xl"} textAlign={"center"}>
            SPECIAL NAMES
          </Text>
          <ul style={{ columns: 2 }}>
            {specialNames.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </Flex>
      </VStack>
    </div>
  )
}
