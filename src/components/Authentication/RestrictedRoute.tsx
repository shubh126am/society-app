import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";

enum ALLOWED_CASES {
  LOGGED_IN_USERS = 1,
  LOGGED_OUT_USERS = 0
}

interface Props extends RouteProps {
  onlyAllow: ALLOWED_CASES;
  loggedIn: boolean;
}

class RestrictedRouteImpl extends React.Component<Props> {
  static LOGGED_IN_USERS = ALLOWED_CASES.LOGGED_IN_USERS;
  static LOGGED_OUT_USERS = ALLOWED_CASES.LOGGED_OUT_USERS;

  render() {
    const { component, ...rest } = this.props;

    if (!component) {
      throw Error("component is undefined");
    }

    const Component = component; // JSX Elements have to be uppercase.

    /*
            Since we need to render the requested component if
                userLoggedIn = true && onlyAllow = true (LOGGED_IN_USERS)
                                    OR
                userLoggedIn = false && onlyAllow = false (LOGGED_OUT_USERS)

            We need a logical biconditional, which outputs true only when both inputs are the same
        */
    if (this.props.loggedIn === Boolean(this.props.onlyAllow)) {
      return <Route {...rest} render={props => <Component {...props} />} />;
    }

    if (
      this.props.loggedIn &&
      this.props.onlyAllow === ALLOWED_CASES.LOGGED_OUT_USERS
    ) {
      // user is logged in, but resource is allowed for LOGGED_OUT_USERS only
      // don't allow the user look at the page, redirect to "HomePage"
      // e.g. once logged in, user shouldn't be able to look at the "LoginPage"
      return (
        <Route
          {...rest}
          render={props => {
            return <Redirect to={{ pathname: "/home" }} />;
          }}
        />
      );
    } else {
      // user is logged out, but resource is allowed for LOGGED_IN_USERS only
      // don't allow the user look at the page, redirect to "LoginPage"
      // e.g. once logged out, user shouldn't be able to look at the "HomePage"
      return (
        <Route
          {...rest}
          render={props => (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )}
        />
      );
    }
  }
}

function mapStateToProps(state: any) {
  const { loggedIn } = state.get("authentication");
  return { loggedIn };
}

/**
 * RestrictedRoute Component
 *
 * This is a wrapper on Router Component to only allow when set conditions are matched.
 * - If the user is logged in
 *      - and component is allowed only for `LOGGED_IN_USERS` then render it
 *      - and component is allowed only for `LOGGED_OUT_USERS` then go back
 * - If the user is logged out
 *      - and component is allowed only for `LOGGED_OUT_USERS` then render it
 *      - and component is allowed only for `LOGGED_IN_USERS` then redirect to login page
 *
 * @param { ALLOWED_CASES } onlyAllow: static values `LOGGED_IN_USERS`, `LOGGED_OUT_USERS`
 */
export const RestrictedRoute = connect(mapStateToProps)(RestrictedRouteImpl);
