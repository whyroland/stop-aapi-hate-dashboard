/* eslint-disable no-unused-vars */
import {
  Box,
  Text,
  Flex,
  VStack,
  Divider
} from "@chakra-ui/react"
import React from "react";
import Container from "../components/layout/container"
import { BubbleGraph, PoliticsGraph, MainGraph, Mapbox, LiveTwitter, Timeline, BarGraph } from "../components/index";

export default function Home() {
 return (
    <Container py={20} bgColor="black" align="center" justify="center">
      <VStack maxW="1280px">
        <Flex justify="center" flexWrap="wrap">
          <Box align="center" justify="center">
            <Mapbox/>
          </Box>
          <Divider my={20}/>
          <Box justify="center" align="center" maxW="1280px">
            <BubbleGraph/>
          </Box>
            <Divider my={20}/>
          <Box justify="center" align="center" maxW="1280px">
            <PoliticsGraph/>
            <LiveTwitter/>
          </Box>
            <Divider colorScheme="white" my={20}/>
          <Flex flexWrap="wrap">
            <MainGraph/>
            <BarGraph/>
          </Flex>
          <Divider my={20}/>
          <Timeline/>
        </Flex>
      </VStack>
    </Container>
  )
}