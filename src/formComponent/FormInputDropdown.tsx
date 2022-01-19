import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "Andhra Pradesh",
    value: "andhrapradesh",
  },
  {
    label: "Karnataka",
    value: "karnataka",
  },
];

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };
  
  return (
    <Controller
        render={({ field: { onChange, value },fieldState: { error } }) => (
            <FormControl 
            {...(error && {error:true})}
           size={"small"} variant={"outlined"}
    >
      <InputLabel>{label}</InputLabel>
          <Select onChange={onChange} value={value} label={label} error={!!error}>
            {generateSingleOptions()}
          </Select>
          <FormHelperText>{error ? error.message : false}</FormHelperText>
          </FormControl>
        )}
        control={control}
        name={name}
      />
  );
};