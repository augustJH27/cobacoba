import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {

  return () => {
  axios
    .post(
      "https://heroku-authentication.herokuapp.com/api/auth/login",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const { data } = response;

      if (data.status === "FAILED") {
        const { message } = data;

        // check for specific error
        if (message.includes("credentials")) {
          setFieldError("email", message);
          setFieldError("password", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        }
      } else if (data.status === "SUCCESS") {
        const userData = data.data[0];

        const token = userData._id;

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                history.push("/customer-page");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }

      //complete submission
      setSubmitting(false);
    })
    .catch((err) => console.error(err));
}
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {

    return (dispatch) => {
  axios
    .post(
      "https://heroku-authentication.herokuapp.com/api/auth/register",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const { data } = response;

      if (data.status === "FAILED") {
        const { message } = data;

        // checking for specific error
        if (message.includes("firstName")) {
          setFieldError("firstName", message);
				} else if (message.includes("lastName")) {
          setFieldError("lastName", message);
        } else if (message.includes("email")) {
          setFieldError("email", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        } else if (message.includes("confirmPassword")) {
          setFieldError("confirmPassword", message);
        }

        // complete submission
        setSubmitting(false);
      } else if (data.status === "SUCCESS") {
        // Login user after successful signup
        const { email, password } = credentials;

        dispatch(
          loginUser({ email, password }, history, setFieldError, setSubmitting)
        );
      }
    })
    .catch((err) => console.error(err));

}
};

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push('/');
    }
};