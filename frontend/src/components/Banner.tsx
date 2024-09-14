interface BannerProps {
  children: any | any[];
  bannerImg?: string;
}

const Banner: React.FC<BannerProps> = ({ children, bannerImg }) => {
  return (
    <div
      className="bg-blue-500 text-white bg-cover bg-center w-full h-full"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full">
        <div className="px-4 py-16 flex flex-col justify-center items-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
