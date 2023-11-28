import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { TodoType } from '../../type'

type PlusModalProps = {
  Todos: TodoType[]
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}

const PlusModal: React.FC<PlusModalProps> = ({ Todos, setTodos }) => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('タスク名を入力してください')

  const inputChange = (e: any): void => {
    if (e.target.value === '') {
      setMessage('タスク名を入力してください')
      setTitle('')
    } else {
      setMessage('')
      setTitle(e.target.value)
    }
  }

  const add = (): void => {
    if (!(title === '')) {
      const newTodo: TodoType = {
        title: title,
        done: false,
      }
      const newTodos = [...Todos, newTodo]
      setTodos(newTodos)
      setTitle('')
      onClose()
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} color="#4C4C4C" bg="#75cbd2">
        タスクを追加
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#75cbd2" color="#4C4C4C">
            タスク追加
          </ModalHeader>
          <ModalBody>
            <Input
              placeholder="タスク名を入力"
              size="lg"
              value={title}
              onChange={inputChange}
            />
            <Text color="#db4c3a">{message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={add}>
              追加する
            </Button>
            <Button type="submit" variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PlusModal
