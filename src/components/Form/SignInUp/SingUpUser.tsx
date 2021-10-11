import React, { useRef } from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar, DoctorCheckButton } from './FormStyle';
import { IDoctor } from './type';
import { Email, Required, Birthday, PhoneNumber, Password } from './validationConstants';
import { useForm } from 'react-hook-form';

const SignUpUser: React.FC<IDoctor> = ({ setDoctor }) => {
  const onSubmit = (data: any) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // errors,
  } = useForm() as any;

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Сreate an account </FormName>
        <DoctorCheckButton>
          Are you doctor?
          <span
            onClick={() => {
              setDoctor(true);
            }}
          >
            Click here.
          </span>
        </DoctorCheckButton>

        <Input
          primary
          placeholder="Name"
          type="text"
          name="name"
          register={register('name', Required)}
          errors={errors}
        />

        <Input
          primary
          placeholder="Last Name"
          type="text"
          name="last name"
          register={register('last name', Required)}
          errors={errors}
        />

        <Input
          primary
          placeholder="Birthday"
          type="text"
          name="birthday"
          register={register('birthday', Birthday)}
          errors={errors}
        />

        <Input
          primary
          type="text"
          name="email"
          register={register('email', Email)}
          placeholder="Email"
          errors={errors}
        />

        <Input
          primary
          type="text"
          name="phone number"
          register={register('phone number', PhoneNumber)}
          placeholder="Phone number"
          errors={errors}
        />

        <Input
          primary
          type="text"
          name="address"
          register={register('address', Required)}
          placeholder="Address"
          errors={errors}
        />

        {/* <Input
          primary
          type="text"
          name="work place"
          register={register('work place', Required)}
          placeholder="Work Place"
          errors={errors}
        /> */}

        <Input
          primary
          name="password"
          type="password"
          placeholder="Password"
          register={register('password', Password)}
          errors={errors}
        />

        <Input
          primary
          name="password_repeat"
          type="password"
          placeholder="Repeat Password"
          register={register('password_repeat', {
            validate: (value: any) => value === password.current || 'The passwords do not match',
          })}
          errors={errors}
        />

        <ButtonBar>
          <Button type="submit" round>
            Sign Up
          </Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SignUpUser;
