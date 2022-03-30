import { AuthProvider } from "@arcana/auth";

// Util function for getting arcana auth object
export const getArcanaAuth = async ({ baseUrl }) => {
  const redirectUri = new URL("oauth-redirect/google", baseUrl).href;
  return await AuthProvider.init({
    appID: process.env.REACT_APP_ARCANA_APP_ID,
    redirectUri,
    flow: "popup",
  });
};
