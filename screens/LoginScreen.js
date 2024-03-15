import React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Center,
  Heading,
  Stack,
  Input,
  Icon,
  Button,
} from "native-base";
// icons
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = () => {
  // state management
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <NativeBaseProvider>
      <Box bg="#fff" flex={1}>
        <VStack
          space={2}
          justifyContent="center"
          alignItems="center"
          safeAreaTop
          my={9}
          mb={9}
        >
            {/* Image */}
          <Center>
            <Image
              size={160}
              borderRadius={30}
              source={{
                uri: "https://yt3.googleusercontent.com/ytc/AOPolaQ-l1_Uh6aLEIM-8YX-gQx4ORcUEp7eUllXAzl1=s900-c-k-c0x00ffffff-no-rj",
              }}
              alt="Alternate Text"
            />
          </Center>
        </VStack>
        <VStack space={5} my={2} alignItems={"center"}>
          <Text
            color={"#01295f"}
            bold
            fontSize={"xl"}
            maxW="300"
            w="80%"
            textAlign={"center"}
          >
            Sign In
          </Text>
        </VStack>
        <VStack space={2} alignItems={"center"}>
          <Text
            bold
            color={"#e3b26f"}
            fontSize={"lg"}
            maxW="300"
            w="80%"
            textAlign={"center"}
          >
            Login in to your account!
          </Text>
        </VStack>
        {/* Email or username */}
        <Stack space={4} my={8} w="75%" maxW="300px" mx="auto">
          <Input
            size={"lg"}
            value={email}
            onChangeText={(email) => setEmail(email)}
            w={{
              base: "100%",
              md: "55%",
            }}
            alignSelf={"center"}
            InputLeftElement={
              <Icon
                as={<AntDesign name="user" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Username or Email"
          />
        </Stack>
        {/* password */}
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            size={"lg"}
            value={password}
            onChangeText={(password) => setPassword(password)}
            w={{
              base: "100%",
              md: "55%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={<AntDesign name={show ? "lock" : "unlock"} />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
          />
        </Stack>
        {/* login/ register button */}
        <Stack space={4} my={10} w="75%" maxW="300px" mx="auto">
          {!email || !password ? (
            <Button
              colorScheme={"orange"}
              size="lg"
              borderRadius={10}
              variant="outline"
              isDisabled
            >
              Login
            </Button>
          ) : (
            <Button borderRadius={10} bgColor={"#ee5820"}>
              Login
            </Button>
          )}
        </Stack>
        {/* bottom text */}
        <Stack space={2} my={-8} w="75%" maxW="300px" mx="auto">
          <HStack justifyContent="center">
            <Text color={"grey"}>Don't have an Account?</Text>
            <Pressable onPress={() => console.log("heelo")}>
              <Text bold color={"#01295f"} ml={2}>
                Register Now
              </Text>
            </Pressable>
          </HStack>
        </Stack>
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
