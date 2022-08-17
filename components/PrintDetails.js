import Image from "next/image"
import styles from "../styles/PrintDetails.module.css"
import useSWR from "swr"
import { fetcher } from "./pokemon"
import { Center, Container, Heading, ListItem, position, Progress, Text, UnorderedList } from "@chakra-ui/react"

function FetchDetails(name, url) {
  const { data, error } = useSWR(name ? `${url}${name}` : null, fetcher)

  return {
    details: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default function PrintDetails({ name, url }) {
  const details = FetchDetails(name, url).details

  const abilities = details?.abilities.map((abilityItem, index) => {
    return <li key={index}>{abilityItem.ability.name}</li>
  })

  const weight = details?.weight / 10 + " Kg"

  const height = details?.height / 10 + " Mt"

  const baseExp = details?.base_experience

  const types = details?.types
    .map((H) => H.type.name)
    .map((W, index) => {
      return <li key={index}>{W}</li>
    })

  const stats = details?.stats.map((statItem, index) => {
    return (
      <>
        <li key={index}>{statItem.stat.name + '--' + statItem.base_stat}</li>
        <Progress colorScheme="blue" size="sm" value={parseInt(statItem.base_stat)} />
      </>
    )
  })

  const movesLevel = details?.moves
    .map((moveItem) => {
      return [
        moveItem.move.name,
        moveItem.version_group_details
          .map((item) => {
            if (
              item.version_group.name === "x-y" &&
              item.move_learn_method.name === "level-up"
            ) {
              return item.level_learned_at
            } else {
              return 0
            }
          })
          .filter((u) => u !== 0),
      ]
    })
    .filter((y) => JSON.stringify(y[1]) !== "[]")
    .map((y) => y.flat())
    .map((q, index) => (
      <li key={index}>{q[0] + "- - " + ((q[1] && q[2]) ?? q[1])}</li>
    ))
  // -----------------------------------------------------------------------------------------
  const movesMachine = details?.moves
    .map((moveItem) => {
      return [
        moveItem.move.name,
        moveItem.version_group_details
          .map((item) => {
            if (
              item.version_group.name === "x-y" &&
              item.move_learn_method.name === "machine"
            ) {
              return item
            } else {
              return 0
            }
          })
          .filter((u) => u !== 0),
      ]
    })
    .filter((y) => JSON.stringify(y[1]) !== "[]")
    .map((t) => t[0])
    .map((q, index) => <li key={index}>{q}</li>)
  // console.log(movesLevel2, name, "level")
  console.log("-----------")
  return (
    <>
      {details && (
        <div className={styles.details}>
          <Container
            bg={"rgba(0,255,148,0.6)"}
            position={"relative"}
            top={"-250px"}
            right={"250px"}
          >
            <Heading as={"h3"} fontSize={"lg"} textAlign={"center"}>
              Details
            </Heading>
            <Heading as={"h3"} fontSize={"sm"}>
              Types:
            </Heading>
            <Text textAlign={"center"}>{<ul>{types}</ul>}</Text>

            <Heading as={"h3"} fontSize={"sm"}>
              Abilities:
            </Heading>
            <Text textAlign={"center"}>{<ul>{abilities}</ul>}</Text>

            <Heading as={"h3"} fontSize={"sm"}>
              Weight:
            </Heading>
            <Text textAlign={"center"}>{weight}</Text>

            <Heading as={"h3"} fontSize={"sm"}>
              Height:
            </Heading>
            <Text textAlign={"center"}>{height}</Text>

            <Heading as={"h3"} fontSize={"sm"}>
              Base Exp:
            </Heading>
            <Text textAlign={"center"}>{baseExp}</Text>
          </Container>
          {/* ------------------------ */}
          <Container
            bg={"rgba(0,255,148,0.6)"}
            position={"relative"}
            top={"-550px"}
            left={"250px"}
            h="300px"
            maxW={"390px"}
          >
            <div className={styles.stats}>
              <Heading as={"h3"} fontSize={"lg"} textAlign="center">
                Stats
              </Heading>
              <Text fontSize={"xs"}>{stats}</Text>
            </div>
          </Container>
          {/* ----------------- */}
          <Container
            bg={"rgba(0,255,148,0.6)"}
            position={"relative"}
            top={"-500px"}
            left={"250px"}
            h="300px"
            maxW={"390px"}
          >
            <Heading as={"h3"} fontSize={"lg"} textAlign="center">
              Moves Level
            </Heading>
            <Text fontSize={"xs"}>{movesLevel}</Text>
          </Container>
          {/* ------------------- */}
          <Container
            bg={"rgba(0,255,148,0.6)"}
            position={"relative"}
            top={"-800px"}
            right={"250px"}
            h="300px"
            maxW={"390px"}
          >
            <Heading as={"h3"} fontSize={"lg"} textAlign="center">
              Moves Machine
            </Heading>
            <Text fontSize={"xs"}>
              <ul style={{listStyleType:'none',columns:'2'}} >{movesMachine}</ul>
            </Text>
          </Container>
        </div>
      )}
    </>
  )
}
