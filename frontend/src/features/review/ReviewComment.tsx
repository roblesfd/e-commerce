import LikeDislikeButton from "../../components/LikeDislikeButton";
import StarRating from "../../components/StarsReview";
import Typography from "../../components/Typography";
import UserThumbnail from "../../components/UserThumbnail";

const ReviewComment = () => {
  return (
    <div className="px-4 py-4 md:px-8 md:py-6 dark:bg-primary-600 ">
      <div className="flex flex-row justify-start items-center gap-6">
        <UserThumbnail
          altText="Avatar de usuario"
          size="large"
          name="John Doe"
          direction="row"
        />
        <p className="text-gray-600 text-sm">El 25 de Febrero de 2024</p>
      </div>
      <div className="mt-3 flex flex-row justify-start items-center gap-3">
        <StarRating rating={4.5} maxStarsRating={5} size="small" />
        <p className="font-semibold">Me gusto mucho m producto UwU</p>
      </div>
      <div className="py-6">
        <Typography type="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore
          dolorum culpa rerum fugit laborum repudiandae totam distinctio!
          Voluptatibus, amet id maiores dolores pariatur blanditiis?
        </Typography>
      </div>
      <div>
        <LikeDislikeButton initialLikes={10} initialDislikes={2} />
      </div>
    </div>
  );
};

export default ReviewComment;
