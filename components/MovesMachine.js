import {
  Box,
  Container,
  Heading,
  HStack,
  Progress,
  Spacer,
} from "@chakra-ui/react"

export default function movesMachine({ details }) {
  // const details = FetchDetails(name, url).details

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

  return (
    <>
      <Container
        bg={"rgba(0,255,148,0.6)"}
        // position={"absolute"}
        // top={"-40px"}
        // left={"250px"}
        // mt="110"
        position={"static"}
        h="fit-content"
        w={["250px", "230px", "250px", "250px"]}
        border={"2px"}
        borderRadius="8.3"
      >
        <Heading as={"h3"} fontSize={"lg"} textAlign="center">
          Moves Machine
        </Heading>
        <Box fontSize={"12px"}>
          <ul style={{ listStyleType:'circle',columns: "3" }}>
            {movesMachine}
          </ul>
        </Box>
      </Container>
    </>
  )
}
