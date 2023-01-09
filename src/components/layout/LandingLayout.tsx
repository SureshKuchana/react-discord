import { Flex } from '@chakra-ui/react';
import Footer from '../sections/Footer';
import Navbar from '../sections/Navbar';

type landingProps = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: landingProps) {
  return (
    <Flex direction="column" align="center" maxW={{ xl: '1200px' }} m="0 auto">
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
}
