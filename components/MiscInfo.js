import {
  Box,
  Center,
  Container,
  Heading,
  ListItem,
  Text,
} from "@chakra-ui/react"
import { GiWeightScale } from "react-icons/gi"
import { CgFormatLineHeight } from "react-icons/cg"
import { BiIntersect } from "react-icons/bi"
import { TbHierarchy2 } from "react-icons/tb"

export default function MiscInfo({ details }) {
  // const details = FetchDetails(name, url).details

  const types = details?.types
    .map((H) => H.type.name)
    .map((W, index) => {
      return (
        <Box
          padding={1}
          bg={"green"}
          borderTopRightRadius={"16"}
          borderBottomLeftRadius={'16'}
          key={index}
        >
          {W}
        </Box>
      )
    })

  const abilities = details?.abilities.map((abilityItem, index) => {
    return (
      <Box
        m='0.5'
        padding={'1'}
        bg={"green"}
        borderTopRightRadius={"16"}
        borderBottomLeftRadius={"16"}
        key={index}
      >
        {abilityItem.ability.name}
      </Box>
    )
  })

  const weight = details?.weight / 10 + " Kg"

  const height = details?.height / 10 + " Mts"

  const baseExp = details?.base_experience

  return (
    <>
      <Container
        bg={"rgba(0,255,148,0.6)"}
        // position={"relative"}
        // top={"-40px"}
        // left={"250px"}
        // mt="110"
        w={["300px", "250px", "250px", "350px"]}
        h="fit-content"
        border={"2px"}
        borderRadius="8.3"
      >
        <Heading as={"h3"} fontSize={"lg"} textAlign={"center"}>
          Details
        </Heading>
        <Heading as={"h3"} fontSize={"sm"}>
          Types:
          <BiIntersect/>
        </Heading>
        {/* <div>{types}</div> */}
        <Center>{types}</Center>
        <Heading as={"h3"} fontSize={"sm"}>
          Abilities:
          <TbHierarchy2/>
        </Heading>
        {/* <div>{abilities}</div> */}
        <Center flexDirection={"column"}>{abilities}</Center>
        <Heading as={"h3"} fontSize={"sm"}>
          Weight:
          <GiWeightScale />
        </Heading>
        {/* <li>{weight}</li> */}
        <Text textAlign={"center"} padding={1}>
          {weight}
        </Text>
        <Heading as={"h3"} fontSize={"sm"}>
          Height:
          <CgFormatLineHeight></CgFormatLineHeight>
        </Heading>
        <div>
          {/* <li>{height}</li> */}
          <Text textAlign={"center"} padding={1}>
            {height}
          </Text>
        </div>

        <Heading as={"h3"} fontSize={"sm"}>
          Base Exp:
        </Heading>
        <div>
          {/* <li>{baseExp}</li> */}
          <Text textAlign={"center"} padding={1}>
            {baseExp}
          </Text>
        </div>
      </Container>
    </>
  )
}
