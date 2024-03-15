import React, { useState } from "react";
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

import { AntDesign } from "@expo/vector-icons";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <LoginScreen/>
  );
}
