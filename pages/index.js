import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState, useRef } from "react"
import Pokemon from "../components/pokemon"
import { DebounceInput } from "react-debounce-input"
import Link from "next/link"
import { MdCompare } from "react-icons/md"
import { Flex, Heading, Stack, Box, Spacer,Input, VStack,Image } from "@chakra-ui/react"

export default function Home() {

  const [pkname, setPkname] = useState('')

  const url = `https://pokeapi.co/api/v2/pokemon/`
  // const hola = useRef()

  const handleNewPkmn = (name) => {
    setPkname(name)
  }

  return (
    <>
      <Flex>
        <Box
          p="2"
          ml="25px"
          borderRadius={"5px"}
          width="140px"
          bg={"red.500"}
          border={"2px"}
          borderColor={"white"}
        >
          <Link href="/whatpkmn">
            <a>what&lsquo;s that pokemon?</a>
          </Link>
        </Box>
        <Spacer />
        <Box
          p="2"
          mr="25px"
          borderRadius={"5px"}
          width="150px"
          bg={"blue.500"}
          border={"2px"}
          borderColor={"white"}
        >
          <Link href="/compare">
            <a>
              let&lsquo;s compare pokemons!
            </a>
          </Link>
        </Box>
      </Flex>
      <VStack>
        <Heading
          as={"h2"}
          zIndex={"1"}
          mt={["30px", "20px"]}
          fontSize={["20px", "25px", "30px"]}
        >
          The Pokedex App
        </Heading>

        {/* <form className={styles.form} onSubmit={handleSubmit}> */}
        <Input
          as={DebounceInput}
          value={pkname}
          onChange={(event) => setPkname(event.target.value)}
          variant={"filled"}
          bg="rgba(0,255,148,0.6)"
          zIndex={"1"}
          border={"2px"}
          borderColor={"black"}
          focusBorderColor="black"
          color={"black"}
          position={"relative"}
          right={["16vw", "10vw", "10vw", "9vw"]}
          top={"20px"}
          size={["xs", "sm", "sm"]}
          fontSize={["sm", "sm"]}
          placeholder="enter a pokemon name..."
          width={["180px", "230px", "300px"]}
          type="text"
          name="pkname"
          debounceTimeout={500}
          minLength={2}
        />
        <Image
          width={"100%"}
          height={"150px"}
          position={"absolute"}
          top="120px"
          src={"/fut-frame.svg"}
          alt={"frame"}
          // layout={"fill"}
        ></Image>
      </VStack>
      {/* <DebounceInput
          value={pkname}
          onChange={(event) => setPkname(event.target.value)}
          // onSubmit={ref.fieldName.value=""}
          type="text"
          name="pkname"
          // ref={hola}
          debounceTimeout={10000}
          minLength={2}
        /> */}
      {/* </form> */}
      <Pokemon
        name={pkname !== "" ? pkname : "bulbasaur"}
        url={url}
        newSearch={handleNewPkmn}
      />
    </>
  )
}
