import "./TwitterFollowCard.scss";
import { FormatUserNameFunc } from "../../interfaces/FormatUsername";
import { useState } from "react";

interface TwitterFollowCardProps {
  userName?: string;
  name: string;
  formatUserName: FormatUserNameFunc;
}

export const TwitterFollowCard = ({
  name,
  userName = 'unknown',
  formatUserName,
}: TwitterFollowCardProps) => {
  
  const [isFollowing, setIsFollowing] = useState(false);

  const text = !isFollowing ? 'Follow' : 'unfollow';
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'
  const imgSrc = `https://unavatar.io/twitter/${userName}`;

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

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
          {text}
        </button>
      </aside>
    </article>
  );
};
