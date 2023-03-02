import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ILoginFormValue } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValue>();
  const { userLogin } = useContext(UserContext);
  const submit: SubmitHandler<ILoginFormValue> = (FormData) => {
    userLogin(FormData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Seu Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Sua Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
