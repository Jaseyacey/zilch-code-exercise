import { View, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import TransactionList from "../../components/TransactionList.json";
import React from "react";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <ThemedText style={styles.titleContainer} type="title">
          List of transactions
        </ThemedText>
      </View>
      <FlatList
        style={styles.stepContainer}
        data={TransactionList}
        renderItem={({ item }) => (
          <>
            <View style={styles.transactionList}>
              <Text style={{ fontSize: 12 }}>{item.date}</Text>
              <Text style={{ fontSize: 12 }}>{item.retailer}</Text>
              <Text style={{ fontSize: 12 }}>£{item.amount}</Text>
              <Text style={{ fontSize: 12 }}>£{item.balance}</Text>
            </View>
            <View style={styles.underline} />
          </>
        )}
        keyExtractor={(item) => item.date}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  transactionList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
});
