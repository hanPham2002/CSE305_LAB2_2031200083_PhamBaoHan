import Styles from "@/components/Styles";
import React from "react";
import {
  ScrollView,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Login</Text>

        <TextInput
          style={Styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
        />

        <TextInput
          style={Styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText as StyleProp<TextStyle>}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
