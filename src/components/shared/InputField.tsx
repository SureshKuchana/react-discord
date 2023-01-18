import { Path, UseFormRegister } from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

interface IFormValues {
  email: string;
  password: string;
  username: string;
}

type InputFieldProps = {
  label: Path<IFormValues>;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

export default function InputField({
  label,
  register,
  required,
}: InputFieldProps) {
  return (
    <FormControl mt={4}>
      <FormLabel>
        <Text fontSize="12px" textTransform="uppercase">
          {label}
        </Text>
      </FormLabel>
      <Input
        bg="brandGray.dark"
        borderColor="black"
        borderRadius="3px"
        focusBorderColor="highlight.standard"
        {...register(label, { required })}
      />
      <FormErrorMessage>{'error'}</FormErrorMessage>
    </FormControl>
  );
}
