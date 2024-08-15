import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import TransactionList from "../../components/TransactionList.json";
import React from "react";

export default function TabTwoScreen() {
  const mostMoneySpent = () => {
    const totals: { [key: string]: number } = {};
    TransactionList.forEach((transaction) => {
      if (totals[transaction.retailer]) {
        totals[transaction.retailer] += transaction.amount;
      } else {
        totals[transaction.retailer] = transaction.amount;
      }
    });
    let maxRetailer = Object.keys(totals)[0];
    for (let retailer in totals) {
      if (totals[retailer] > totals[maxRetailer]) {
        maxRetailer = retailer;
      }
    }
    Alert.alert("Retailer with Most Money Spent", maxRetailer);
  };

  const mostAmountsOfVisits = () => {
    const visits: { [key: string]: number } = {};
    TransactionList.forEach((transaction) => {
      if (visits[transaction.retailer]) {
        visits[transaction.retailer]++;
      } else {
        visits[transaction.retailer] = 1;
      }
    });

    let maxVisitsRetailer = Object.keys(visits)[0];
    for (let retailer in visits) {
      if (visits[retailer] > visits[maxVisitsRetailer]) {
        maxVisitsRetailer = retailer;
      }
    }
    Alert.alert("Retailer with Most Visits", maxVisitsRetailer);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <ThemedText style={styles.titleContainer} type="title">
          Most Visited Retailers
        </ThemedText>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button} onPress={mostMoneySpent}>
          <Text>Most Money Spent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mostAmountsOfVisits}>
          <Text>Most Amounts of Visits</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    padding: 16,
    height: 50,
    width: 331,
    backgroundColor: "#007BFF", // Change this to your preferred color
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 10, // Add this line
  },
  buttonBox: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 16,
  },
});
