import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

type props = {
  goalInputHandler: (enteredText: string) => void;
  addGoalHandler: () => void;
  enteredGoal: string;
  closeModal: () => void;
  isShown: boolean;
};

const GoalInput = ({
  goalInputHandler,
  enteredGoal,
  addGoalHandler,
  closeModal,
  isShown,
}: props) => {
  const addGoal = (enteredGoal: string) => {
    if (enteredGoal && enteredGoal.length > 0) {
      addGoalHandler();
      closeModal();
    }
  };

  return (
    <Modal visible={isShown} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/favicon.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="grey"
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button onPress={closeModal} title="Cancel" color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => addGoal(enteredGoal)}
              title="Add Goal"
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",

    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    borderRadius: 6,
    padding: 16,
    color: "#120438",
  },
  buttonView: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 50,
    height: 50,
    margin: 20,
    marginTop: 250,
    marginBottom: 75,
  },
});

export default GoalInput;
