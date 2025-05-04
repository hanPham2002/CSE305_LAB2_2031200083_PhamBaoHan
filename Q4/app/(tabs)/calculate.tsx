import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Calculate = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState("");
  // Function to handle number inputs
  const handleNumberInput = (num: string) => {
    if (displayValue === "0") {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  // Function to handle operator inputs
  const handleOperatorInput = (operator: string | null) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };
  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === "+") {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === "-") {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === "*") {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === "/") {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue("");
  };
  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.displayValue}>{displayValue}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleNumberInput("7")}
          style={styles.buttonNumber}
        >
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberInput("8")}
          style={styles.buttonNumber}
        >
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberInput("9")}
          style={styles.buttonNumber}
        >
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOperatorInput("/")}
          style={styles.button}
        >
          <Text>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleNumberInput("4")}
          style={styles.buttonNumber}
        >
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberInput("5")}
          style={styles.buttonNumber}
        >
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberInput("6")}
          style={styles.buttonNumber}
        >
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOperatorInput("*")}
          style={styles.button}
        >
          <Text>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleNumberInput("1")}
          style={styles.buttonNumber}
        >
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberInput("2")}
          style={styles.buttonNumber}
        >
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberInput("3")}
          style={styles.buttonNumber}
        >
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleNumberInput("0")}
          style={styles.buttonNumber}
        >
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOperatorInput("+")}
          style={styles.button}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEqual()} style={styles.button}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Text>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9501",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  buttonNumber: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: 300,
    columnGap: 5,
  },
  displayValue: {
    fontSize: 40,
    marginBottom: 10,
  },
});
