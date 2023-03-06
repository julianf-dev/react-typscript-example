import "./App.scss";
import { TwitterFollowCard } from "../components/TwitterFollowCard";
import { FormatUserNameFunc } from "../interfaces/FormatUsername";
import { User } from "../interfaces/users.model";

const users: User[] = [
  {
    initialFollow: false,
    name: "Marco",
    userName: "unknown",
  },
  {
    initialFollow: true,
    name: "Pedro",
    userName: "pedro123",
  },
  {
    initialFollow: false,
    name: "Julio",
    userName: "julian123",
  },
];

export const App = () => {


  return (
    <section className="App">
      {users.map(({ userName, name, initialFollow }) => 
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialFollow={initialFollow}
          /> )}
    </section>
  );
};
