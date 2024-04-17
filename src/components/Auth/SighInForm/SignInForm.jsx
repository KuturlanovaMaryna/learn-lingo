import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail('');
        setPassword('');

        toast.success('Login successful');
      })
      .catch(() => {
        toast.error("Sorry, couldn't find your account");
      });
  };
  return (
    <div>
      <form>
        <h2>Log In</h2>
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
        <button onClick={userLogin}>Login</button>
      </form>
    </div>
  );
};
