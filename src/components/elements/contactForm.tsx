'use client';

import React from 'react';

import { FieldValues, useForm } from 'react-hook-form';

import Field from '@/components/ui/field';
import Button from '@/components/ui/button';

import { ClassProps } from '@/ts/interfaces';
import { cn, emailOptions, validate } from '@/lib/utils';

const ContactForm: React.FC<ClassProps> = ({ className }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const sendFormData = (formData: FieldValues) => {
    console.log(formData);
  };
  
  return (
    <form className={cn('p-16 rounded-2xl form-bg', className)} onSubmit={handleSubmit(sendFormData)}>
      <div className="flex gap-4 mb-10">
        <Field
          className="w-1/2"
          title="Full Name"
          name="fullName"
          placeholder="Full Name"
          register={register}
          options={validate(8, 64)}
          error={typeof errors?.fullName?.message === 'string' ? errors?.fullName?.message : ''}
        />
        <Field
          className="w-1/2"
          title="Email"
          type="email"
          name="email"
          placeholder="hello@noctua.com"
          register={register}
          options={emailOptions}
          error={typeof errors?.email?.message === 'string' ? errors?.email?.message : ''}
        />
      </div>
      <Field
        className="mb-10"
        title="How can we help you?"
        name="text"
        placeholder="Describe your problem in at least 250 characters"
        textarea
        register={register}
        options={validate(16, 1024)}
        error={typeof errors?.text?.message === 'string' ? errors?.text?.message : ''}
      />
      <div className="flex">
        <Button
          className="border-cyan text-cyan py-4 px-14 mx-auto focus-visible:outline-white"
          variant="outline"
          type="submit"
        >Send Message</Button>
      </div>
    </form>
  );
};

export default ContactForm;
