import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode | ReactNode[]; // so that we can pass multiple elements here
}

const DefinationItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="grey.600">
        {term}
      </Heading>
      <dd> {children}</dd>
    </Box>
  );
};

export default DefinationItem;
