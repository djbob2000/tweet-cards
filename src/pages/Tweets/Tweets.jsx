import { useLocation, useNavigate } from "react-router-dom";
import { CardsList } from "../../components/CardsList/CardsList";

const Tweets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state ? location.state : "/";

  const handleBack = () => {
    navigate(previousPath);
  };

  return (
    <>
      ❮<button onClick={handleBack}>Back</button>
      <CardsList />
    </>
  );
};

export default Tweets;
