import React from "react";
import { render, screen } from "@testing-library/react-native";
import HomeScreen from "../../app/(tabs)/index";
import TransactionList from "../../components/TransactionList.json";

describe("HomeScreen Component", () => {
  it("renders correctly", () => {
    render(<HomeScreen />);
  });

  it("displays the title 'List of transactions'", () => {
    render(<HomeScreen />);
    const titleElement = screen.getByText("List of transactions");
    expect(titleElement).toBeTruthy();
  });

  it("renders the correct number of transactions", () => {
    render(<HomeScreen />);
    const transactionItems = screen.getAllByTestId("transaction-item");
    expect(transactionItems.length).toBe(TransactionList.length);
  });

  it("displays the correct details for all transactions", () => {
    render(<HomeScreen />);
    TransactionList.forEach((transaction) => {
      expect(screen.getAllByText(transaction.date)).toBeTruthy();
      expect(screen.getAllByText(transaction.retailer)).toBeTruthy();
      expect(screen.getAllByText(`£${transaction.amount}`)).toBeTruthy();
      expect(screen.getAllByText(`£${transaction.balance}`)).toBeTruthy();
    });
  });

  it("matches the snapshot", () => {
    const component = render(<HomeScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
