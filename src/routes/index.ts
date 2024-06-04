enum GENERAL_ROUTES {
  HOME = "/",
}

enum AUTH_ROUTES {
  LOGIN = "/login",
}

export const ROUTES = {
  ...GENERAL_ROUTES,
  ...AUTH_ROUTES,
};
