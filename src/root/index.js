import React, { useState } from "react";
import MainContext from "../context ";
import BackgroundDesktop from "../components/BgDesktop";
import Form from "../components/Form ";
import ThankYou from "../components/ThankYou";
const Root = () => {
  const [cardholderName, setCardholderName] = useState("JANE APPLESEED");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [expireMonth, setExpireMonth] = useState("00");
  const [expireYear, setExpireYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <MainContext.Provider
      value={{
        cardholderName,
        cardNumber,
        expireMonth,
        expireYear,
        cvc,
        setCardholderName,
        setCardNumber,
        setExpireMonth,
        setExpireYear,
        setCvc,
        setShowThankYou,
      }}
    >
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <BackgroundDesktop />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          {showThankYou ? <ThankYou /> : <Form />}
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Root;
