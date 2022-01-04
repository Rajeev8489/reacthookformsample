import React, { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputDropdown } from "./formComponent/FormInputDropdown";
import { FormInputMultiCheckbox } from "./formComponent/FormInputMultiCheckbox";
import { FormInputRadio } from "./formComponent/FormInputRadio";
import { FormInputText } from "./formComponent/FormInputText";

interface IFormInput {
  textValue: string;
  radioValue: string;
  state: string;
  languages: string[];
  sliderValue: number;
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
export const FormDemo = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
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
          name={"gender"}
          control={control}
          label={"Gender"}
        />
        <FormInputText label="Email" name="email" control={control} />
        <FormInputText label="City" name="city" control={control} />
        <FormInputDropdown
          name="state"
          control={control}
          label="State"
        />
        <FormInputMultiCheckbox
          control={control}
          setValue={setValue}
          name={"languages"}
          label={"Languages"}
        />
        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
          Submit{" "}
        </Button>
        <Button onClick={() => reset()} variant={"outlined"}>
          Reset{" "}
        </Button>
    </Paper>
  );
};