import { Box, Button, Center, Container, Flex, Heading, HStack, Image,Text, VStack } from "@chakra-ui/react"
// import Image from "next/image"
import styles from "../styles/PrintPkmn.module.css"
import {TbListDetails} from 'react-icons/tb'
import {ImStatsBars} from 'react-icons/im'
import { CgArrowUpR } from "react-icons/cg"
import { GiCompactDisc } from "react-icons/gi"
import FetchPkdxData from "./FetchPkdxData"


export default function PrintPkmn({ name, urlimg, children }) {
  const pkmn = FetchPkdxData(name,urlimg,name)
  return (
    <>
      {name && (
        // className={styles.pkmnevo}
        <Flex
          direction={"column"}
          mt="20"
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
          <HStack justifyContent="space-around" mt={5} >
            <VStack direction={'column'} >
              <Button h={"30px"} w="30px" bg={"white"}>
                <Text fontSize="md">
                  <TbListDetails fontSize={"xl"}></TbListDetails>
                </Text>
              </Button>
              <Text fontSize="xs">Details</Text>
            </VStack >
            <VStack direction={'column'}>
              <Button h={"30px"} w="30px" bg={"white"}>
                  <Text fontSize="md">
                    <ImStatsBars></ImStatsBars>
                  </Text>
              </Button>
              <Text fontSize="xs">Stats</Text>
            </VStack>
            <VStack direction={"column"}>
              <Button h={"30px"} w="30px" bg={"white"}>
                <Text fontSize="md">
                  <CgArrowUpR></CgArrowUpR>
                </Text>
              </Button>
              <Text fontSize="xs">Level</Text>
            </VStack>
            <VStack direction={"column"}>
              <Button h={"30px"} w="30px" bg={"white"}>
                <Text fontSize="md">
                  <GiCompactDisc></GiCompactDisc>
                </Text>
              </Button>
              <Text fontSize="xs">machine</Text>
            </VStack>
          </HStack>
          {children}
        </Flex>
      )}
    </>
  )
}
