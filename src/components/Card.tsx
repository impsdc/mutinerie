import { Box, Text, Image } from "@chakra-ui/react";
import { Button } from "./Button";
import type { roles } from "../utils/roles.config";
import { ModalWrapper } from "../styles/card.css";

type Props = {
  onClose: () => void;
  role: (typeof roles)[number];
};
export const Card = ({ onClose, role }: Props) => {
  return (
    <Box style={ModalWrapper}>
      <Image src={role.image} />
      <Text fontSize="2xl" mb={4}>
        {role.name}
      </Text>
      <Text>{role.description}</Text>
      <Button type="warning" onClick={onClose} content={"Fermer"} />
    </Box>
  );
};
