import { Text } from "@chakra-ui/react";

interface Props {
  date: string;
}

const ReleasedDate = ({ date }: Props) => {
  return <Text textStyle="sm">{date}</Text>;
};

export default ReleasedDate;
