'use client';

import React from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import Field from '@/components/ui/field';
import Button from '@/components/ui/button';
import Loading from '@/components/ui/loading';
import Head from 'next/head';

import { useRouter } from 'next/navigation';
import { emailOptions, passwordOptions } from '@/lib/utils';
import { login } from '@/lib/auth';

const AdminAuth: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange' });
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const onSubmit = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      await login(formData);

      router.push('/');
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
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#070B10',
            color: '#F9F8F8',
            border: '1px solid #212530'
          }
        }}
      />
      <div className="container mt-20 flex-col gap-10 flex-center">
        <h1 className="text-center text-[48px] font-medium md:text-[38px] sm:text-[30px]">
          Admin panel authorization
        </h1>
        <form
          className="form-bg w-[820px] rounded-2xl px-16 py-12 lg:w-[600px] lg:px-12 lg:py-8 md:w-[480px] md:px-6 sm:w-[340px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field
            wrapperClassName="mb-10 sm:mb-4"
            inputClassName="field-bg"
            title="Email"
            name="email"
            placeholder="admin@gmail.com"
            disabled={isLoading}
            register={register}
            options={emailOptions}
            error={typeof errors?.email?.message === 'string' ? errors?.email?.message : ''}
          />
          <Field
            inputClassName="field-bg"
            title="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            disabled={isLoading}
            register={register}
            options={passwordOptions}
            error={typeof errors?.password?.message === 'string' ? errors?.password?.message : ''}
          />
          <div className="flex">
            <Button
              className="mx-auto mt-10 border-cyan px-14 py-4 text-cyan focus-visible:outline-white 2xl:w-[200px] xl:w-[150px] sm:mt-6 sm:w-full"
              variant="outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loading className="mr-3" /> : null} Log In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminAuth;
