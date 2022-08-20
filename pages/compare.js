import styles from "../styles/Home.module.css"
import { useState, useRef } from "react"
import PrintPkmn from "../components/PrintPkmn"
import PrintDetails from "../components/PrintDetails"
import { DebounceInput } from "react-debounce-input"
import FetchPkdxData from "../components/FetchPkdxData"
import Link from "next/link"
import { RiAddCircleLine } from "react-icons/ri"
import {
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react"

export default function Compare() {
  const [compare1, setCompare1] = useState("bulbasaur")
  const [compare2, setCompare2] = useState("")
  const [compare3, setCompare3] = useState("")

  const url = `https://pokeapi.co/api/v2/pokemon/`
  // const hola = useRef()
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  // }

  return (
    <div className={styles.container}>
      <Link href="/whatpkmn">
        <a>what&lsquo;s that pokemon?</a>
      </Link>
      <Link href="/">
        <a>The pokedex</a>
      </Link>
      <h1>lets compare some pokemons!</h1>

      {/* <DebounceInput
        value={compare1}
        onChange={(event) => setCompare1(event.target.value)}
        type="text"
        name="pkname"
        debounceTimeout={500}
        minLength={2}
      />
      <RiAddCircleLine w={6} h={6} />

      <PrintPkmn name={compare1} urlimg={url}>
        <PrintDetails name={compare1} url={url} />
      </PrintPkmn> */}
      <Center>
        <Heading
          as={"h2"}
          color={"black"}
          zIndex={"1"}
          mt={["30px", "20px"]}
          fontSize={["15px", "15px", "20px"]}
        >
          let&lsquo;s compare some pokemons!
        </Heading>
      </Center>
      <Center>
        <Flex direction={["column", "column", "row", "row"]}>
          <VStack mt={["100px", "130px", "90px"]}>
            {/* <form className={styles.form} onSubmit={handleSubmit}> */}
            <Input
              as={DebounceInput}
              value={compare1}
              onChange={(event) => setCompare1(event.target.value)}
              variant={"filled"}
              bg="rgba(0,255,148,0.6)"
              zIndex={"1"}
              border={"2px"}
              borderColor={"black"}
              focusBorderColor="black"
              color={"black"}
              position={"relative"}
              // right={["10vw", "10vw", "10vw", "10vw"]}
              // top={"20px"}
              size={["xs", "sm", "sm"]}
              fontSize={["sm", "sm"]}
              placeholder="enter a pokemon name..."
              width={["180px", "230px", "300px"]}
              type="text"
              name="pkname"
              debounceTimeout={500}
              minLength={2}
            />

            {/* <Center> */}
            {/* serached pkmn */}
            <PrintPkmn name={compare1} urlimg={url} compare>
              <PrintDetails name={compare1} url={url} compare={true} />
            </PrintPkmn>
            {/* </Center> */}
          </VStack>
          <VStack mt={["500px", "130px", "90px"]}>
            {/* <form className={styles.form} onSubmit={handleSubmit}> */}
            <Input
              as={DebounceInput}
              value={compare2}
              onChange={(event) => setCompare2(event.target.value)}
              variant={"filled"}
              bg="rgba(0,255,148,0.6)"
              zIndex={"1"}
              border={"2px"}
              borderColor={"black"}
              focusBorderColor="black"
              color={"black"}
              position={"relative"}
              // right={["10vw", "10vw", "10vw", "10vw"]}
              // top={"20px"}
              size={["xs", "sm", "sm"]}
              fontSize={["sm", "sm"]}
              placeholder="enter a pokemon name..."
              width={["180px", "230px", "300px"]}
              type="text"
              name="pkname"
              debounceTimeout={500}
              minLength={2}
            />

            <PrintPkmn name={compare2} urlimg={url} compare>
              <PrintDetails name={compare2} url={url} compare={true} />
            </PrintPkmn>
          </VStack>
          <VStack mt={["500px", "130px", "90px"]}>
            <Input
              as={DebounceInput}
              value={compare3}
              onChange={(event) => setCompare3(event.target.value)}
              variant={"filled"}
              bg="rgba(0,255,148,0.6)"
              zIndex={"1"}
              border={"2px"}
              borderColor={"black"}
              focusBorderColor="black"
              color={"black"}
              position={"relative"}
              // right={["10vw", "10vw", "10vw", "10vw"]}
              // top={"20px"}
              size={["xs", "sm", "sm"]}
              fontSize={["sm", "sm"]}
              placeholder="enter a pokemon name..."
              width={["180px", "230px", "300px"]}
              type="text"
              name="pkname"
              debounceTimeout={500}
              minLength={2}
            />

            {/* <Center> */}
            {/* serached pkmn */}
            <PrintPkmn name={compare3} urlimg={url} compare>
              <PrintDetails name={compare3} url={url} compare />
            </PrintPkmn>
            {/* </Center> */}
          </VStack>
        </Flex>
      </Center>
    </div>
  )
}
