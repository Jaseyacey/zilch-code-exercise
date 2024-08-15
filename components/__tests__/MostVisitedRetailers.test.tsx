import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import TabTwoScreen from "@/app/(tabs)/explore";
import { Alert } from "react-native";

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  RN.Alert.alert = jest.fn();
  return RN;
});

describe("TabTwoScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = render(<TabTwoScreen />);
    expect(getByText("Most Visited Retailers")).toBeTruthy();
    expect(getByText("Most Money Spent")).toBeTruthy();
    expect(getByText("Most Amounts of Visits")).toBeTruthy();
  });

  it('calls the mostMoneySpent function when "Most Money Spent" button is pressed', async () => {
    const { getByText } = render(<TabTwoScreen />);
    const button = getByText("Most Money Spent");

    fireEvent.press(button);

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        "Retailer with Most Money Spent",
        expect.any(String)
      );
    });
  });

  it('calls the mostAmountsOfVisits function when "Most Amounts of Visits" button is pressed', async () => {
    const { getByText } = render(<TabTwoScreen />);
    const button = getByText("Most Amounts of Visits");

    fireEvent.press(button);

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        "Retailer with Most Visits",
        expect.any(String)
      );
    });
  });
});
