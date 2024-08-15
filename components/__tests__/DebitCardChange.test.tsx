import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import DebitCardChange from "@/app/(tabs)/debitCards";

describe("DebitCardChange", () => {
  beforeAll(() => {
    global.alert = jest.fn();
  });
  it("should render the title", () => {
    const { getByText } = render(<DebitCardChange />);
    expect(getByText("Change your Debit Card")).toBeTruthy();
  });

  it("should handle input changes", () => {
    const { getByPlaceholderText } = render(<DebitCardChange />);

    const cardNumberInput = getByPlaceholderText("Card Number");
    const expiryDateInput = getByPlaceholderText("Expiry Date");
    const cvvInput = getByPlaceholderText("CVV");

    fireEvent.changeText(cardNumberInput, "1234567812345678");
    fireEvent.changeText(expiryDateInput, "1225");
    fireEvent.changeText(cvvInput, "123");

    expect(cardNumberInput.props.value).toBe("1234567812345678");
    expect(expiryDateInput.props.value).toBe("1225");
    expect(cvvInput.props.value).toBe("123");
  });

  it("should validate the form and show alerts for invalid inputs", async () => {
    const { getByText, getByPlaceholderText } = render(<DebitCardChange />);
    const submitButton = getByText("Submit");

    fireEvent.press(submitButton);
    await waitFor(() =>
      expect(alert).toHaveBeenCalledWith("Card number must be 16 digits")
    );

    fireEvent.changeText(
      getByPlaceholderText("Card Number"),
      "1234567812345678"
    );
    fireEvent.press(submitButton);
    await waitFor(() =>
      expect(alert).toHaveBeenCalledWith("Expiry date must be 4 digits")
    );

    fireEvent.changeText(getByPlaceholderText("Expiry Date"), "1225");
    fireEvent.press(submitButton);
    await waitFor(() =>
      expect(alert).toHaveBeenCalledWith("CVV must be 3 digits")
    );
  });

  it("should submit form successfully with valid input", async () => {
    const { getByPlaceholderText, getByText } = render(<DebitCardChange />);
    const submitButton = getByText("Submit");

    fireEvent.changeText(
      getByPlaceholderText("Card Number"),
      "1234567812345678"
    );
    fireEvent.changeText(getByPlaceholderText("Expiry Date"), "1225");
    fireEvent.changeText(getByPlaceholderText("CVV"), "123");

    fireEvent.press(submitButton);
    await waitFor(() =>
      expect(alert).toHaveBeenCalledWith("Card details submitted successfully")
    );
  });
});
