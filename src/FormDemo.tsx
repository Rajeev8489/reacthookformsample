import React, { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputDropdown } from "./formComponent/FormInputDropdown";
import { FormInputMultiCheckbox } from "./formComponent/FormInputMultiCheckbox";
import { FormInputRadio } from "./formComponent/FormInputRadio";
import { FormInputText } from "./formComponent/FormInputText";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface IFormInput {
  textValue: string;
  radioValue: string;
  state: string;
  languages: string[];
}

const defaultValues = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  city: "",
  state: "",
  languages: []
};
export const FormDemo: React.FC = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    gender: Yup.string().required('Gender is required'),
    email: Yup.string().required('Email  is required').email('Email is invalid'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
  });
  const methods = useForm<IFormInput>({ resolver: yupResolver(validationSchema) });
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (data: IFormInput) => window.alert(JSON.stringify(data));

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "30px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h4">Form Demo</Typography>
      <FormInputText label="First Name" name="firstName" control={control} />
      <FormInputText label="Last Name" name="lastName" control={control} />
      <FormInputRadio
        label={"Gender"}
        name={"gender"}
        control={control}
      />
      <FormInputText label="Email" name="email" control={control} />
      <FormInputText label="City" name="city" control={control} />
      <FormInputDropdown
        label="State"
        name="state"
        control={control}
      />
      <FormInputMultiCheckbox
        label={"Languages"}
        name={"languages"}
        control={control}
        setValue={setValue}
      />
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit{" "}
      </Button>
      <Button onClick={() => reset(defaultValues)} variant={"outlined"}>
        Reset{" "}
      </Button>
    </Paper>
  );
};