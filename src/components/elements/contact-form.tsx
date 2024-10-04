'use client';

import React from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';

import Field from '@/components/ui/field';
import Button from '@/components/ui/button';
import Loading from '@/components/ui/loading';

import { ClassProps } from '@/ts/interfaces';
import { cn, emailOptions, validate } from '@/lib/utils';
import { sendMessage } from '@/services/contact';

const ContactForm: React.FC<ClassProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' });
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      await sendMessage(formData);

      toast.success('The message was successfully sent', { duration: 3000 });
      reset();
    } catch (error) {
      console.error(error);

      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Error ${errorMessage}, please try resubmitting the form`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#070B10',
            color: '#F9F8F8',
            border: '1px solid #212530'
          }
        }}
      />
      <form className={cn('form-bg rounded-2xl p-16', className)} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10 flex gap-4">
          <Field
            wrapperClassName="w-1/2"
            inputClassName="field-bg"
            title="Full Name"
            name="fullName"
            placeholder="Full Name"
            disabled={isLoading}
            register={register}
            options={validate(8, 64)}
            error={typeof errors?.fullName?.message === 'string' ? errors?.fullName?.message : ''}
          />
          <Field
            wrapperClassName="w-1/2"
            inputClassName="field-bg"
            title="Email"
            type="email"
            name="email"
            placeholder="hello@noctua.com"
            disabled={isLoading}
            register={register}
            options={emailOptions}
            error={typeof errors?.email?.message === 'string' ? errors?.email?.message : ''}
          />
        </div>
        <Field
          inputClassName="field-bg mb-10"
          title="How can we help you?"
          name="message"
          placeholder="Describe your problem in at least 250 characters"
          textarea
          disabled={isLoading}
          register={register}
          options={validate(16, 1024)}
          error={typeof errors?.message?.message === 'string' ? errors?.message?.message : ''}
        />
        <div className="flex">
          <Button
            className="mx-auto border-cyan px-14 py-4 text-cyan focus-visible:outline-white"
            variant="outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loading className="mr-3" /> : null} Send Message
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
