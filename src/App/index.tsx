import "./App.scss";
import { TwitterFollowCard } from "../components/TwitterFollowCard";
import { FormatUserNameFunc } from "../interfaces/FormatUsername";

export const App = () => {  

  const format:FormatUserNameFunc = (userName:string) => `@${userName}`

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName="julian1david"
        name="Julian David"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName="midudev"
        name="Miguel Duran"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing={false}
        userName="freddier"
        name="Freddy Vega"
      />
    </section>
  );
};
