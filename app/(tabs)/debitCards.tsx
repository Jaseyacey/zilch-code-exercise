import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import React from "react";

export default function DebitCardChange() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const handleSubmit = () => {
    if (formValidation()) {
      alert("Card details submitted successfully");
    } else {
      alert("Card details invalid");
    }
  };

  const formValidation = () => {
    if (cardNumber.length !== 16) {
      alert("Card number must be 16 digits");
      return false;
    }
    if (expiryDate.length !== 4) {
      alert("Expiry date must be 4 digits");
      return false;
    }
    if (cvv.length !== 3) {
      alert("CVV must be 3 digits");
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <ThemedText style={styles.titleContainer} type="title">
          Change your Debit Card
        </ThemedText>
      </View>
      <View>
        <View style={styles.formInput}>
          <TextInput
            style={styles.input}
            onChangeText={setCardNumber}
            value={cardNumber}
            inputMode="numeric"
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setExpiryDate}
            value={expiryDate}
            placeholder="Expiry Date"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCvv}
            value={cvv}
            placeholder="CVV"
            keyboardType="numeric"
            secureTextEntry
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  setExpiryDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  formInput: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
});
