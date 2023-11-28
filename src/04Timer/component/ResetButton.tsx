import { Button } from '@chakra-ui/react'

type ResetButtonProps = {
  setMinute: any
  setSecond: any
  setMove: any
}

const ResetButton: React.FC<ResetButtonProps> = ({
  setMinute,
  setSecond,
  setMove,
}) => {
  const reset = () => {
    setMinute(0)
    setSecond(0)
    setMove(false)
  }

  return (
    <Button colorScheme="teal" size="lg" onClick={reset}>
      RESET
    </Button>
  )
}

export default ResetButton
