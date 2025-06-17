import { Text, Grid, GridItem, Flex, Image, Box } from "@chakra-ui/react";
import { Layout } from "../component/layout";
import { Button } from "../component/button";
import { AnimatePresence, motion } from "framer-motion";
import { ModalWrapper, ModalOverlay, ModalContent } from "../styles/card.css";
import { useState } from "react";

const roles = [
  {
    name: "Vigie",
    description: "Le vigie est responsable de la surveillance du navire.",
    image: "https://placehold.co/600x400",
  },
  {
    name: "Mousse",
    description: "Le vigie est responsable de la surveillance du navire.",
    image: "https://placehold.co/600x400",
  },
  {
    name: "Timonier",
    description: "Le vigie est responsable de la surveillance du navire.",
    image: "https://placehold.co/600x400",
  },
  {
    name: "Matelot",
    description: "Le vigie est responsable de la surveillance du navire.",
    image: "https://placehold.co/600x400",
  },
] as const;

type Props = {
  onChangeStep: (step: number) => void;
};

export const RoleAssignmentScreen = ({ onChangeStep }: Props) => {
  const [selectedRole, setSelectedRole] = useState<
    (typeof roles)[number] | undefined
  >(undefined);

  const handleNext = () => {
    onChangeStep(4);
  };

  const handleRoleClick = (role: (typeof roles)[number]) => () => {
    setSelectedRole(role);
  };

  return (
    <>
      <Layout>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize="2xl" mb={8} textAlign="center" color={"white"}>
            Bravo à toi capitaine ! Attribue maintenant les rôles à tes matelots
            !
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={8} mb={8}>
            {roles.map((role) => (
              <GridItem key={role.name}>
                <Flex justifyContent="center" alignItems="center">
                  <Button
                    type="warning"
                    onClick={handleRoleClick(role)}
                    content={role.name}
                    style={{ width: "100%" }}
                  />
                </Flex>
              </GridItem>
            ))}
          </Grid>
          <Button type="primary" onClick={handleNext} content="Continuer" />
        </Flex>
      </Layout>
      <AnimatePresence initial={false}>
        {selectedRole ? (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="modal"
              style={ModalWrapper}
            >
              <div style={ModalContent}>
                <Image src={selectedRole.image} />
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  {selectedRole.name}
                </Text>
                <Box w={1}>
                  <Text>{selectedRole.description}</Text>
                  <Button
                    type="primary"
                    onClick={() => setSelectedRole(undefined)}
                    content={"Fermer"}
                  />
                </Box>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={ModalOverlay}
              onClick={() => setSelectedRole(undefined)}
            />
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};
