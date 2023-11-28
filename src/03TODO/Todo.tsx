import {
  Card,
  CardBody,
  HStack,
  Text,
  Center,
  VStack,
  Button,
  Checkbox,
  CardFooter,
  CardHeader,
  Heading,
} from '@chakra-ui/react'
import PlusModal from './component/PlusModal'
import { TodoType } from '../type'
import { useState } from 'react'

const Todo = () => {
  const initialTodos: TodoType[] = [
    {
      title: 'test',
      done: false,
    },
    {
      title: 'レポート',
      done: false,
    },
  ]
  const [Todos, setTodos] = useState(initialTodos)

  const deleteTodo = (e: any): void => {
    const newTodos = Todos.filter((todo) => {
      return todo.title !== e.target.value
    })
    setTodos(newTodos)
  }

  return (
    <>
      <Center bg="#e7e7e7" height="100vh">
        <Card align="center" w="40%" h="500px">
          <CardHeader
            w="full"
            bg="#75cbd2"
            color="#202124"
            fontSize="4xl"
            textAlign="center"
          >
            <Heading>Todo List</Heading>
          </CardHeader>
          <CardBody>
            {Todos.map((todo) => (
              <div key={todo.title}>
                <HStack justifyContent="space-between">
                  <Checkbox width="auto">
                    <Text>{todo.title}</Text>
                  </Checkbox>
                  <Button
                    colorScheme="red"
                    size="xs"
                    width="auto"
                    value={todo.title}
                    onClick={deleteTodo}
                  >
                    ×
                  </Button>
                </HStack>
              </div>
            ))}
          </CardBody>
          <CardFooter>
            <PlusModal Todos={Todos} setTodos={setTodos} />
          </CardFooter>
        </Card>
      </Center>
    </>
  )
}

export default Todo
