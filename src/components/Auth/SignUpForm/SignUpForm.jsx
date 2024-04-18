import { createUserWithEmailAndPassword } from 'firebase/auth';
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
} from './SignUpForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const signUpSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(2, 'The name must have at least 2 letters'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password must be at least 6 characters'),
});

export const SignUp = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const userRegister = async (values, { resetForm }) => {
    createUserWithEmailAndPassword(
      auth,

      values.email,
      values.password
    )
      .then((user) => {
        console.log(user);
        resetForm();
        closeModal();

        toast.success('Registration successful');
      })
      .catch((error) => {
        toast.error({ error });
      });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={userRegister}
      >
        {({ errors, touched }) => (
          <Form>
            <FormFields>
              <Title>Registration</Title>
              <Text>
                Thank you for your interest in our platform! In order to
                register, we need some information. Please provide us with the
                following information
              </Text>
              <FormField
                name="name"
                type="text"
                placeholder="Name"
                error={errors.name && touched.name ? 'true' : 'false'}
              />
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

              <FormBtn type="submit">Sign Up</FormBtn>
            </FormFields>
          </Form>
        )}
      </Formik>
    </div>
  );
};
