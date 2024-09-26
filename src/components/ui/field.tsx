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

const Field: React.FC<FieldProps> = ({ className, title, name, placeholder, textarea = false, error, register, options }) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-center">
        <label className="text-lg">{title}</label>
        {error && <p className="text-red-500 ml-2">- {error}</p>}
      </div>
      {!textarea
        ? <input {...register(name, options)} className="field-bg p-3 rounded-xl" name={name} placeholder={placeholder} />
        : <textarea {...register(name, options)} className="field-bg p-3 rounded-xl max-h-56 min-h-36" name={name} placeholder={placeholder} />
      }
    </div>
  );
};

export default Field;
