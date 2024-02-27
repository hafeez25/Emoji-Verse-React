import React from "react";
import * as data from "emoji-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faShare } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card: React.FC<{
  data: data.Emoji;
}> = (props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.data.emoji);
    alert("Emoji copied to clipboard!");
  };

  const shareEmoji = () => {
    const shareText = `Check out this emoji: ${props.data.emoji}`;
    navigator
      .share({
        title: "Emoji Share",
        text: shareText,
        url: window.location.href,
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  };

  return (
    <div className="group rounded-md flex flex-col items-center justify-between text-center shadow-md p-8 hover:shadow-lg dark:hover:transiton dark:bg-slate-900 dark:text-white dark:hover:bg-slate-600 dark:hover:transition">
      <span className="text-6xl">{props.data.emoji}</span>
      <span className="text-xl capitalize pt-3">{props.data.name}</span>

      {/* Hidden by default, visible on hover */}
      <div className="hidden group-hover:flex gap-4 pt-3">
        <button className="btn-icon" onClick={copyToClipboard}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <button className="btn-icon" onClick={shareEmoji}>
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
    </div>
  );
};

export default Card;
