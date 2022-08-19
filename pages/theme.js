import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const overrides = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        lineHeight: "base",
      },
    }),
  },
})

// theme.js
// export default theme = {
//   colors: {
//     transparent: "transparent",
//     black: "#000",
//     white: "#fff",
//     gray: {
//       50: "#f7fafc",
//       // ...
//       900: "#171923",
//     },
//     // ...
//   },
// }
