import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex bottom={0} as="footer" align="center" justify="center" w="100%" p={8}>
      <Box textAlign="center">
        <Text fontSize="xl">
          <span>Discord | @{new Date().getFullYear()}</span>
        </Text>
      </Box>
    </Flex>
  );
}
