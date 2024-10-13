import React, { ComponentProps } from 'react';

import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { cn } from '@/lib/utils';

interface FieldProps extends ComponentProps<'input'> {
  register: UseFormRegister<FieldValues>;
  name: string;
  options?: RegisterOptions;
  isLoading?: boolean;
  title: string;
  textarea?: boolean;
  error?: string;
  wrapperClassName?: string;
  inputClassName?: string;
}

const Field: React.FC<FieldProps> = ({
  wrapperClassName,
  inputClassName,
  title,
  name,
  placeholder,
  textarea = false,
  error,
  register,
  options,
  disabled,
  type
}) => {
  return (
    <div className={cn('flex flex-col gap-2', wrapperClassName)}>
      <div className="flex items-center">
        <label className="text-lg 2xl:text-base">{title}</label>
        {error && <p className="ml-2 text-red-500 2xl:text-sm">- {error}</p>}
      </div>
      {!textarea ? (
        <input
          {...register(name, options)}
          className={cn(
            'rounded-xl p-3 disabled:pointer-events-none disabled:opacity-50',
            inputClassName
          )}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
        />
      ) : (
        <textarea
          {...register(name, options)}
          className={cn(
            'max-h-56 min-h-36 rounded-xl p-3 disabled:pointer-events-none disabled:opacity-50',
            inputClassName
          )}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default Field;
