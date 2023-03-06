import "./TwitterFollowCard.scss";
import { FormatUserNameFunc } from "../../interfaces/FormatUsername";

interface TwitterFollowCardProps {
  isFollowing: boolean;
  userName: string;
  name: string;
  formatUserName:FormatUserNameFunc 
}

export const TwitterFollowCard = ({
  isFollowing,
  name,
  userName,
  formatUserName,
}: TwitterFollowCardProps ) => {
  const imgSrc = `https://unavatar.io/twitter/${userName}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imgSrc}
          alt="avatar julian"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-inforUserName">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">follow</button>
      </aside>
    </article>
  );
};
