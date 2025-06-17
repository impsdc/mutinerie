import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../component/layout";
import { Button } from "../component/button";

type Props = {
  onChangeStep: (step: number) => void;
};

export const HomeScreen = ({ onChangeStep }: Props) => {
  const handleNext = () => {
    onChangeStep(2);
  };

  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="4xl" mb={8} textAlign="center" color={"white"}>
          Bienvenue à bord ! Êtes-vous prêt à embarquer ?
        </Text>
        <Button type="primary" onClick={handleNext} content="Oui" />
      </Flex>
    </Layout>
  );
};
