import { Button, FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function toggleModalVisibility() {
    setModalIsVisible(!modalIsVisible);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentStateGoals) => [
      { text: enteredGoalText, id: Math.random().toString() },
      ...currentStateGoals,
    ]);
    toggleModalVisibility();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentStateGoals) => {
      const result = currentStateGoals.filter((goal) => goal.id !== id);
      return result;
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Toggle Modal" onPress={toggleModalVisibility} />
        <GoalInput
          visible={modalIsVisible}
          closeModal={toggleModalVisibility}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    marginTop: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
