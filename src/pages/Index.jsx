import { Container, Box, Text, VStack, HStack, Button, Image, Input, FormControl, FormLabel, Textarea, IconButton, Link } from "@chakra-ui/react";
import { FaAmazon, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="black" color="#FFCA0C">
      {/* Header */}
      <Box as="header" textAlign="center" py={8}>
        <Image src="https://images.unsplash.com/photo-1510759591315-6425cba413fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNYWdpYyUyMFByaW50JTIwUHJvZHVjdGlvbiUyMGxvZ298ZW58MHx8fHwxNzE2NDI1Njc3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Magic Print Production Logo" mx="auto" />
        <Text fontSize="4xl" fontWeight="bold" mt={4}>
          Magic Print Production
        </Text>
        <Text fontSize="xl" mt={2}>
          Creating, Printing, and Designing Your Books
        </Text>
      </Box>

      {/* Homepage */}
      <Box as="section" py={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Welcome to Magic Print Production
        </Text>
        <Text mb={4}>We specialize in book creation, printing services, and book design. Explore our gallery of books created and uploaded to Amazon KDP.</Text>
        <HStack spacing={4} wrap="wrap" justify="center">
          <Image src="https://images.unsplash.com/photo-1536237880829-dd441c249e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAxfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover 1" boxSize="150px" />
          <Image src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAyfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover 2" boxSize="150px" />
          <Image src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAzfGVufDB8fHx8MTcxNjQyNTY3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover 3" boxSize="150px" />
        </HStack>
        <Button mt={4} colorScheme="yellow" variant="solid">
          Order Custom Books & Bulk Orders
        </Button>
      </Box>

      {/* Books Catalog */}
      <Box as="section" py={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Books Catalog
        </Text>
        <Input placeholder="Search books..." mb={4} />
        <VStack spacing={4}>
          <Box bg="gray.800" p={4} borderRadius="md" w="full">
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1522010343142-5b7cc854c0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxib29rJTIwY292ZXIlMjAxfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover 1" boxSize="100px" />
              <VStack align="start">
                <Text fontSize="lg" fontWeight="bold">
                  Book Title 1
                </Text>
                <Text>Description of Book 1</Text>
                <HStack>
                  <Link href="https://www.amazon.com" isExternal>
                    <Button leftIcon={<FaAmazon />} colorScheme="yellow">
                      Buy on Amazon
                    </Button>
                  </Link>
                  <Button colorScheme="yellow">Buy with Payoneer</Button>
                </HStack>
              </VStack>
            </HStack>
          </Box>
          {/* Repeat similar blocks for other books */}
        </VStack>
      </Box>

      {/* Services */}
      <Box as="section" py={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Our Services
        </Text>
        <VStack spacing={4} align="start">
          <Text>We offer a range of services including book printing, cover design, and customization of paperback and hardcover journals, sketchbooks, and composition books.</Text>
          <Text>For custom bulk orders, please contact us with your specifications.</Text>
        </VStack>
      </Box>

      {/* Order Custom Books */}
      <Box as="section" py={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Order Custom Books
        </Text>
        <FormControl id="custom-book-order" mb={4}>
          <FormLabel>Book Title</FormLabel>
          <Input placeholder="Enter book title" />
        </FormControl>
        <FormControl id="customization-options" mb={4}>
          <FormLabel>Customization Options</FormLabel>
          <Textarea placeholder="Enter customization options" />
        </FormControl>
        <FormControl id="bulk-order-specifications" mb={4}>
          <FormLabel>Bulk Order Specifications</FormLabel>
          <Textarea placeholder="Enter bulk order specifications" />
        </FormControl>
        <Button colorScheme="yellow">Submit Order</Button>
      </Box>

      {/* Shipping Information */}
      <Box as="section" py={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Shipping Information
        </Text>
        <FormControl id="shipping-info" mb={4}>
          <FormLabel>Shipping Address</FormLabel>
          <Textarea placeholder="Enter your shipping address" />
        </FormControl>
        <Text>Shipping policies, costs, and delivery times will be provided upon order confirmation.</Text>
      </Box>

      {/* Contact Us */}
      <Box as="section" py={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Contact Us
        </Text>
        <FormControl id="contact-form" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl id="contact-email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="contact-message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message" />
        </FormControl>
        <Button colorScheme="yellow">Submit</Button>
        <VStack mt={4} spacing={2} align="start">
          <Text>Email: contact@magicprintproduction.com</Text>
          <Text>Phone: +1234567890</Text>
          <Text>Address: 123 Magic Print St, Print City, PC 12345</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="https://facebook.com" icon={<FaFacebook />} aria-label="Facebook" colorScheme="yellow" />
            <IconButton as="a" href="https://twitter.com" icon={<FaTwitter />} aria-label="Twitter" colorScheme="yellow" />
            <IconButton as="a" href="https://instagram.com" icon={<FaInstagram />} aria-label="Instagram" colorScheme="yellow" />
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
