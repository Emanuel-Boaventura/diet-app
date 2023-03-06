import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LoadingIcon = styled(ActivityIndicator)``;