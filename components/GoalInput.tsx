import { View, TextInput, Button, StyleSheet } from "react-native";

type props = {
  goalInputHandler: (enteredText: string) => void;
  addGoalHandler: () => void;
  enteredGoal: string;
};

const GoalInput = ({
  goalInputHandler,
  enteredGoal,
  addGoalHandler,
}: props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        value={enteredGoal}
        style={styles.textInput}
        placeholder="Your course goal!"
        placeholderTextColor="#cccccc"
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    borderRadius: 10,
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
