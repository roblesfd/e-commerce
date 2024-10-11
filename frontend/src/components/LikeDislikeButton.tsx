import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type LikeDislikeButtonProps = {
  initialLikes?: number;
  initialDislikes?: number;
};

const LikeDislikeButton: React.FC<LikeDislikeButtonProps> = ({
  initialLikes = 0,
  initialDislikes = 0,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [userAction, setUserAction] = useState<"like" | "dislike" | null>(null);

  const handleLike = () => {
    if (userAction === "like") return;
    if (userAction === "dislike") {
      setDislikes(dislikes - 1);
    }
    setLikes(likes + 1);
    setUserAction("like");
  };

  const handleDislike = () => {
    if (userAction === "dislike") return;
    if (userAction === "like") {
      setLikes(likes - 1);
    }
    setDislikes(dislikes + 1);
    setUserAction("dislike");
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Botón de like */}
      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded ${
          userAction === "like"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        <FontAwesomeIcon icon={faThumbsUp} /> {likes}
      </button>

      {/* Botón de dislike */}
      <button
        onClick={handleDislike}
        className={`px-4 py-2 rounded ${
          userAction === "dislike"
            ? "bg-red-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        <FontAwesomeIcon icon={faThumbsDown} /> {dislikes}
      </button>
    </div>
  );
};

export default LikeDislikeButton;
