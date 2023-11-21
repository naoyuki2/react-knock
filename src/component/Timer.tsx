import { useState, useEffect } from 'react'
import {
  Center,
  Card,
  Text,
  CardBody,
  Button,
  CardHeader,
} from '@chakra-ui/react'
const Timer = () => {
  const [time, setTime] = useState(10)
  const [move, setMove] = useState(false)
  const moveChange = (): void => {
    setMove(!move)
  }
  //   useEffect
  //   setInterval(() => {
  //     if (time > 0) {
  //       setTime((prev) => prev - 1)
  //     }
  //   }, 10000)
  return (
    <>
      <Center bg="#fdf6e3" height="100vh">
        <Card p={20} align="center">
          <CardHeader>
            <Text color="7e8296" fontSize="4xl">
              {time}
            </Text>
          </CardHeader>
          <CardBody>
            <Button colorScheme="teal" size="lg" onClick={moveChange}>
              {!move ? 'START' : 'STOP'}
            </Button>
            <Button colorScheme="teal" size="lg">
              RESET
            </Button>
          </CardBody>
        </Card>
      </Center>
    </>
  )
}
export default Timer
