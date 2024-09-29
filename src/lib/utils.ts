import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validate = (
  minLengthValue: number,
  maxLengthValue: number,
  required: boolean = true
) => {
  return {
    required: required ? 'required' : false,
    maxLength: {
      value: maxLengthValue,
      message: `Maximum ${maxLengthValue} characters`
    },
    minLength: {
      value: minLengthValue,
      message: `Minimum ${minLengthValue} characters`
    }
  };
};

export const emailOptions = {
  required: 'required',
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'invalid email format'
  }
};
