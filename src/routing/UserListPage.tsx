const UserListPage = () => {
  const users = [
    { id: 1, name: "Mohamed" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Ali" },
  ];

  return (
    <ul className="list-group">
      {users.map(user => (
        <li className="list-group-item" key={user.id}>
          <a href="#">{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
