import { useEffect, useState } from 'react';
import './Users.scss';
import { User } from '../User';
import { getUsers } from '../../api/users.api';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    const data = await getUsers();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <section className="users">
        <div className="container grid grid__col-3">
          {users.map((c) => (
            <User key={c.id} user={c} />
          ))}
        </div>
      </section>
    </>
  );
};
