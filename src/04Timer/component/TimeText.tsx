import { Text } from '@chakra-ui/react'

type TimeTextProps = {
  minute: number
  second: number
}

export const TimeText: React.FC<TimeTextProps> = ({ minute, second }) => {
  return (
    <>
      <Text fontSize="6xl">{('000' + minute).slice(-2)}</Text>
      <Text fontSize="6xl">：</Text>
      <Text fontSize="6xl">{('000' + second).slice(-2)}</Text>
    </>
  )
}
