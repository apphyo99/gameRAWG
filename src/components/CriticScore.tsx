import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colour = score > 76 ? "green" : score > 60 ? "yellow" : "";
  
  return (
    <div>
      <Badge
        colorScheme={colour}
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
      >
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
