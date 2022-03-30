import { SocialLoginType } from "@arcana/auth";
import { useState } from "react";
import { getArcanaAuth } from "./utils";

const App = () => {
  const [arcanaAccount, setArcanaAccount] = useState(null);

  const connectArcana = async () => {
    const arcanaAuth = await getArcanaAuth({ baseUrl: window.location.origin });
    await arcanaAuth.loginWithSocial(SocialLoginType.google);
    if (arcanaAuth.isLoggedIn()) {
      const userInfo = arcanaAuth.getUserInfo();
      setArcanaAccount(userInfo);
    }
  };

  return arcanaAccount ? (
    <div>Connected to Arcana: {arcanaAccount.userInfo.email}</div>
  ) : (
    <button onClick={connectArcana}>Connect to Arcana</button>
  );
};

export default App;
