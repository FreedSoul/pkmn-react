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

export default function movesMachine({ details }) {
  // const details = FetchDetails(name, url).details
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  })

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
      <ChakraBox
        h="fit-content"
        w={["300px", "300px", "250px", "350px"]}
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
        bg={"rgba(0,255,148,0.6)"}
        border={"2px"}
        borderRadius="8.3"
        padding={'10px'}
      >
        <Heading as={"h3"} fontSize={"lg"} textAlign="center">
          Moves Machine
        </Heading>
        <Box fontSize={"12px"}>
          <ul style={{ listStyleType: "circle", columns: "3" }}>
            {movesMachine}
          </ul>
        </Box>
      </ChakraBox>
    </>
  )
}
