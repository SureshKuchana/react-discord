import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Logo from '../assets/logo.png';
import InputField from '../components/shared/InputField';

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
                register={register}
                required
              />
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
