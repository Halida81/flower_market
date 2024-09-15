import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import openEye from "../../assets/icons/open_eye.svg";
import closeEye from "../../assets/icons/close_eye.svg";


const Input = ({ label, type = "password", errorText, width, ...props }) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <InputField type={inputType} error={errorText} {...props} />
        {props?.variant === "password" && type === "password" && (
          <ToggleButton type="button" onClick={togglePasswordVisibility}>
            {inputType === "password" ? (
              <Image src={closeEye} alt="eye Icon" />
            ) : (
              <Image src={openEye} alt="eye Icon" />
            )}
          </ToggleButton>
        )}
      </InputWrapper>
      {errorText ? <ErrorText>{errorText}</ErrorText> : ""}
      {}
    </div>
  );
};

export default Input;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => (props.errorText ? "red" : "#ccc")};
  border-radius: ${(props) => (props.borderRadius ? borderRadius : "")};
  border-color: ${(props) => (props.borderColor ? borderColor : "#9F8479")};
  font-size: 16px;
  width: ${(props) => (props.width ? "100%" : "auto")};
  height: ${(props) => (props.height ? "100%" : "auto")};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0070f3;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 112, 255, 0.2);
  }
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #9f8479;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #0070f3;
  padding: 5px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const InputWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? "100%" : "auto")};
`;