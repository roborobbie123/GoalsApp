import { View, StyleSheet, FlatList, Button } from "react-native";
import React, { useState } from "react";
import GoalItem from "../components/GoalItem";
import GoalInput from "@/components/GoalInput";
import { StatusBar } from "expo-status-bar";

export type Goal = {
  text: string;
  id: string;
};

export default function Index() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [isModalShown, setIsModalShown] = useState(false);

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

  const openModalHandler = (): void => {
    setIsModalShown(true);
  };
  const closeModalHandler = (): void => {
    setIsModalShown(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={openModalHandler}
          color="#b180f0"
        />
        {isModalShown && (
          <GoalInput
            goalInputHandler={goalInputHandler}
            addGoalHandler={addGoalHandler}
            enteredGoal={enteredGoal}
            closeModal={closeModalHandler}
            isShown={isModalShown}
          />
        )}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 6,
  },
});
