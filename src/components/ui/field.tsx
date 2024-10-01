import React, { ComponentProps } from 'react';

import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface FieldProps extends ClassProps, ComponentProps<'input'> {
  register: UseFormRegister<FieldValues>;
  name: string;
  options?: RegisterOptions;
  isLoading?: boolean;
  title: string;
  textarea?: boolean;
  error?: string;
}

const Field: React.FC<FieldProps> = ({
  className,
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
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-center">
        <label className="text-lg">{title}</label>
        {error && <p className="ml-2 text-red-500">- {error}</p>}
      </div>
      {!textarea ? (
        <input
          {...register(name, options)}
          className="field-bg rounded-xl p-3 disabled:pointer-events-none disabled:opacity-50"
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
        />
      ) : (
        <textarea
          {...register(name, options)}
          className="field-bg max-h-56 min-h-36 rounded-xl p-3 disabled:pointer-events-none disabled:opacity-50"
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default Field;
