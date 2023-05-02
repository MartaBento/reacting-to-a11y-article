import * as Form from "@radix-ui/react-form";

function UserPostalCode() {
  const errorMessageStyle = "text-[10px] text-red-700 font-bold opacity-80";

  return (
    <Form.Field name="zip">
      <Form.Label className="text-sm font-bold">Postal Code</Form.Label>
      <Form.Control asChild>
        <input
          className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-sm shadow-md border-fernGreen"
          type="text"
          placeholder="e.g. 10001"
          required
          pattern="^\d{5}$"
        />
      </Form.Control>
      <Form.Message className={errorMessageStyle} match="valueMissing">
        Please enter your postal code.
      </Form.Message>
      <Form.Message className={errorMessageStyle} match="patternMismatch">
        Please enter a US postal code in the format of five digits.
      </Form.Message>
    </Form.Field>
  );
}

export default UserPostalCode;
