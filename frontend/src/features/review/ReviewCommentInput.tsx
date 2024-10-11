import { useState } from "react";
import StarRating from "../../components/StarsReview";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ReviewCommentInput = () => {
  const [comment, setComment] = useState("");
  return (
    <div className="px-4 py-4 md:px-8 md:py-6 dark:bg-primary-600 ">
      <div className="mt-3 flex flex-row justify-start items-center gap-3">
        <p className="font-semibold">Califica tu producto:</p>
        <StarRating
          rating={0}
          maxStarsRating={5}
          size="medium"
          isEditable={true}
        />
      </div>
      <div className="py-6">
        <TextArea
          cols={40}
          rows={5}
          placeholder="Ingresa tu reseña aquí..."
          bgColor="bg-zinc-50"
          textColor="text-gray-800"
          borderColor="border-slate-500"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            console.log(e.target.value);
          }}
        />
        <div className="text-right mt-6">
          <Button label="Enviar" icon={faPaperPlane} rounded="medium" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCommentInput;
