import React from 'react';
import UserComponent from './UserComponent.jsx';

export default function UserListComponent(props) {
  const { users } = props;

  return (
    <>
      {users.length > 0 ? (
          <div className="user-list">
            <ul>
              {users.map((user) => (
                <UserComponent {...{ userData: user, key: user.id }} />
              ))}
            </ul>
          </div>
        ) : (
          <div>Results are empty</div>
        )}
    </>
  );
}
