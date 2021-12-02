import { loginFullfielled, loginRefused, loginStart } from "./userRedux";
import { publicRequest } from "../requests";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginFullfielled(res.data));
  } catch (error) {
    dispatch(loginRefused());
  }
};
