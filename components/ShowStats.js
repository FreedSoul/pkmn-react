import { Box, Container, Heading, HStack, Progress, Spacer } from "@chakra-ui/react"



export default function MiscInfo({ details }) {
  // const details = FetchDetails(name, url).details

  const stats = details?.stats.map((statItem, index) => {
    return (
      <li key={index}>
        <HStack>
          <Box padding={"3px"}>{statItem.stat.name}</Box>
          <Spacer />
          <Box>{statItem.base_stat}</Box>
        </HStack>
        <Box>
          <Progress
            colorScheme="blue"
            size="sm"
            value={parseInt(statItem.base_stat)}
          />
        </Box>
      </li>
    )
  })

 
    return (
      <>
        <Container
          bg={"rgba(0,255,148,0.6)"}
          position={"relative"}
          top={"-550px"}
          left={"250px"}
          h="300px"
          maxW={"390px"}
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