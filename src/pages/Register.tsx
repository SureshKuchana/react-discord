import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Logo from '../assets/logo.png';
import InputField from '../components/shared/InputField';
import { Link as RLink } from 'react-router-dom';

interface IFormValues {
  email: string;
  password: string;
  username: string;
}

export default function Register() {
  const { handleSubmit, register } = useForm<IFormValues>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box px={4} width="full" maxWidth="500px" textAlign="center">
        <Flex mb="4" justify="center">
          <Image src={Logo} w="80px" />
        </Flex>
        <Box p={4} borderRadius={4} background="brandGray.light">
          <Box textAlign="center">
            <Heading fontSize="24px">Welcome to Discord</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label="email"
                name="email"
                autoComplete="email"
                type="email"
                register={register}
                required
              />
              <InputField
                register={register}
                label="username"
                name="username"
              />
              <InputField
                label="password"
                name="password"
                autoComplete="password"
                register={register}
                type="password"
                required
              />
              <Button
                background="highlight.standard"
                color="white"
                width="full"
                mt={4}
                type="submit"
                isLoading={false}
                _hover={{ bg: 'highlight.hover' }}
                _active={{ bg: 'highlight.active' }}
                _focus={{ boxShadow: 'none' }}
              >
                Register
              </Button>
              <Text mt="4">
                Already have an account?{' '}
                <Link as={RLink} to="/login" textColor="highlight.standard">
                  Sign In
                </Link>
              </Text>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
