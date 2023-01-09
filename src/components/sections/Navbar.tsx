import { Button, Flex } from '@chakra-ui/react';
import Logo from '../shared/Logo';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Flex
      as={'nav'}
      align="center"
      justify={'space-between'}
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
    >
      <Flex align={'center'}>
        <Logo />
      </Flex>

      <Flex align={'center'} justify={'flex-end'}>
        <Link to="/login">
          <Button
            color="white"
            bg={'transparent'}
            border={'1px solid #494949'}
            _hover={{ bg: 'highlight.hover' }}
            _active={{ bg: 'highlight.active' }}
            _focus={{ boxShadow: 'none' }}
            size="md"
            rounded="md"
            variant="solid"
            mx="4"
          >
            Login
          </Button>
        </Link>

        <Link to="/register">
          <Button
            bg={'transparent'}
            border={'1px solid #494949'}
            _hover={{ bg: 'highlight.hover' }}
            _active={{ bg: 'highlight.active' }}
            _focus={{ boxShadow: 'none' }}
            size="md"
            rounded="md"
            variant="solid"
          >
            Register
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
