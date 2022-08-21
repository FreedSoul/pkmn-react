import Image from "next/image"
import styles from "../styles/PrintDetails.module.css"
import useSWR from "swr"
import { fetcher } from "./pokemon"
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import MiscInfo from "./MiscInfo"
import ShowStats from "./ShowStats"
import MovesLevel from "./MovesLevel"
import MovesMachine from "./MovesMachine"
import { useEffect, useState } from "react"
import { TbListDetails } from "react-icons/tb"
import { ImStatsBars } from "react-icons/im"
import { CgArrowUpR } from "react-icons/cg"
import { GiCompactDisc } from "react-icons/gi"

function FetchDetails(name, url) {
  const { data, error } = useSWR(name ? `${url}${name}` : null, fetcher)

  return {
    details: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default function PrintDetails({ name, url, compare }) {
  // const [misc, setMisc] = useBoolean()
  // const [stats, setStats] = useBoolean()
  // const [level, setLevel] = useBoolean()
  // const [machine, setMachine] = useBoolean()
  const [misc, setMisc] = useState(false)
  const [stats, setStats] = useState(true)
  const [level, setLevel] = useState(false)
  const [machine, setMachine] = useState(false)
  console.log(compare)
  const details = FetchDetails(name, url).details

  return (
    <>
      {details && (
        <>
          <HStack
            justifyContent="space-around"
            position={"relative"}
            top={["20%", "25%", "22%", "22%"]}
            mt={5}
          >
            <VStack direction={"column"}>
              <Button
                h={"30px"}
                w="30px"
                bg={!level ? "white" : "rgba(0,0,0,0.45)"}
                border={level ? "2px" : ""}
                borderColor={"green"}
                _hover={"unset"}
                boxShadow={!level ? "4px 5px 3px 1px rgba(0,0,0,0.75)" : ""}
                onClick={() => {
                  setStats(false)
                  setLevel(!level)
                  setMisc(false)
                  setMachine(false)
                }}
              >
                <Text fontSize="md">
                  <CgArrowUpR></CgArrowUpR>
                </Text>
              </Button>
              <Text fontSize="xs">Level</Text>
            </VStack>
            <VStack direction={"column"}>
              <Button
                h={"30px"}
                w="30px"
                bg={!machine ? "white" : "rgba(0,0,0,0.45)"}
                border={machine ? "2px" : ""}
                borderColor={"green"}
                _hover={"unset"}
                boxShadow={!machine ? "4px 5px 3px 1px rgba(0,0,0,0.75)" : ""}
                onClick={() => {
                  setStats(false)
                  setLevel(false)
                  setMisc(false)
                  setMachine(!machine)
                }}
              >
                <Text fontSize="md">
                  <GiCompactDisc></GiCompactDisc>
                </Text>
              </Button>
              <Text fontSize="xs">machine</Text>
            </VStack>
            <VStack direction={"column"}>
              <Button
                h={"30px"}
                w="30px"
                bg={!misc ? "white" : "rgba(0,0,0,0.45)"}
                border={misc ? "2px" : ""}
                borderColor={"green"}
                _hover={"unset"}
                onClick={() => {
                  setStats(false)
                  setLevel(false)
                  setMisc(!misc)
                  setMachine(false)
                }}
                boxShadow={!misc ? "4px 5px 3px 1px rgba(0,0,0,0.75)" : ""}
              >
                <Text fontSize="md">
                  <TbListDetails fontSize={"xl"}></TbListDetails>
                </Text>
              </Button>
              <Text fontSize="xs">Details</Text>
            </VStack>
            <VStack direction={"column"}>
              <Button
                h={"30px"}
                w="30px"
                bg={!stats ? "white" : "rgba(0,0,0,0.45)"}
                border={stats ? "2px" : ""}
                borderColor={"green"}
                _hover={"unset"}
                boxShadow={!stats ? "4px 5px 3px 1px rgba(0,0,0,0.75)" : ""}
                onClick={() => {
                  setStats(!stats)
                  setLevel(false)
                  setMisc(false)
                  setMachine(false)
                }}
              >
                <Text fontSize="md">
                  <ImStatsBars></ImStatsBars>
                </Text>
              </Button>
              <Text fontSize="xs">Stats</Text>
            </VStack>
          </HStack>

          {/* <Hide breakpoint="(max-width: 480px)"> */}
          <Flex
            className="Aqui-Print-details"
            direction={["column", "column", "row", "row"]}
            position={"relative"}
            // mt={
            //   compare
            //     ? ["20px", "20px", "20px", "20px"]
            //     : ["180px", "132px", "132px", "132px"]
            // }
            top={
              compare
                ? ["170px", "190px", "190px", "190px"]
                : ["170px", "-215px", "-215px", "-215px"]
            }
            left={
              compare
                ? ["0px", "0px", "0px", "0px"]
                : ["0px", "260px", "280px", "300px"]
            }
          >
            {misc && <MiscInfo details={details} />}
            {stats && <ShowStats details={details} />}
            {level && <MovesLevel details={details} />}
            {machine && <MovesMachine details={details} />}
          </Flex>
          {/* </Hide>
          <Show breakpoint="(max-width: 480px)">
            <Flex
              direction={
                compare
                  ? ["row", "row", "row", "row"]
                  : ["column", "column", "row", "row"]
              }
              position={"absolute"}
              top={"200px"}
              left={"0px"}
            >
              {misc && <MiscInfo details={details} />}
              {stats && <ShowStats details={details} />}
              {level && <MovesLevel details={details} />}
              {machine && <MovesMachine details={details} />}
            </Flex>
          </Show> */}
        </>
      )}
    </>
  )
}
