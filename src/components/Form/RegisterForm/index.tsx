import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValue } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValue>();

  const { userRegister } = useContext(UserContext);
  const submit: SubmitHandler<IRegisterFormValue> = (FormData) => {
    userRegister(FormData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Seu Nome'
        register={register('name')}
        error={errors.name}
      />
      <Input
        type='email'
        label='Seu Email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        type='password'
        label='Sua Senha'
        register={register('password')}
        error={errors.password}
      />
      <Input
        type='password'
        label='Confirmar Senha'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
