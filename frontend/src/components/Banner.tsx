import { ReactNode } from "react";

interface BannerProps {
  children: ReactNode | ReactNode[];
  bannerImg?: string;
  backgroundColor?: string;
}

const Banner: React.FC<BannerProps> = ({
  children,
  bannerImg = "",
  backgroundColor = "",
}) => {
  const bannerStyles = bannerImg
    ? { backgroundImage: `url(${bannerImg})` }
    : undefined;
  return (
    <div
      className={`text-white bg-cover bg-center w-full h-full ${backgroundColor}`}
      style={bannerStyles}
    >
      <div className="px-4 py-16 flex flex-col justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
};

export default Banner;
