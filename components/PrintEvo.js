import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import FetchPkdxData from "./FetchPkdxData"

export default function PrintEvo(props) {
  const pkmn = FetchPkdxData(props.name, props.urlimg, props.name)
  const pruebaName = props.name
  console.log(props.name)
  return (
    <>
      {props.name && (
        <Flex
          direction={"column"}
          mt="160px"
          h={"180px"}
          w={"250px"}
          bg="rgba(250,255,0,0.54)"
          border={"2px"}
          borderRadius="8.3"
          position={"relative"}
        >
          <Image
            width={"300px"}
            height={"100px"}
            position={"absolute"}
            top="-60px"
            // boxSize={"100px"}
            src={"/pokedex-edge-top.svg"}
            alt={props.name}
            // layout={"fill"}
          ></Image>
          <Image
            width={"300px"}
            height={"100px"}
            position={"absolute"}
            top="130px"
            src={"/pokedex-edge-bot.svg"}
            alt={props.name}
            // layout={"fill"}
          ></Image>
          <Center>
            <Flex
              alignItems={"center"}
              direction={"column"}
              w="100px"
              h="100px"
              mt={10}
            >
              <Button
                size={"md"}
                textDecorationLine={"underline"}
                color={"blue"}
                onClick={() => props.newSearch(pruebaName)}
              >
                {props.name}
              </Button>
              {/* className={styles.pkmnimg} */}
              <Box maxW="md" h={"100px"} w={"100px"}>
                <Image
                  boxSize={"100px"}
                  src={pkmn.pkdx?.sprites?.front_default ?? "/pokedex-icon.png"}
                  alt={props.name}
                  layout={"fill"}
                ></Image>
              </Box>
            </Flex>
          </Center>
          {/* {children} */}
        </Flex>
      )}
    </>
  )
}
