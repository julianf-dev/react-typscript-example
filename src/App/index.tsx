import "./App.scss";
import { TwitterFollowCard } from "../components/TwitterFollowCard";
import { FormatUserNameFunc } from "../interfaces/FormatUsername";

export const App = () => {  

  const formatUserName:FormatUserNameFunc = (userName:string) => `@${userName}`

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="julian1david"
        name="Julian David"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Miguel Duran"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="freddier"
        name="Freddy Vega"
      />
    </section>
  );
};
