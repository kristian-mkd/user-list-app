import { useState } from 'react';
import './styles/App.css';
import UserListComponent from './components/UserListComponent.jsx';
import { getUsers, filterUsers, sortUsers } from './services/user-service.js';

function App() {
  const [users, setUsers] = useState(getUsers());
  const [isFiltering, setIsFiltering] = useState(false);
  const [areUsersSorted, setAreUsersSorted] = useState(false);

  const sortUsersHandler = () => {
    setAreUsersSorted(true);
    return setUsers(sortUsers(users));
  };

  const filterUsersHandler = (event) => {
    const searchInput = event.target.value;
    const { totalNumberOfUsers, filteredUsers } = filterUsers(searchInput);
    const hasFilteredUsers = totalNumberOfUsers !== filteredUsers.length;
    setIsFiltering(hasFilteredUsers);
    setUsers(areUsersSorted ? sortUsers(filteredUsers) : filteredUsers);
  };

  return (
    <div className="App">
      <div className="codeflair-assignment">
        <section className="user-filter">
          <label htmlFor="input-field">Filter Users by Name</label>
          <input type="text" onChange={filterUsersHandler} />
          {isFiltering ? <label>Filtered users: {users.length}</label> : <></>}

          {/* <transition name="fade">
            <span className="user-filter__no-users-found"></span>
          </transition> */}

          <button className="filter-button" onClick={sortUsersHandler}>
            Sort by Age
          </button>
        </section>
        <UserListComponent {...{ users }} />
      </div>
    </div>
  );
}

export default App;
