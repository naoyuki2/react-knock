import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Text,
  HStack,
  PinInput,
  PinInputField,
  Center,
} from '@chakra-ui/react'
import { useState } from 'react'

type TimeModalProps = {
  setMinute: any
  setSecond: any
  setMove: any
}

const TimeModal: React.FC<TimeModalProps> = ({
  setMinute,
  setSecond,
  setMove,
}) => {
  const [time1, setTime1] = useState('')
  const [time2, setTime2] = useState('')
  const [time3, setTime3] = useState('')
  const [time4, setTime4] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const setting = () => {
    const minute = time1 + time2
    const second = time3 + time4
    setMinute(parseInt(minute))
    setSecond(parseInt(second))
    setMove(false)
    onClose()
  }

  // const CloseModal = (value: string) => {
  //   setTime4(value)
  //   const minute = time1 + time2
  //   const second = time3 + time4
  //   setMinute(parseInt(minute))
  //   setSecond(parseInt(second))
  //   onClose()
  // }

  return (
    <>
      <Button colorScheme="teal" size="lg" onClick={onOpen}>
        SET
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#75cbd2" color="#4C4C4C">
            時間設定
          </ModalHeader>
          <ModalBody>
            <Center>
              <HStack>
                <PinInput size="lg">
                  <PinInputField
                    value={time1}
                    onChange={(e) => setTime1(e.target.value)}
                  />
                  <PinInputField
                    value={time2}
                    onChange={(e) => setTime2(e.target.value)}
                  />
                  <Text>：</Text>
                  <PinInputField
                    value={time3}
                    onChange={(e) => setTime3(e.target.value)}
                  />
                  <PinInputField
                    value={time4}
                    onChange={(e) => setTime4(e.target.value)}
                  />
                </PinInput>
              </HStack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="ghost" onClick={setting}>
              設定
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

export default TimeModal
