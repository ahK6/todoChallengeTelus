import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AddTaskScreen from "./AddTaskScreen";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const { todoList } = useSelector((state) => state.todoTasks);

  const goToAddTask = () => {
    router.navigate("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={(item) => (
          <View>
            <Text style={{ color: "black" }}>{item.task}</Text>
          </View>
        )}
      />

      <TouchableOpacity onPress={() => {}} style={{}}>
        <AddTaskScreen />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
