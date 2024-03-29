import { generateRandomNumber } from "@/lib/generateRandomNumber";

interface ServicesRandomNumberProps {
  min: number;
  max: number;
}

const ServicesRandomNumber: React.FC<ServicesRandomNumberProps> = ({
  min,
  max,
}) => {
  const randomNumber = generateRandomNumber(min, max);

  return (
    <p className="text-center small">
      24 საათში ნანახია
      <span className="font-bold text-danger"> {" " + randomNumber}</span>-ჯერ
    </p>
  );
};

export default ServicesRandomNumber;
