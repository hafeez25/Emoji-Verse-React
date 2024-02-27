import React, { useState, useEffect } from "react";
import * as data from "emoji-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faShare, faHeadphones, faThumbtack, faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card: React.FC<{
  data: data.Emoji;
}> = (props) => {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const pinnedStatus = localStorage.getItem(props.data.name);
    if (pinnedStatus === "true") {
      setIsPinned(true);
    }
  }, [props.data.name]);

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


  const listenEmojiName = () => {
    // Check for browser support
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(props.data.name);
      
      // Optionally, you can configure properties of the utterance object, such as the voice and rate
      // utterance.voice = ...; // Set the voice
      // utterance.rate = ...;  // Set the rate of speech
      
      // Call the speechSynthesis speak() method
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };
  

  const pinEmoji = () => {
    const newPinnedStatus = !isPinned;
    setIsPinned(newPinnedStatus);
    // Update local storage
    localStorage.setItem(props.data.name, newPinnedStatus.toString());
  };

  const downloadEmojiImage = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (context) {
      // Set canvas size based on the emoji size
      canvas.width = 128;
      canvas.height = 128;

      context.font = "96px Arial";
      context.fillText(props.data.emoji, 0, 96);

      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `${props.data.name}.png`;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    }
  };

  return (
    <div
      className={`rounded-md flex flex-col items-center justify-between text-center shadow-md p-8 hover:shadow-lg dark:hover:transiton dark:bg-slate-900 dark:text-white dark:hover:bg-slate-600 dark:hover:transition ${isPinned ? 'pinned' : ''}`}
    >
      <span className="text-6xl" style={{ cursor: 'pointer' }}>
        {props.data.emoji}
      </span>
      <span className="text-xl capitalize pt-3">{props.data.name}</span>

      {/* Hidden by default, visible on hover */}
      <div className="flex gap-4 pt-3">
        <button className="btn-icon" onClick={copyToClipboard}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <button className="btn-icon" onClick={shareEmoji}>
          <FontAwesomeIcon icon={faShare} />
        </button>
        <button className={`btn-icon ${isPinned ? 'pinned-icon' : ''}`} onClick={pinEmoji}>
          <FontAwesomeIcon icon={faThumbtack} />
        </button>
        <button className="btn-icon" onClick={downloadEmojiImage}>
          <FontAwesomeIcon icon={faDownload} />
        </button>
        <button> 
          <FontAwesomeIcon icon={faHeadphones} onClick={listenEmojiName}/>
        </button>

      </div>
    </div>
  );
};

export default Card;
