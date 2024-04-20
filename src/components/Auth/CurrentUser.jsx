import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CurrentUser = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userLogOut = () => {
    signOut(auth)
      .then(toast.success('Signed Out'))
      .catch((error) => {
        toast.error({ error });
      });
  };
  return (
    <div>
      {authUser ? (
        <div>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button onClick={userLogOut}>Log Out</button>
        </div>
      ) : (
        toast.success('Signed Out')
      )}
    </div>
  );
};
