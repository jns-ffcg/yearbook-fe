import { useParams } from "react-router-dom";

function StravaAuth() {
  const { code } = useParams();
  return <div>This is strava...{code}</div>;
}

export default StravaAuth;
