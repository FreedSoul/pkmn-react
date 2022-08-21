import { Box, Container, Heading, HStack, Progress, Spacer } from "@chakra-ui/react"



export default function MiscInfo({ details }) {
  // const details = FetchDetails(name, url).details

  const stats = details?.stats.map((statItem, index) => {
    return (
      <Box key={index} padding={"6px"}>
        <HStack>
          <Box>{statItem.stat.name}</Box>
          <Spacer />
          <Box>{statItem.base_stat}</Box>
        </HStack>
        <Box>
          <Progress
            colorScheme="blue"
            size="md"
            value={parseInt(statItem.base_stat)}
          />
        </Box>
      </Box>
    )
  })

 
    return (
      <>
        <Container
          bg={"rgba(0,255,148,0.6)"}
          // position={"absolute "}
          // top={"-40px"}
          // left={"250px"}
          // mt="110"
          h="fit-content"
          minH={'360px'}
          w={["300px", "250px", "250px", "350px"]}
          border={"2px"}
          borderRadius="8.3"
        >
          <div>
            <Heading as={"h3"} fontSize={"lg"} textAlign="center">
              Stats
            </Heading>
            <div>{stats}</div>
          </div>
        </Container>
      </>
    )
}