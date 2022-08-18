import {
  Box,
  Container,
  Heading,
  HStack,
  Progress,
  Spacer,
} from "@chakra-ui/react"

export default function MovesLevel({ details }) {
  // const details = FetchDetails(name, url).details
  
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
    .sort((a, b) => a[1] - b[1])
    .map((q, index) => (
      <Box fontSize={'sm'} key={index}>
          <HStack>
            <Box>{q[0]}</Box>
            <Spacer />
            <Box>
              {(q[1] && q[2]) ?? q[1]}
            </Box> 
          </HStack>
      </Box>
    ))


  return (
    <>
      <Container
        bg={"rgba(0,255,148,0.6)"}
        position={"absolute"}
        top={"-40px"}
        left={"250px"}
        h="fit-content"
        maxW={"390px"}
        border={"2px"}
        borderRadius="8.3"
      >
        <Heading as={"h3"} fontSize={"lg"} textAlign="center">
          Moves Level
        </Heading>
        <div>{movesLevel}</div>
      </Container>
    </>
  )
}
