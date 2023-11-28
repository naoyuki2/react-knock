import { Button, Card, CardBody, Center, Text } from '@chakra-ui/react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Center bg="#2bc6b7" height="100vh">
        <Card p={20} align="center">
          <Text pb={10} color="#7e8296" fontSize="4xl">
            React Counter
          </Text>
          <Text pb={10} color="teal" fontSize="6xl">
            {count}
          </Text>
          <CardBody>
            <Button
              mr={5}
              colorScheme="teal"
              size="lg"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
            <Button
              ml={5}
              colorScheme="teal"
              variant="outline"
              size="lg"
              onClick={() => setCount(count - 1)}
            >
              -
            </Button>
          </CardBody>
        </Card>
      </Center>
    </>
  )
}

export default Counter
