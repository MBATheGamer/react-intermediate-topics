import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        nihil nam ab aliquam fuga voluptates quas perspiciatis adipisci
        obcaecati architecto veniam ipsum culpa atque delectus eligendi magni
        molestiae inventore cumque!
      </p>
      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
