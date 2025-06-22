import { Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ModalOverlay, ModalWrapper } from "../styles/card.css";
import { useState } from "react";
import { roles } from "../utils/roles.config";
import { Card } from "../components/Card";

type Props = {
  onChangeStep: (step: number) => void;
};

export const RoleAssignmentScreen = ({ onChangeStep }: Props) => {
  const [selectedRole, setSelectedRole] = useState<
    (typeof roles)[number] | undefined
  >(undefined);

  const handleNext = () => {
    return;
    onChangeStep(4);
  };

  const handleBack = () => {
    onChangeStep(2);
  };

  const handleRoleClick = (role: (typeof roles)[number]) => () => {
    setSelectedRole(role);
  };

  return (
    <>
      <Layout onGoBack={handleBack}>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize="2xl" mb={8} textAlign="center" color={"white"}>
            Bravo à toi capitaine !<br /> Attribue maintenant les rôles à tes
            matelots !
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
          <Button type="primary" onClick={handleNext} content="Partir en mer" />
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
              <Card
                onClose={() => setSelectedRole(undefined)}
                role={selectedRole}
              />
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
