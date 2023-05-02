import BaseForm from "@components/checkout/form/BaseForm";
import UserAddress from "@components/checkout/form/UserAddress";
import UserCity from "@components/checkout/form/UserCity";
import UserCountry from "@components/checkout/form/UserCountry";
import UserInfo from "@components/checkout/form/UserInfo";
import UserPostalCode from "@components/checkout/form/UserPostalCode";

function ShippingInformationForm() {
  const handleOnClick = () => {
    console.log("Add your implementation here.");
  };

  return (
    <BaseForm onClick={handleOnClick}>
      <UserInfo type="first" />
      <UserInfo type="last" />
      <UserAddress />
      <UserPostalCode />
      <UserCity />
      <UserCountry />
    </BaseForm>
  );
}

export default ShippingInformationForm;
