import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

export default function Features() {
  return (
    <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={20}
        justifyContent={'center'}
      >
        <Feature
          icon={<Icon as={FcAssistant} w={20} h={20} />}
          title={'Orphan pets'}
          text={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={20} h={20} />}
          title={'Help request'}
          text={
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis de.'
          }
        />
      </SimpleGrid>
    </Stack>
  );
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={40}
        h={40}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={2}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} px={10}>
        {text}
      </Text>
    </Stack>
  );
};
