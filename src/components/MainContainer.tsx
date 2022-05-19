import { Flex, FlexProps, Container } from '@chakra-ui/react';

const Main = (props: FlexProps) => (
  <Flex
    as={'main'}
    direction="column"
    justifyContent="flex-start"
    bg="gray.50"
    color="black"
    _dark={{
      bg: 'gray.900',
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
);

export default Main;
