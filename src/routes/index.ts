export const ROUTES = {
  home: "/",
  hi: "/hi",
  login: "/login",
  register: {
    root: "/register",
    phone: "/register/phone",
    password: "/register/password",
    faceId: "/register/faceId",
    modal: {
      twoFA: "/register/modal/2fa",
      faceId: "/register/modal/faceId",
    },
  },
  onboarding: "/onboarding",
  statistics: "/statistics",
  contacts: {
    root: "/contacts",
    modal: {
      sort: "/contacts/modal/sort",
    },
  },
  audioRecording: "/audio-recording",
} as const;

export const publicRoutes = [
  ROUTES.login,
  ROUTES.register.root,
  ROUTES.onboarding,
  ROUTES.hi,
];

// forbidden means user can not see them if has a auth session
export const forbiddenPublics = [ROUTES.login, ROUTES.register.root, ROUTES.hi];
