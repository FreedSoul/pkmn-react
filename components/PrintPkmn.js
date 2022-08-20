import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import FetchPkdxData from "./FetchPkdxData"

export default function PrintPkmn({ name, urlimg, children, compare }) {
  const pkmn = FetchPkdxData(name, urlimg, name)
  return (
    <>
      {name && (
        // className={styles.pkmnevo}
        <Flex
          direction={"column"}
          mt={["140px", "130px", "130px"]}
          mb={["310px", "0px", "0px"]}
          right={compare ? ["0vw", "20vw", "0vw"] : ["0vw", "24vw", "10vw"]}
          h={"260px"}
          w={"250px"}
          bg="rgba(0,255,148,0.6)"
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
            alt={name}
            // layout={"fill"}
          ></Image>
          <Image
            width={"300px"}
            height={"100px"}
            position={"absolute"}
            top="210px"
            src={"/pokedex-edge-bot.svg"}
            alt={name}
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
              <Heading as="h3" size={"md"}>
                {name}
              </Heading>
              {/* className={styles.pkmnimg} */}
              <Box maxW="md" h={"100px"} w={"100px"}>
                <Image
                  boxSize={"100px"}
                  src={pkmn.pkdx?.sprites?.front_default ?? "/pokedex-icon.png"}
                  alt={name}
                  layout={"fill"}
                ></Image>
              </Box>
            </Flex>
          </Center>
          {children}
        </Flex>
      )}
    </>
  )
}
