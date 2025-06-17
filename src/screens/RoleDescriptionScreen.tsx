import { Box, Center, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const roleDescriptions = {
  Vigie: "Le vigie est responsable de la surveillance du navire.",
  Mousse: "Le mousse aide à toutes les tâches du navire.",
  Timonier: "Le timonier pilote le navire.",
  "Mousse Matelot": "Le mousse matelot assiste le timonier.",
  Père: "Le père est le conseiller du capitaine.",
} as const;

export const RoleDescriptionScreen = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedRole, setSelectedRole] = useState<keyof typeof roleDescriptions | undefined>(undefined);

  const handleRoleClick = (role: keyof typeof roleDescriptions) => {
    setSelectedRole(role);
    onOpen();
  };

  return (
    <Box
      minH="100vh"
      bg="url('/assets/sea.gif')"
      bgSize="cover"
      position="relative"
    >
      <Center h="100vh">
        <Box textAlign="center">
          <Text fontSize="4xl" mb={8}>
            Quand on clique sur le nom d'un ouvrier, une fenêtre avec la carte
            de solène et petite description.
          </Text>
          <Box
            onClick={() => handleRoleClick("Vigie")}
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
            mb={4}
          >
            Vigie
          </Box>
          {open && (
            <Box
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(0,0,0,0.5)"
              onClick={onClose}
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="white"
                p={6}
                borderRadius="lg"
                maxW="80%"
                w="90%"
                onClick={(e) => e.stopPropagation()}
              >
                <Text fontSize="2xl" mb={4}>
                  {selectedRole}
                </Text>
                <Text>{selectedRole ? roleDescriptions[selectedRole] : ""}</Text>
              </Box>
            </Box>
          )}
        </Box>
      </Center>
    </Box>
  );
};
