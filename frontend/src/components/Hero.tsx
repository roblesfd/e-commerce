interface HeroProps {
  children: any | any[];
  heroImg?: string;
}

const Hero: React.FC<HeroProps> = ({ children, heroImg }) => {
  return (
    <header
      className="bg-blue-500 text-white bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-black bg-opacity-50 w-screen h-full">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          {children}
        </div>
      </div>
    </header>
  );
};

export default Hero;
