import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  return (
    <div>
      <h1>User {params.id}</h1>
      <h3>{searchParams.get("name")}</h3>
      <p>URL: {location.pathname + location.search}</p>
    </div>
  );
};

export default UserDetailPage;
