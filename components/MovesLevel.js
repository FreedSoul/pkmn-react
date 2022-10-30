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

export default function MovesLevel({ details,type }) {
  // const details = FetchDetails(name, url).details
  console.log(type)
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
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
    .sort((a, b) => a[1] - b[1])
    .map((q, index) => (
      <Box fontSize={'xs'} key={index}>
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
      <ChakraBox
        animate={{
          // scale: [1, 1, 1, 1, 1],
          x: "0px",
          opacity: [0,1],
          // duration: 7,
        }}
        initial={{
          x:'-400px',
        }}
        transition={{
          // duration: 0.5,
          type:"spring",
          ease: "easeInOut",
          opacity: [0,0.4,0.4,0.7,1],
          
        }}
        bg={backgroundPkmnType[type]??"whiteAlpha.700"}
        h="fit-content"
        // h={["340px", "360px", "360px", "360px"]}
        w={["300px", "300px", "250px", "350px"]}
        border={"2px"}
        borderRadius="8.3"
        padding={'10px'}
      >
        <Heading as={"h3"} fontSize={"lg"} textAlign="center">
          Moves Level
        </Heading>
        <div>{movesLevel}</div>
      </ChakraBox>
    </>
  )
}
