import { View, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import GoalItem from "../components/GoalItem";
import GoalInput from "@/components/GoalInput";

export type Goal = {
  text: string;
  id: string;
};

export default function Index() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = (): void => {
    if (enteredGoal && enteredGoal.trim().length > 0) {
      setCourseGoals((prevGoals) => [
        ...prevGoals,
        { text: enteredGoal, id: Math.random().toString() },
      ]);
      setEnteredGoal("");
    }
  };

  const deleteGoalHandler = (id: string): void => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        enteredGoal={enteredGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData.item}
                deleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
  },
});
