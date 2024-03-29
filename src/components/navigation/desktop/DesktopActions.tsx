import BecomeSellerButton from "@/components/buttons/BecomeSellerButton";
import OrderButton from "@/components/buttons/OrderButton";

const DesktopActions = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <BecomeSellerButton />
      <OrderButton
        className="bg-danger text-background focus:bg-danger/90 hover:bg-danger/90"
        label="შეუკვეთე ახლავე"
      />
    </div>
  );
};

export default DesktopActions;
