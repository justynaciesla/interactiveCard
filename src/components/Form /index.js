import React, { useContext } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  StyledFieldWrapper,
  StyledWrapper,
  StyledLabel,
  StyledField,
  StyledErrorWrapper,
  StyledForm,
  StyledFieldDate,
  StyledFieldWrapperExpireDate,
  StyledButton,
  StyledFieldDateWrapper,
  StyledFieldDateWrapperTwo
} from "./StyledForm";
import MainContext from "../../context ";

const formValidationSchema = Yup.object().shape({
  cardholderName: Yup.string().required("Can't be blank").min(3, "Min 3 char"),
  cardNumber: Yup.number()
    .required("Can't be blank")
    .typeError("Wrong format, numbers only"),

  expMonth: Yup.number()
    .typeError("Wrong format, numbers only")
    .min(0, "Min value 0.")
    .max(12, "Max value 12.")
    .required("Can't be blank"),
  expYear: Yup.number()
    .min(new Date().getFullYear().toString().slice(2))
    .required("Can't be blank"),
  cvc: Yup.number()
    .typeError("Wrong format, numbers only")
    .required("Can't be blank"),
});

const Form = () => {
  const {
    setCardholderName,
    setCardNumber,
    setExpireMonth,
    setExpireYear,
    setCvc,
    setShowThankYou,
  } = useContext(MainContext);
  return (
    <Formik
      initialValues={{
        cardholderName: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvc: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        setShowThankYou(true);
        resetForm();
      }}
      validateOnChange
    >
      {({ values, handleChange }) => (
        <StyledForm>
          <StyledFieldWrapper>
            <StyledLabel htmlFor="cardholderName">CARDHOLDER NAME</StyledLabel>
            <StyledField
              id="cardholderName"
              type="text"
              name="cardholderName"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => {
                handleChange(e);
                console.log(e.target.value);
                setCardholderName(e.target.value.toUpperCase());
              }}
            />
            <StyledErrorWrapper>
              <ErrorMessage name="cardholderName" />
            </StyledErrorWrapper>
          </StyledFieldWrapper>
          <StyledFieldWrapper>
            <StyledLabel htmlFor="cardNumber">CARD NUMBER</StyledLabel>
            <StyledField
              id="cardNumber"
              type="text"
              name="cardNumber"
              placeholder="e.g. 1234 5678 9123 0000"
              maxlength="19"
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim();
                handleChange(e);
                setCardNumber(
                  e.target.value
                    .replace(/[^\dA-Z]/g, "")
                    .replace(/(.{4})/g, "$1 ")
                    .trim()
                );
              }}
            />
            <StyledErrorWrapper>
              <ErrorMessage name="cardNumber" />
            </StyledErrorWrapper>
          </StyledFieldWrapper>

          <StyledFieldWrapperExpireDate>
            <StyledFieldWrapper>
              <StyledLabel htmlFor="expMonth">EXP.DATE (MM/YY)</StyledLabel>
              <StyledWrapper>
                <StyledFieldDateWrapper>
                  <StyledFieldDate
                    id="expMonth"
                    type="text"
                    name="expMonth"
                    placeholder="MM"
                    maxlength="2"
                    onChange={(e) => {
                      handleChange(e);
                      console.log(e.target.value);
                      setExpireMonth(e.target.value);
                    }}
                  />
                  <StyledErrorWrapper>
                    <ErrorMessage name="expMonth" />
                  </StyledErrorWrapper>
                </StyledFieldDateWrapper>
                <StyledFieldDateWrapperTwo>
                  <StyledFieldDate
                    id="expYear"
                    type="text"
                    name="expYear"
                    placeholder="YY"
                    maxlength="2"
                    onChange={(e) => {
                      handleChange(e);
                      setExpireYear(e.target.value);
                    }}
                  />
                  <StyledErrorWrapper>
                    <ErrorMessage name="expYear" />
                  </StyledErrorWrapper>
                </StyledFieldDateWrapperTwo>
              </StyledWrapper>
            </StyledFieldWrapper>

            <StyledFieldWrapper>
              <StyledLabel htmlFor="cvc">CVC</StyledLabel>
              <StyledFieldDate
                id="cvc"
                type="text"
                name="cvc"
                placeholder="e.g. 123"
                maxlength="3"
                onChange={(e) => {
                  handleChange(e);
                  console.log(e.target.value);
                  setCvc(e.target.value);
                }}
              />
              <StyledErrorWrapper>
                <ErrorMessage name="cvc" />
              </StyledErrorWrapper>
            </StyledFieldWrapper>
          </StyledFieldWrapperExpireDate>

          <StyledButton type="submit">Confirm</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
