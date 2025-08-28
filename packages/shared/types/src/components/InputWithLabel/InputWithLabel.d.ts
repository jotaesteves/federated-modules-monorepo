import React from 'react';
import './InputWithLabel.css';
export type InputWithLabelProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: boolean;
  errorMessage?: string;
};
declare const InputWithLabel: React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    id?: string;
    labelClassName?: string;
    inputClassName?: string;
    error?: boolean;
    errorMessage?: string;
  } & React.RefAttributes<HTMLInputElement>
>;
export default InputWithLabel;
//# sourceMappingURL=InputWithLabel.d.ts.map
