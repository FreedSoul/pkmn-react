import styles from "../styles/Home.module.css"
import { useState, useRef } from "react"
import PrintPkmn from "../components/PrintPkmn"
import PrintDetails from "../components/PrintDetails"
import { DebounceInput } from "react-debounce-input"
import FetchPkdxData from "../components/FetchPkdxData"
import Link from "next/link"
import { RiAddCircleLine } from "react-icons/ri"
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Hide,
  HStack,
  Image,
  Input,
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

  const [showSlot, setShowSlot] = useState(true)
  const [showSlot2, setShowSlot2] = useState(false)
  const [showSlot3, setShowSlot3] = useState(false)

  return (
    <div className={"Te-UBICO-compare-solito"}>
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
          border={'2px'}
          borderColor={'white'}
          padding={"30px"}
        >
          Let&lsquo;s compare some Pokemons!
        </Heading>
      </Center>
      {/* <Center> */}
      <Show breakpoint="(max-width: 767px)">
        <Tabs
          isFitted
          variant="enclosed"
          onChange={(index) => setTabIndex(index)}
          bg={bg}
          mt={'10px'}
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
                <Button border={"1px"} onClick={() => setShowSlot(!showSlot)}>
                  {showSlot
                    ? "click to hide this Slot"
                    : "click to add this Slot"}
                </Button>
                {showSlot ? <CompareSlot show={showSlot}></CompareSlot> : ""}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack>
                <Button border={"1px"} onClick={() => setShowSlot2(!showSlot2)}>
                  {showSlot2
                    ? "click to hide this Slot"
                    : "click to add this Slot"}
                </Button>
                {showSlot2 ? <CompareSlot show={showSlot2}></CompareSlot> : ""}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack>
                <Button border={"1px"} onClick={() => setShowSlot3(!showSlot3)}>
                  {showSlot3
                    ? "click to hide this Slot"
                    : "click to add this Slot"}
                </Button>
                {showSlot3 ? <CompareSlot show={showSlot3}></CompareSlot> : ""}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Show>
      <Hide breakpoint="(max-width: 767px)">
        <Flex
          direction={["column", "column", "row", "row"]}
          justify={"space-around"}
          pt={"5px"}
        >
          {/* <VStack
            mt={["130px", "130px", "90px"]}
            bg="rgba(0,255,148,0.6)"
            height={["850px", "500px", "900px", "900px"]}
            padding={"1vw"}
          >
            <Box
              padding={"8px"}
              bg={"rgba(0, 229, 201, 0.73)"}
              position="relative"
              top={"-60px"}
              borderRadius={"5px"}
            >
              <Input
                as={DebounceInput}
                value={compare1}
                onChange={(event) => setCompare1(event.target.value)}
                variant={"filled"}
                bg="rgba(0,255,148,0.6)"
                zIndex={"1"}
                border={"2px"}
                borderColor={"black"}
                focusBorderColor={"black"}
                color={"black"}
                position={"static"}
                // right={["10vw", "10vw", "10vw", "10vw"]}
                top={"-60px"}
                size={["xs", "sm", "sm"]}
                fontSize={["sm", "sm"]}
                placeholder="enter a pokemon name..."
                width={["180px", "230px", "300px"]}
                type="text"
                name="pkname"
                debounceTimeout={500}
                minLength={2}
              />
            </Box>
            <PrintPkmn name={compare1} urlimg={url} compare>
              <PrintDetails name={compare1} url={url} compare />
            </PrintPkmn>
          </VStack> */}
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

          {/* <VStack
          mt={["100px", "130px", "90px"]}
          bg="rgba(0,255,148,0.6)"
          height={["850px", "500px", "900px", "900px"]}
          padding={"1vw"}
        >
          <Box
            padding={"8px"}
            bg={"rgba(0, 229, 201, 0.73)"}
            position="relative"
            top={"-60px"}
            borderRadius={"5px"}
          >
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
              position={"static"}
              // right={["10vw", "10vw", "10vw", "10vw"]}
              top={"-60px"}
              size={["xs", "sm", "sm"]}
              fontSize={["sm", "sm"]}
              placeholder="enter a pokemon name..."
              width={["180px", "230px", "300px"]}
              type="text"
              name="pkname"
              debounceTimeout={500}
              minLength={2}
            />
          </Box>
          <PrintPkmn name={compare2} urlimg={url} compare>
            <PrintDetails name={compare2} url={url} compare={true} />
          </PrintPkmn>
        </VStack>
        <VStack
          mt={["100px", "130px", "90px"]}
          bg="rgba(0,255,148,0.6)"
          height={["850px", "500px", "900px", "900px"]}
          padding={"1vw"}
        >
          <Box
            padding={"8px"}
            bg={"rgba(0, 229, 201, 0.73)"}
            position="relative"
            top={"-60px"}
            borderRadius={"5px"}
          >
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
              position={"static"}
              // right={["10vw", "10vw", "10vw", "10vw"]}
              top={"-60px"}
              size={["xs", "sm", "sm"]}
              fontSize={["sm", "sm"]}
              placeholder="enter a pokemon name..."
              width={["180px", "230px", "300px"]}
              type="text"
              name="pkname"
              debounceTimeout={500}
              minLength={2}
            />
          </Box>
          <PrintPkmn name={compare3} urlimg={url} compare>
            <PrintDetails name={compare3} url={url} compare />
          </PrintPkmn>
        </VStack> */}
        </Flex>
      </Hide>
      {/* </Center> */}
    </div>
  )
}
