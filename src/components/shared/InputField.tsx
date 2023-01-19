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
  autoComplete?: Path<IFormValues>;
  label: Path<IFormValues>;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  type?: Path<IFormValues>;
};

export default function InputField({
  label,
  register,
  required,
  autoComplete,
  type,
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
        autoComplete={autoComplete}
        type={type}
        {...register(label, { required })}
      />
      <FormErrorMessage>{'error'}</FormErrorMessage>
    </FormControl>
  );
}
