import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function executeOnAddGoal() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add your goal here"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="cancel"
              onPress={props.closeModal}
              color={"#2b0c52"}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="add goal"
              onPress={executeOnAddGoal}
              color={"#92c3f0"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#3c00ff",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bea1a1",
    backgroundColor: "#fbfbfb",
    width: "90%",
    color: "#df3333",
    marginRight: 8,
    padding: 8,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
