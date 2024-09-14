interface HeroProps {
  children: any | any[];
  heroImg?: string;
}

const Hero: React.FC<HeroProps> = ({ children, heroImg }) => {
  return (
    <div
      className="bg-blue-500 text-white bg-cover bg-center w-screen"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-black bg-opacity-50 w-screen h-full">
        <div className="px-4 py-16 flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
