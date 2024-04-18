import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  FormFields,
  FormField,
  FormBtn,
  FormFieldPassvordConteiner,
  FormFieldPassvord,
  EyeSvgOpen,
  EyeSvgClose,
  Title,
  Text,
} from './SignInForm.styled';

const initialValues = {
  email: '',
  password: '',
};
const logInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Field is required.'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters.')
    .max(20, 'Password is too Long!')
    .required('Field is required.'),
});

export const SignIn = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const userLogin = async (values, { resetForm }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        console.log(user);
        resetForm();
        closeModal();

        toast.success('Login successful');
      })
      .catch((error) => {
        toast.error({ error });
      });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={logInSchema}
        onSubmit={userLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <FormFields>
              <Title>Log In</Title>
              <Text>
                Welcome back! Please enter your credentials to access your
                account and continue your search for an teacher.
              </Text>
              <FormField
                name="email"
                type="email"
                placeholder="Email"
                error={errors.email && touched.email ? 'true' : 'false'}
              />

              <FormFieldPassvordConteiner>
                <FormFieldPassvord
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  error={errors.password && touched.password ? 'true' : 'false'}
                />

                {showPassword ? (
                  <EyeSvgOpen
                    size="20"
                    onClick={togglePasswordVisibility}
                  ></EyeSvgOpen>
                ) : (
                  <EyeSvgClose
                    size="20"
                    onClick={togglePasswordVisibility}
                  ></EyeSvgClose>
                )}
              </FormFieldPassvordConteiner>

              <FormBtn type="submit">Log In</FormBtn>
            </FormFields>
          </Form>
        )}
      </Formik>
    </div>
  );
};
