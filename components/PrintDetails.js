import Image from "next/image"
import styles from "../styles/PrintDetails.module.css"
import useSWR from "swr"
import { fetcher } from "./pokemon"
import { Box, Center, Container, Heading, HStack, ListItem, Progress, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react"
import MiscInfo from './MiscInfo'
import ShowStats from './ShowStats'
import MovesLevel from "./MovesLevel"
import MovesMachine from "./MovesMachine"

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

  // const abilities = details?.abilities.map((abilityItem, index) => {
  //   return (
  //     <li key={index}>
  //       {abilityItem.ability.name}
  //     </li>
  //   )
  // })

  // const weight = details?.weight / 10 + " Kg"

  // const height = details?.height / 10 + " Mt"

  // const baseExp = details?.base_experience

  // const types = details?.types
  //   .map((H) => H.type.name)
  //   .map((W, index) => {
  //     return <li key={index}>{W}</li>
  //   })

  // const stats = details?.stats.map((statItem, index) => {
  //   return (
  //       <li key={index}>
  //         <HStack>
  //           <Box padding={"3px"}>
  //             {statItem.stat.name}
  //           </Box>
  //           <Spacer />
  //           <Box>{statItem.base_stat}</Box>
  //         </HStack>
  //         <Box>
  //           <Progress
  //             colorScheme="blue"
  //             size="sm"
  //             value={parseInt(statItem.base_stat)}
  //           />
  //         </Box>
  //       </li>
  //   )
  // })

  // const movesLevel = details?.moves
  //   .map((moveItem) => {
  //     return [
  //       moveItem.move.name,
  //       moveItem.version_group_details
  //         .map((item) => {
  //           if (
  //             item.version_group.name === "x-y" &&
  //             item.move_learn_method.name === "level-up"
  //           ) {
  //             return item.level_learned_at
  //           } else {
  //             return 0
  //           }
  //         })
  //         .filter((u) => u !== 0),
  //     ]
  //   })
  //   .filter((y) => JSON.stringify(y[1]) !== "[]")
  //   .map((y) => y.flat())
  //   .sort((a, b) => a[1] - b[1])
  //   .map((q, index) => (
  //     <li key={index}>{q[0] + "- - " + ((q[1] && q[2]) ?? q[1])}</li>
  //   ))
  // // -----------------------------------------------------------------------------------------
  // const movesMachine = details?.moves
  //   .map((moveItem) => {
  //     return [
  //       moveItem.move.name,
  //       moveItem.version_group_details
  //         .map((item) => {
  //           if (
  //             item.version_group.name === "x-y" &&
  //             item.move_learn_method.name === "machine"
  //           ) {
  //             return item
  //           } else {
  //             return 0
  //           }
  //         })
  //         .filter((u) => u !== 0),
  //     ]
  //   })
  //   .filter((y) => JSON.stringify(y[1]) !== "[]")
  //   .map((t) => t[0])
  //   .map((q, index) => <li key={index}>{q}</li>)
  // console.log(movesLevel2, name, "level")

  return (
    <>
      {details && (
        <div>
          <MiscInfo details={details}/>
         
          <ShowStats details={details}/>
          
          <MovesLevel details={details}/>
          
          <MovesMachine details={details}/>
          
        </div>
      )}
    </>
  )
}
