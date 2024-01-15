import Section from "../ui/section";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";

const Hero = ({ url }: { url: string | undefined }) => {
  return (
    <Section className="">
      <div
        className="w-full px-6 pt-10 pb-16 text-center rounded-xl md:px-10 lg:px-14 xl:px-20 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-30 md:text-start md:pb-16 lg:pb-32 xl:pb-48 2xl:pb-60"
        style={{
          backgroundImage: "url(hero-bg.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroHeading />
        <p className="md:max-w-xl mb:8 md:mb-10 lg:mb-12">
          განათავსე შეკვეთა და მიიღე პროფესიონალურად შესრულებული ნაშრომი
          მინიმალური ძალისხმევით, უმოკლეს დროში
        </p>

        <HeroButtons />
      </div>
    </Section>
  );
};

export default Hero;