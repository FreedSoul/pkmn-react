import { useState} from "react"
import Link from "next/link"
import { RiAddCircleLine } from "react-icons/ri"
import { BiMinusCircle } from "react-icons/bi"

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Hide,
  Show,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import CompareSlot from "../components/CompareSlot"

export default function Compare() {
  const colors = useColorModeValue(
    [
      "rgba(6, 60, 255, 0.43)",
      "rgba(0, 161, 145, 0.56)",
      "rgba(194, 31, 18, 0.39)",
    ],
    ["red.900", "teal.900", "blue.900"]
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]

  const [showSlot, setShowSlot] = useState(false)
  const [showSlot2, setShowSlot2] = useState(true)
  const [showSlot3, setShowSlot3] = useState(false)

  return (
    <div>
      <Flex>
        <Box
          p="2"
          ml="15px"
          borderRadius={"5px"}
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
          mr="15px"
          borderRadius={"5px"}
          width="140px"
          bg={"blue.500"}
          border={"2px"}
          borderColor={"white"}
        >
          <Link href="/whatpkmn">
            <a>what&lsquo;s that pokemon?</a>
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
          Let&lsquo;s compare some Pokemons!
        </Heading>
      </Center>
      <Show breakpoint="(max-width: 768px)">
        <Tabs
          isFitted
          variant="enclosed"
          onChange={(index) => setTabIndex(index)}
          bg={bg}
          mt={"10px"}
        >
          <TabList mb="1em">
            <Tab
              color={"white"}
              _selected={{ color: "white", bg: "rgba(27, 27, 27, 0.5)" }}
            >
              pkmn One
            </Tab>
            <Tab
              color={"white"}
              _selected={{ color: "white", bg: "rgba(27, 27, 27, 0.5)" }}
            >
              pkmn Two
            </Tab>
            <Tab
              color={"white"}
              _selected={{ color: "white", bg: "rgba(27, 27, 27, 0.5)" }}
            >
              pkmn Three
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack>
                <Button
                  border={"1px"}
                  onClick={() => setShowSlot(!showSlot)}
                  leftIcon={!showSlot ? <RiAddCircleLine /> : <BiMinusCircle />}
                >
                  {showSlot ? "Delete Slot" : "Add Slot"}
                </Button>
                {showSlot ? <CompareSlot show={showSlot}></CompareSlot> : ""}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack>
                <Button
                  border={"1px"}
                  onClick={() => setShowSlot2(!showSlot2)}
                  leftIcon={!showSlot ? <RiAddCircleLine /> : <BiMinusCircle />}
                >
                  {showSlot2 ? "Delete Slot" : "Add Slot"}
                </Button>
                {showSlot2 ? <CompareSlot show={showSlot2}></CompareSlot> : ""}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack>
                <Button
                  border={"1px"}
                  onClick={() => setShowSlot3(!showSlot3)}
                  leftIcon={!showSlot ? <RiAddCircleLine /> : <BiMinusCircle />}
                >
                  {showSlot3 ? "Delete Slot" : "Add Slot"}
                </Button>
                {showSlot3 ? <CompareSlot show={showSlot3}></CompareSlot> : ""}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Show>
      <Hide breakpoint="(max-width: 768px)">
        <Flex
          direction={["column", "column", "row", "row"]}
          justify={"space-around"}
          pt={"5px"}
        >
          <VStack>
            <Button border={"1px"} onClick={() => setShowSlot(!showSlot)}>
              {showSlot ? "click to hide this Slot" : "click to add this Slot"}
            </Button>
            {showSlot ? <CompareSlot show={showSlot}></CompareSlot> : ""}
          </VStack>
          <VStack>
            <Button border={"1px"} onClick={() => setShowSlot2(!showSlot2)}>
              {showSlot2 ? "click to hide this Slot" : "click to add this Slot"}
            </Button>
            {showSlot2 ? <CompareSlot show={showSlot2}></CompareSlot> : ""}
          </VStack>
          <VStack>
            <Button border={"1px"} onClick={() => setShowSlot3(!showSlot3)}>
              {showSlot3 ? "click to hide this Slot" : "click to add this Slot"}
            </Button>
            {showSlot3 ? <CompareSlot show={showSlot3}></CompareSlot> : ""}
          </VStack>
        </Flex>
      </Hide>
    </div>
  )
}
