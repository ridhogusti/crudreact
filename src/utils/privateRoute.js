import NotFound from "../containers/NotFound";
import { USER_AUTH } from "../utils/constants";

// Authorization HOC
function Authorization(WrappedComponent, allowedRoles) {
  let user = JSON.parse(localStorage.getItem(USER_AUTH));

  const { role } = user;
  if (allowedRoles.includes(role)) {
    return WrappedComponent;
  } else {
    return NotFound;
  }
}

export default Authorization;
