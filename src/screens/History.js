import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Database from "../Database";
import { commonStyles } from "../Styles";

const { width } = Dimensions.get("window");

export default History = () => {
  const [scores, setScores] = useState([]);
  const [stats, setStats] = useState({
    totalTests: 0,
    averageScore: 0,
    bestScore: 0,
    totalPoints: 0,
    accuracy: 0,
    streak: 0,
  });

  useEffect(() => {
    (async () => {
      const scoresData = await Database.getValue("scores");
      const parsedScores = scoresData ? JSON.parse(scoresData) : [];
      setScores(parsedScores);
      calculateStats(parsedScores);
    })();
  }, []);

  const calculateStats = (scoresArray) => {
    if (scoresArray.length === 0) return;

    const totalTests = scoresArray.length;
    const totalPoints = scoresArray.reduce(
      (sum, score) => sum + score.value,
      0
    );
    const totalPossible = scoresArray.reduce(
      (sum, score) => sum + score.total,
      0
    );
    const averageScore = Math.round((totalPoints / totalPossible) * 100);
    const bestScore = Math.max(
      ...scoresArray.map((score) =>
        Math.round((score.value / score.total) * 100)
      )
    );
    const accuracy = Math.round((totalPoints / totalPossible) * 100);

    let currentStreak = 0;
    for (let i = scoresArray.length - 1; i >= 0; i--) {
      const percentage = (scoresArray[i].value / scoresArray[i].total) * 100;
      if (percentage >= 70) {
        currentStreak++;
      } else {
        break;
      }
    }

    setStats({
      totalTests,
      averageScore,
      bestScore,
      totalPoints,
      accuracy,
      streak: currentStreak,
    });
  };

  const getScoreColor = (value, total) => {
    const percentage = (value / total) * 100;
    if (percentage >= 80) return "#4CAF50";
    if (percentage >= 60) return "#FF9800";
    return "#F44336";
  };

  const getPerformanceLevel = () => {
    if (stats.averageScore >= 80) return { level: "Excelente", emoji: "🏆" };
    if (stats.averageScore >= 60) return { level: "Bom", emoji: "⭐" };
    return { level: "Precisa melhorar", emoji: "📚" };
  };

  const StatCard = ({ title, value }) => (
    <View style={[styles.statCard, { borderLeftColor: "white" }]}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );

  const performance = getPerformanceLevel();

  return (
    <SafeAreaView style={[commonStyles.container, { padding: 28 }]}>
      {scores.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>📊</Text>
          <Text style={styles.noItemsText}>Nenhum registro encontrado</Text>
          <Text style={styles.emptySubtext}>
            Complete alguns testes para ver seu progresso aqui!
          </Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[{ type: "header" }, ...scores]}
          keyExtractor={(item, index) =>
            item.type === "header" ? "header" : index.toString()
          }
          renderItem={({ item }) => {
            if (item.type === "header") {
              return (
                <View>
                  <View style={styles.performanceCard}>
                    <Text style={styles.performanceEmoji}>
                      {performance.emoji}
                    </Text>
                    <Text style={styles.performanceLevel}>
                      {performance.level}
                    </Text>
                  </View>

                  <View style={styles.statsGrid}>
                    <StatCard
                      title="Testes realizados"
                      value={stats.totalTests}
                    />
                    <StatCard
                      title="Média geral"
                      value={`${stats.averageScore}%`}
                    />
                    <StatCard
                      title="Melhor resultado"
                      value={`${stats.bestScore}%`}
                    />
                    <StatCard title="Sequência atual" value={stats.streak} />
                  </View>
                </View>
              );
            }

            const percentage = Math.round((item.value / item.total) * 100);
            const scoreColor = getScoreColor(item.value, item.total);

            return (
              <View style={styles.scoreItem}>
                <View style={styles.scoreHeader}>
                  <View style={styles.levelBadge}>
                    <Text style={styles.levelText}>{item.level}</Text>
                  </View>
                  <View
                    style={[
                      styles.percentageBadge,
                      { backgroundColor: scoreColor },
                    ]}
                  >
                    <Text style={styles.percentageText}>{percentage}%</Text>
                  </View>
                </View>

                <View style={styles.scoreDetails}>
                  <Text style={styles.scoreText}>
                    Pontuação: {item.value} / {item.total}
                  </Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>

                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${percentage}%`,
                        backgroundColor: scoreColor,
                      },
                    ]}
                  />
                </View>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  performanceCard: {
    backgroundColor: "#1E1E1E",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  performanceEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },

  performanceLevel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statCard: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    width: (width - 60) / 2,
    marginBottom: 12,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },

  statTitle: {
    fontSize: 12,
    color: "#B0B0B0",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  scoreItem: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    marginVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#333",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },

  scoreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  levelBadge: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  levelText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },

  percentageBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  percentageText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },

  scoreDetails: {
    marginBottom: 12,
  },

  scoreText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    marginBottom: 4,
  },

  dateText: {
    fontSize: 14,
    color: "#B0B0B0",
  },

  progressBar: {
    height: 6,
    backgroundColor: "#333",
    borderRadius: 3,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 3,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },

  noItemsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },

  emptySubtext: {
    fontSize: 16,
    color: "#B0B0B0",
    textAlign: "center",
    lineHeight: 24,
  },
});
