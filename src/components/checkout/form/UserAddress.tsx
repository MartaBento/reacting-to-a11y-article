import * as Form from "@radix-ui/react-form";

function UserAddress() {
  const errorMessageStyle = "text-[10px] text-red-700 font-bold opacity-80";

  return (
    <Form.Field name="address1">
      <Form.Label className="text-sm font-bold">Shipping Address</Form.Label>
      <Form.Control asChild>
        <input
          className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-sm shadow-md border-fernGreen"
          type="text"
          placeholder="Your street address"
          required
        />
      </Form.Control>
      <Form.Message className={errorMessageStyle} match="valueMissing">
        Please enter your street address.
      </Form.Message>
    </Form.Field>
  );
}

export default UserAddress;
