import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../stores/todo.store";

export default function AddTaskScreen({ route, navigation }) {
  const [value, setValue] = useState("");

  const { todoList } = useSelector((state) => state.todoTasks);
  const dispatch = useDispatch();

  const addTAskk = () => {
    dispatch(addTask({ id: Math.random(), task: value }));
  };

  useEffect(() => {
    if (__DEV__) {
      console.log("list " + JSON.stringify(todoList));
    }
  }, [todoList]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Tarea</Text>
        <TextInput
          placeholder="Escriba su tarea"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTAskk}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flexDirection: "row",
  },
  textInput: {
    width: "60%",
    height: 50,
    borderWidth: 0.5,
    padding: 5,
  },
  addButton: {
    backgroundColor: "green",
    height: 50,
    width: 100,
  },
});
