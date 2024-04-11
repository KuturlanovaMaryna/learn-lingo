import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [error, setError] = useState('');

  const userRegister = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail('');
        setPassword('');
        // setError('');
        toast.success('Registration successful');
      })
      .catch((error) => {
        toast.error({ error });
      });
  };
  return (
    <div>
      <form onSubmit={userRegister}>
        <h2>Registration</h2>
        <input
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <input
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <button> Sign Up</button>
      </form>
    </div>
  );
};
