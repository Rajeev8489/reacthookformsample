import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
  label,
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
    <FormControl size={"small"} variant={"outlined"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value} label={label}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};