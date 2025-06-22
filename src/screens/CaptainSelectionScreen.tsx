import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

type Props = {
  onChangeStep: (step: number) => void;
};

export const CaptainSelectionScreen = ({ onChangeStep }: Props) => {
  const handleNext = () => {
    onChangeStep(3);
  };

  const handleBack = () => {
    onChangeStep(1);
  };

  return (
    <Layout onGoBack={handleBack}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="4xl" mb={8} textAlign="center" color={"white"}>
          Que chaque pirate tire une carte et que la plus haute designe le
          capitaine !
        </Text>
        <Button type="primary" onClick={handleNext} content="Oui" />
      </Flex>
    </Layout>
  );
};
