import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

export const FormInputRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error }
      }) => (
        <FormControl
          {...(error && { error: true })}
          sx={{ border: '1px groove lightgrey', p: 1 }}
          component="fieldset">
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup row aria-label="label" name="row-radio-buttons-group" value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
          <FormHelperText>{error ? error.message : null}</FormHelperText>
        </FormControl>
      )}
    />
  );
};