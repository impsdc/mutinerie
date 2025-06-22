import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { BACKGROUND } from "../constants";

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <Box
      position="absolute"
      top="4"
      left="4"
      padding={3}
      background={BACKGROUND}
      borderRadius="full"
      cursor="pointer"
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <IconButton
        aria-label="Back"
        as={FaArrowLeft}
        color={"white"}
        background={"transparent"}
        size="xs"
        onClick={onClick}
      />
    </Box>
  );
};
