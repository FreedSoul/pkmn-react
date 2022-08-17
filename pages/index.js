import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState, useRef } from "react"
import Pokemon from "../components/pokemon"
import { DebounceInput } from "react-debounce-input"
import Link from "next/link"
import { Flex, Heading, Stack, Box, Spacer,Input, VStack,Image } from "@chakra-ui/react"

export default function Home() {

  const [pkname, setPkname] = useState('')

  const url = `https://pokeapi.co/api/v2/pokemon/`
  // const hola = useRef()

  const handleSubmit = (event) =>{
    event.preventDefault()
    // hola.current.value = ''
  }

  return (
    <div className={styles.container}>
      <Flex>
        <Box
          p="2"
          width="140px"
          bg={"red.500"}
          border={"2px"}
          borderColor={"white"}
        >
          <Link href="/whatpkmn">
            <a>what&lsquo;s that pokemon?</a>
          </Link>
        </Box>
        <Spacer />
        <Box
          p="2"
          width="140px"
          bg={"blue.500"}
          border={"2px"}
          borderColor={"white"}
        >
          <Link href="/compare">
            <a>let&lsquo;s compare pokemons!</a>
          </Link>
        </Box>
      </Flex>
      {/* <svg
        width="300"
        height="195"
        viewBox="0 0 648 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_14_129" fill="white">
          <path d="M53 0H0V56.7021L21 77.4468V132.766L0 154.894V195H126V168.032H224V195H288V172.872H307V195H411L441 132.766H521H599V56.7021V0H367H77V28H53V0Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M615 195H648V56.7021H615V195ZM648 37.3404V0H615V37.3404H648ZM592 195H420L445 143.138H521H592V195ZM129.5 195H220.5V172.872H129.5V195Z"
          />
          <path d="M16.5 77.4468L0 61.5426V150.053L16.5 132.766V77.4468Z" />
        </mask>
        <path
          d="M53 0H0V56.7021L21 77.4468V132.766L0 154.894V195H126V168.032H224V195H288V172.872H307V195H411L441 132.766H521H599V56.7021V0H367H77V28H53V0Z"
          fill="#6CEBFC"
          fillOpacity="0.63"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M615 195H648V56.7021H615V195ZM648 37.3404V0H615V37.3404H648ZM592 195H420L445 143.138H521H592V195ZM129.5 195H220.5V172.872H129.5V195Z"
          fill="#3F3B47"
        />
        <path
          d="M16.5 77.4468L0 61.5426V150.053L16.5 132.766V77.4468Z"
          fill="black"
        />
        <path
          d="M53 1.5H77V-1.5H53V1.5ZM307 193.5H288V196.5H307V193.5ZM597.5 132.766V195H600.5V132.766H597.5ZM599 1.5H615V-1.5H599V1.5ZM615 193.5H599V196.5H615V193.5ZM646.5 37.3404V56.7021H649.5V37.3404H646.5ZM129.5 193.5H126V196.5H129.5V193.5ZM224 193.5H220.5V196.5H224V193.5ZM1.5 61.5426V56.7021H-1.5V61.5426H1.5ZM1.5 154.894V150.053H-1.5V154.894H1.5ZM420 193.5H411V196.5H420V193.5ZM599 193.5H592V196.5H599V193.5ZM0 0V-3H-3V0H0ZM648 0H651V-3H648V0ZM648 195V198H651V195H648ZM0 195H-3V198H0V195ZM53 0H56V-3H53V0ZM53 28H50V31H53V28ZM77 28V31H80V28H77ZM77 0V-3H74V0H77ZM0 56.7021H-3V57.9555L-2.10831 58.8364L0 56.7021ZM21 77.4468H24V76.1934L23.1083 75.3126L21 77.4468ZM21 132.766L23.176 134.831L24 133.963V132.766H21ZM0 154.894L-2.17604 152.828L-3 153.697V154.894H0ZM126 195V198H129V195H126ZM126 168.032V165.032H123V168.032H126ZM224 168.032H227V165.032H224V168.032ZM224 195H221V198H224V195ZM288 195V198H291V195H288ZM288 172.872V169.872H285V172.872H288ZM307 172.872H310V169.872H307V172.872ZM307 195H304V198H307V195ZM411 195V198H412.884L413.702 196.303L411 195ZM441 132.766V129.766H439.116L438.298 131.463L441 132.766ZM599 132.766V135.766H602V132.766H599ZM599 0H602V-3H599V0ZM615 0V-3H612V0H615ZM615 37.3404H612V40.3404H615V37.3404ZM648 37.3404V40.3404H651V37.3404H648ZM615 56.7021V53.7021H612V56.7021H615ZM615 195H612V198H615V195ZM648 56.7021H651V53.7021H648V56.7021ZM129.5 195H126.5V198H129.5V195ZM129.5 172.872V169.872H126.5V172.872H129.5ZM220.5 172.872H223.5V169.872H220.5V172.872ZM220.5 195V198H223.5V195H220.5ZM0 61.5426L2.08197 59.3826L-3 54.4841V61.5426H0ZM16.5 77.4468H19.5V76.1717L18.582 75.2868L16.5 77.4468ZM16.5 132.766L18.6702 134.837L19.5 133.968V132.766H16.5ZM0 150.053H-3V157.541L2.17016 152.125L0 150.053ZM420 195L417.298 193.697L415.223 198H420V195ZM445 143.138V140.138H443.116L442.298 141.836L445 143.138ZM592 143.138H595V140.138H592V143.138ZM592 195V198H595V195H592ZM0 3H53V-3H0V3ZM50 0V28H56V0H50ZM53 31H77V25H53V31ZM80 28V0H74V28H80ZM77 3H367V-3H77V3ZM3 56.7021V0H-3V56.7021H3ZM-2.10831 58.8364L18.8917 79.5811L23.1083 75.3126L2.10831 54.5679L-2.10831 58.8364ZM18 77.4468V132.766H24V77.4468H18ZM3 195V154.894H-3V195H3ZM18.824 130.701L-2.17604 152.828L2.17604 156.959L23.176 134.831L18.824 130.701ZM126 192H0V198H126V192ZM129 195V168.032H123V195H129ZM126 171.032H224V165.032H126V171.032ZM221 168.032V195H227V168.032H221ZM288 192H224V198H288V192ZM291 195V172.872H285V195H291ZM288 175.872H307V169.872H288V175.872ZM304 172.872V195H310V172.872H304ZM411 192H307V198H411V192ZM413.702 196.303L443.702 134.069L438.298 131.463L408.298 193.697L413.702 196.303ZM596 56.7021V132.766H602V56.7021H596ZM367 3H599V-3H367V3ZM596 0V56.7021H602V0H596ZM441 135.766H521V129.766H441V135.766ZM521 135.766H599V129.766H521V135.766ZM615 3H648V-3H615V3ZM612 0V37.3404H618V0H612ZM645 0V37.3404H651V0H645ZM615 40.3404H648V34.3404H615V40.3404ZM648 192H615V198H648V192ZM612 56.7021V195H618V56.7021H612ZM645 56.7021V195H651V56.7021H645ZM615 59.7021H648V53.7021H615V59.7021ZM132.5 195V172.872H126.5V195H132.5ZM129.5 175.872H220.5V169.872H129.5V175.872ZM220.5 192H129.5V198H220.5V192ZM217.5 172.872V195H223.5V172.872H217.5ZM-2.08197 63.7025L14.418 79.6068L18.582 75.2868L2.08197 59.3826L-2.08197 63.7025ZM13.5 77.4468V132.766H19.5V77.4468H13.5ZM3 150.053V61.5426H-3V150.053H3ZM14.3298 130.695L-2.17016 147.982L2.17016 152.125L18.6702 134.837L14.3298 130.695ZM422.702 196.303L447.702 144.441L442.298 141.836L417.298 193.697L422.702 196.303ZM445 146.138H521V140.138H445V146.138ZM521 146.138H592V140.138H521V146.138ZM592 192H420V198H592V192ZM589 143.138V195H595V143.138H589Z"
          fill="black"
          mask="url(#path-1-inside-1_14_129)"
        />
      </svg> */}
      <VStack>
        <Heading as={"h2"} zIndex={"1"}>
          The Pokedex App
        </Heading>

        {/* <form className={styles.form} onSubmit={handleSubmit}> */}
        <Input
          as={DebounceInput}
          value={pkname}
          onChange={(event) => setPkname(event.target.value)}
          variant={"filled"}
          bg="rgba(0,255,148,0.6)"
          zIndex={"1"}
          border={"2px"}
          focusBorderColor="white"
          // BackgroudColor="green.200"
          position={"relative"}
          right={"60px"}
          size="sm"
          placeholder="enter a pokemon name..."
          width={200}
          // onSubmit={ref.fieldName.value=""}
          type="text"
          name="pkname"
          // ref={hola}
          debounceTimeout={500}
          minLength={2}
        />
        <Image
          width={"400px"}
          height={"150px"}
          position={"absolute"}
          top="45px"
          src={"/fut-frame.svg"}
          alt={"frame"}
          // layout={"fill"}
        ></Image>
      </VStack>
      {/* <DebounceInput
          value={pkname}
          onChange={(event) => setPkname(event.target.value)}
          // onSubmit={ref.fieldName.value=""}
          type="text"
          name="pkname"
          // ref={hola}
          debounceTimeout={10000}
          minLength={2}
        /> */}
      {/* </form> */}
      <Pokemon name={pkname !== "" ? pkname : "bulbasaur"} url={url} />
    </div>
  )
}
