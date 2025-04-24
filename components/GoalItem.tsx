import { StyleSheet, View, Text, Pressable } from "react-native";
import { Goal } from "../app/index";

type props = {
  itemData: Goal;
  deleteGoal: (id: string) => void;
};
const GoalItem = ({ itemData, deleteGoal }: props) => {
  return (
    <Pressable onPress={() => deleteGoal(itemData.id)} style={({ pressed }) => pressed && styles.pressedItem}>
      <View>
        <Text style={styles.goalListItem}>{itemData.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalListItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    fontSize: 15,
  },
  pressedItem: {
    opacity: 0.5,
  }
});
