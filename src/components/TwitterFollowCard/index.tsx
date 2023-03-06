import "./TwitterFollowCard.scss";
import { useState } from "react";
import { User } from "../../interfaces/users.model";
import { FormatUserNameFunc } from "../../interfaces/FormatUsername";




export const TwitterFollowCard = ({
  initialFollow,
  name,
  userName = 'unknown',
}: User) => {
  
  const [isFollowing, setIsFollowing] = useState(initialFollow);
initialFollow
  const text = !isFollowing ? 'Follow' : 'Following';
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'
  const imgSrc = `https://unavatar.io/twitter/${userName}`;

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

   const formatUserName: FormatUserNameFunc = (userName: string) =>
    `@${userName}`;

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
          <span className="tw-followCard-inforUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button 
        onClick={handleFollow}
        className={buttonClassName}>
          <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
};
function formatUserName(userName: string) {
  throw new Error("Function not implemented.");
}

