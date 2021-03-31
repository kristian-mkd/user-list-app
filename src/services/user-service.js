import HARDCODED_USERS from '../data/users.js';
import COUNTRIES from '../data/countries.js';
import FuzzySearch from 'fuzzy-search';

const getUsers = () => {
  return augmentUsers(HARDCODED_USERS);
};

/**
 * Enriches all of the users with additional properties like country and full name.
 *
 * @param users the users that will be augmented
 * @returns the list of augmented users
 */
const augmentUsers = (users) => {
  return [...users].map((user) => ({
    ...user,
    country: getRandomCountry(),
    fullName: `${user.firstname} ${user.lastname}`,
  }));
};

const sortUsers = (users) =>
  [...users].sort((user1, user2) => parseInt(user1.age) - parseInt(user2.age));

const getRandomCountry = () => {
  const randomNumber = Math.floor(Math.random() * COUNTRIES.length - 1) + 1;
  return COUNTRIES[randomNumber];
};

const filterUsers = (searchTerm) => {
  const sanitizedSearchTerm = searchTerm.toLowerCase().trim();
  const shouldFilterUsers = sanitizedSearchTerm.length >= 3;

  const allUsers = getUsers();
  let resultUsers = [...allUsers];
  if (shouldFilterUsers) {
    const searchOptions = { caseSensitive: false };
    const searcher = new FuzzySearch(allUsers, ['fullName'], searchOptions);
    resultUsers = searcher.search(sanitizedSearchTerm);
  }

  return {
    filteredUsers: resultUsers,
    totalNumberOfUsers: allUsers.length,
  };
};

export { getUsers, filterUsers, sortUsers };
