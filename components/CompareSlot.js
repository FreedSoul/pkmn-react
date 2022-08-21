import { useState } from "react"
import PrintPkmn from "../components/PrintPkmn"
import PrintDetails from "../components/PrintDetails"
import { DebounceInput } from "react-debounce-input"
import Link from "next/link"
import { RiAddCircleLine } from "react-icons/ri"
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react"

export default function CompareSlot({ show }) {
  const [compare1, setCompare1] = useState("bulbasaur")

  const url = `https://pokeapi.co/api/v2/pokemon/`

  return (
    <div className={"Te-UBICO-COMPAREsLOT"}>
      {/* <Center> */}

      <VStack
        mt={["100px", "100px", "90px"]}
        // bg="rgba(0,255,148,0.6)"
        height={["850px", "900px", "900px", "900px"]}
        width={["400px", "70vw", "33vw", "30vw"]}
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
        {show ? (
          <PrintPkmn name={compare1} urlimg={url} compare>
            <PrintDetails name={compare1} url={url} compare />
          </PrintPkmn>
        ) : (
          <RiAddCircleLine></RiAddCircleLine>
        )}
      </VStack>
    </div>
  )
}
