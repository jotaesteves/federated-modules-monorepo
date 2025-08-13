import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '../Button/Button';
import InputWithLabel from '../InputWithLabel/InputWithLabel';

const userFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

const SomeForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  console.log('form errors ', errors);

  const onSubmit: SubmitHandler<UserFormSchema> = (data) => {
    console.log('onSubmit data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="firstName"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <InputWithLabel
              id="firstName"
              label="First name"
              autoComplete="given-name"
              ref={ref}
              errorMessage={errors.firstName?.message}
              {...field}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="lastName"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <InputWithLabel
              id="lastName"
              label="Last name"
              autoComplete="family-name"
              ref={ref}
              errorMessage={errors.lastName?.message}
              {...field}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <InputWithLabel
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              ref={ref}
              errorMessage={errors.email?.message}
              {...field}
            />
          )}
        />
      </div>
      <div style={{ marginTop: 12 }}>
        <Button type="submit">Submit Form</Button>
      </div>
    </form>
  );
};

export default SomeForm;
