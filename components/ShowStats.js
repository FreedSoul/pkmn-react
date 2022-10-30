import {
  Box,
  Container,
  Heading,
  HStack,
  Progress,
  Spacer,
  chakra,
} from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"
import {backgroundPkmnType} from './BgColors'

export default function MiscInfo({ details,type }) {
  // const details = FetchDetails(name, url).details
  console.log(type)
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  })

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
      <ChakraBox
        animate={{
          x: "0px",
          opacity: [0, 1],
        }}
        initial={{
          x: "-400px",
        }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          opacity: [0, 0.4, 0.4, 0.7, 1],
        }}
        padding={"10px"}
        bg={backgroundPkmnType[type]??"whiteAlpha.700"}
        h="fit-content"
        minH={"360px"}
        w={["300px", "300px", "250px", "350px"]}
        border={"2px"}
        borderRadius="8.3"
      >
        <div>
          <Heading as={"h3"} fontSize={"lg"} textAlign="center">
            Stats
          </Heading>
          <div>{stats}</div>
        </div>
      </ChakraBox>
    </>
  )
}
