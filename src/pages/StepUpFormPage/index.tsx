import React from "react";
import StepUpForm from "../../components/StepUpForm";
import Step from "../../components/StepUpForm/Step";

const StepUpFormPage = () => {
  return (
    <StepUpForm>
      <Step>Step 1</Step>
      <Step>Step 2</Step>
      <Step>Step 3</Step>
      <Step>Step 4</Step>
      <Step>Step 5</Step>
    </StepUpForm>
  );
};

export default StepUpFormPage;
