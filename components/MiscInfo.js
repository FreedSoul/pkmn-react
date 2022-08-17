import { Container, Heading } from "@chakra-ui/react"

export default function MiscInfo({ details }) {
  // const details = FetchDetails(name, url).details

  const types = details?.types
    .map((H) => H.type.name)
    .map((W, index) => {
      return <li key={index}>{W}</li>
    })

  const abilities = details?.abilities.map((abilityItem, index) => {
    return <li key={index}>{abilityItem.ability.name}</li>
  })

  const weight = details?.weight / 10 + " Kg"

  const height = details?.height / 10 + " Mt"

  const baseExp = details?.base_experience

  return (
    <>
      <Container
        bg={"rgba(0,255,148,0.6)"}
        position={"relative"}
        top={"-250px"}
        right={"250px"}
        h="300px"
        border={"2px"}
        borderRadius="8.3"
      >
        <Heading as={"h3"} fontSize={"lg"} textAlign={"center"}>
          Details
        </Heading>
        <Heading as={"h3"} fontSize={"sm"}>
          Types:
        </Heading>
        <div>{types}</div>

        <Heading as={"h3"} fontSize={"sm"}>
          Abilities:
        </Heading>
        <div>{abilities}</div>

        <Heading as={"h3"} fontSize={"sm"}>
          Weight:
        </Heading>
        <div>{<li>{weight}</li>}</div>

        <Heading as={"h3"} fontSize={"sm"}>
          Height:
        </Heading>
        <div>
          <li>{height}</li>
        </div>

        <Heading as={"h3"} fontSize={"sm"}>
          Base Exp:
        </Heading>
        <div>
          <li>{baseExp}</li>
        </div>
      </Container>
    </>
  )
}