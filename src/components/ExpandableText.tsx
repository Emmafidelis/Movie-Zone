import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { Button } from "../component/ui/button";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpand, setExpand] = useState(false);
  const limit = 100;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpand ? children : children.substring(0, limit) + "...";

  return (
    <Text marginBottom={4}>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorPalette="yellow"
        onClick={() => setExpand(!isExpand)}
      >
        {isExpand ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
