import { Box, Container, Image } from "@chakra-ui/react"
import styles from "../styles/Layout.module.css"

// background={`url('../public/pokecenter_1.jpg') center center/cover no-repeat fixed
// padding-box border-box #bbb;`}
export default function Layout({ children }) {
  return (
    <>
      
        <Box
          alt={"fondo"}
          position={"absolute"}
          backgroundImage={"/pokecenter_1.jpg"}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundClip={'padding-box'}
          backgroundAttachment={'fixed'}
          backgroundSize={'cover'}
          height="2500px"
          w={'100vw'}
        >
        {children}
        </Box>
    </>
    )
}
