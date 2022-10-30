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

export const backgroundPkmnType = {
  normal: 'linear-gradient(181.51deg, rgba(115,82,89,0.6) -6.44%, rgba(188,107,124,1) 121.95%, rgba(124,63,76,0.8) 186.11%);',
  fighting: 'linear-gradient(176.83deg, rgba(145, 56, 0, 0.66) -8.78%, rgba(241,97,60,1.0) 169.09%, #CB735D 242.33%);',
  flying: 'linear-gradient(179.75deg, rgba(12, 19, 149, 0.6) -19.96%, rgba(43, 49, 155, 0.7) 43.67%, rgba(112, 117, 217, 0.6) 138.4%)',
  poison: 'linear-gradient(177.03deg, rgba(91,49,132,0.6) -11.97%, rgba(165,100,227,0.6) 71.28%, rgba(206,155,255,0.6) 135.64%)',
  ground: 'linear-gradient(179.75deg, rgba(101, 64, 8, 0.6) -19.96%, rgba(137, 92, 26, 0.8) 43.67%, #D69638 138.4%)',
  rock: 'linear-gradient(177.03deg, rgba(126,126,126,0.6) -11.97%, rgba(141,141,148,0.6) 57.49%, #D3D3D3 135.64%)',
  grass: 'linear-gradient(177.56deg, rgba(98,219,96,0.5) -58.92%, rgba(59,176,57,.6) 16.57%, #AAFFA8 209.53%)',
  ghost: 'linear-gradient(177.03deg, rgba(50,53,105,.6) -11.97%, rgba(69,74,168,.6) 57.49%, #787DDA 135.64%)',
  steel:  'linear-gradient(179.75deg, rgba(94,115,108,1.0) -19.96%, rgba(114,136,129,0.6) 43.67%, #A8A8A8 138.4%)',
  fire: 'linear-gradient(176.37deg, rgba(249,109,111,1.0) -32.26%, rgba(227,88,37,0.6) 22.55%, #E8AE1B 125.72%)',
  water: 'linear-gradient(179.57deg, rgba(19,50,88,1.0) -70.14%, rgba(20,121,251,0.6) 56.16%, #82B2F1 214.85%)',
  bug: 'linear-gradient(178.92deg, rgba(126,198,197,1.0) 0.92%, rgba(171,218,198,0.6) 47.96%, #CAE099 99.08%)',
  electric: 'linear-gradient(177.03deg, rgba(249,208,44,0.6) -11.97%, rgba(249,187,22,0.6) 57.49%, rgba(249,208,44,0.6) 135.64%)',
  psychic: 'linear-gradient(177.03deg, rgba(249,85,135,1.0) -11.97%, rgba(250,192,203,0.6) 57.49%, #FDE6E9 135.64%)',
  ice: 'linear-gradient(177.03deg, rgba(111,190,223,1.0) -11.97%, rgba(100,203,245,0.6) 47.77%, #BDEBFE 136.72%)',
  dragon: 'linear-gradient(179.75deg, rgba(71,138,147,1.0) -19.96%, rgba(86,164,174,0.6) 43.67%, #A2BEC1 138.4%)',
  dark: 'linear-gradient(177.03deg, rgba(3,7,6,1.0) -11.97%, #0D1211 57.49%, rgba(90,94,93,0.6) 135.64%)',
  fairy: 'linear-gradient(179.75deg, rgba(151,27,69,1.0) -19.96%, rgba(194,56,103,0.6) 43.67%, #CD7D98 138.4%)',
  unknown: 'linear-gradient(177.03deg, rgba(140,140,140,1.0) -11.97%,rgba(3,3,3,0.6) 57.49%, #E5E5E5 135.64%)',
  shadow: 'linear-gradient(177.03deg, rgba(0,0,0,1.0) -11.97%, rgba(13,13,13,0.6) 57.49%, #5A5A5A 135.64%)',
}

export default function PrintPkmn({ name, urlimg, children, compare, filter}) {
  const pkmn = FetchPkdxData(name, urlimg, name)
  
  // console.log(backgroundPkmnType[pkmn.pkdx.types[0].type.name])
  return (
    <>
      {name && (
        // className={styles.pkmnevo}
        <Flex
          direction={"column"}
          mt={["140px", "130px", "130px", "130px"]}
          mb={["310px", "0px", "0px", "0px"]}
          right={
            compare
              ? ["0vw", "0vw", "0vw", "0vw"]
              : ["0vw", "125px", "10vw", "10vw"]
          }
          h={["340px", "360px", "360px", "360px"]}
          w={
            compare
              ? ["300px", "300px", "250px", "300px"]
              : ["300px", "260px", "300px", "300px"]
          }
          bg={compare ? "rgba(255, 247, 95, 0.62)" : backgroundPkmnType[pkmn.pkdx.types[0].type.name]}
          // "rgba(0,255,148,0.6)"
          border={"2px"}
          borderRadius="8.3"
          position={"relative"}
        >
          <Image
            width={"300px"}
            height={"100px"}
            position={"absolute"}
            top="-18%"
            // boxSize={"100px"}
            src={"/pokedex-edge-top.svg"}
            alt={name}
            // layout={"fill"}
          ></Image>
          <Image
            width={"300px"}
            height={"100px"}
            position={"absolute"}
            top="85%"
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
              {!filter ? (
                <Heading as="h3" size={"md"}>
                  {name}
                </Heading>
              ) : (
                ""
              )}
              {/* className={styles.pkmnimg} */}
              <Box maxW="md" h={"100px"} w={"200px"}>
                <Image
                  boxSize={"200px"}
                  src={pkmn.pkdx?.sprites?.front_default ?? "/pokedex-icon.png"}
                  alt={name}
                  layout={"fill"}
                  filter={filter && "brightness(0)"}
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
