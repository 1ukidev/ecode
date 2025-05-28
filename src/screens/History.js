import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Database from "../Database";
import { commonStyles } from "../Styles";

export default History = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const scoresData = await Database.getValue("scores");
      setScores(scoresData ? JSON.parse(scoresData) : []);
    };

    fetchScores();
  }, []);

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.itemsContainer}>
        {scores.length === 0 ? (
          <Text style={styles.noItemsText}>Nenhum registro encontrado</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={scores}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.scoreItem}>
                <Text style={styles.scoreText}>Aula: {item.level}</Text>
                <Text style={styles.scoreText}>
                  Pontuação: {item.value} / {item.total}
                </Text>
                <Text style={styles.scoreText}>Data: {item.date}</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {},

  scoreItem: {
    backgroundColor: "#222",
    padding: 20,
    marginVertical: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "white",
  },

  scoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  noItemsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
