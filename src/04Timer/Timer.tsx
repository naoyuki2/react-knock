import { useState, useEffect } from 'react'
import TimeModal from './component/TimeModal'
import { TimeText } from './component/TimeText'
import { Center, Card, CardHeader, HStack } from '@chakra-ui/react'
import MoveButton from './component/MoveButton'
import ResetButton from './component/ResetButton'
const Timer = () => {
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [move, setMove] = useState(false)
  useEffect(() => {
    if (minute >= 0 && second >= 0 && move) {
      let timeoutId = setTimeout(() => {
        if (second === 0 && minute > 0) {
          setMinute(minute - 1);
          setSecond(59);
        } else if (second === 0 && minute === 0) {
          clearTimeout(timeoutId);
        } else {
          setSecond(second - 1);
        }
      }, 1000);
      return () => {
        console.log('return');
        clearTimeout(timeoutId);
      };
    }
  }, [minute, second, move]);

  return (
    <>
      <Center bg="#fdf6e3" height="100vh">
        <Card p={20} align="center">
          <CardHeader>
            <HStack>
              <TimeText minute={minute} second={second} />
            </HStack>
          </CardHeader>
          <HStack justifyContent="space-between">
            <MoveButton move={move} setMove={setMove} />
            <ResetButton
              setMinute={setMinute}
              setSecond={setSecond}
              setMove={setMove}
            />
            <TimeModal
              setMinute={setMinute}
              setSecond={setSecond}
              setMove={setMove}
            />
          </HStack>
        </Card>
      </Center>
    </>
  )
}
export default Timer
