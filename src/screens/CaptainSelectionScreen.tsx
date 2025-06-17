import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../component/layout";
import { Button } from "../component/button";

type Props = {
  onChangeStep: (step: number) => void;
};

export const CaptainSelectionScreen = ({ onChangeStep }: Props) => {
  const handleNext = () => {
    onChangeStep(3);
  };

  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="4xl" mb={8} textAlign="center" color={"white"}>
          Que chaque pirate tire une carte et que le capitaine choisisse votre
          capitaine !
        </Text>
        <Button type="primary" onClick={handleNext} content="Oui" />
      </Flex>
    </Layout>
  );
};
