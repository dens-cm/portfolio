"use client"

import { ChakraProvider, createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Plus Jakarta Sans', sans-serif" },
        body: { value: "'Plus Jakarta Sans', sans-serif" },
      },
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
    "@media print": {
      "html, body, #root": {
        background: "white !important",
        color: "#111827 !important",
        height: "auto !important",
        overflow: "visible !important",
        fontSize: "10pt !important",
        margin: "0 !important",
        padding: "0 !important",
      },
      ".no-print, button, header, footer": {
        display: "none !important",
      },
      ".portfolio-wrapper": {
        background: "white !important",
        height: "auto !important",
        overflow: "visible !important",
        margin: "0 !important",
        padding: "0 !important",
      },
      ".portfolio-inner": {
        width: "100% !important",
        maxWidth: "100% !important",
        padding: "0 !important",
      },
      ".linear-flow-container": {
        gap: "1.5rem !important",
      },
      ".linear-flow-container > *": {
        border: "none !important",
        boxShadow: "none !important",
        marginBottom: "1.5rem !important",
        pageBreakInside: "avoid !important",
      },
      ".profile-sidecard": {
        border: "none !important",
        background: "transparent !important",
        padding: "0 0 1rem 0 !important",
        borderBottom: "2px solid #E5E7EB !important",
        borderRadius: "0 !important",
        boxShadow: "none !important",
      }
    }
  }
})

const customSystem = createSystem(defaultConfig, customConfig)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

