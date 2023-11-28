import { Button } from '@chakra-ui/react'

type MoveButtonProps = {
  move: boolean
  setMove: any
}

const MoveButton: React.FC<MoveButtonProps> = ({ move, setMove }) => {
  return (
    <>
      <Button colorScheme="teal" size="lg" onClick={() => setMove(!move)}>
        {!move ? 'START' : 'STOP'}
      </Button>
    </>
  )
}

export default MoveButton
