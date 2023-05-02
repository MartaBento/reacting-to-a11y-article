import * as Form from "@radix-ui/react-form";

function UserCountry() {
  return (
    <Form.Field name="country">
      <Form.Label className="text-sm font-bold">Country</Form.Label>
      <Form.Control asChild>
        <input
          className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-sm shadow-md border-fernGreen bg-gray-200"
          type="text"
          value="United States"
          placeholder="e.g. United States"
          disabled
        />
      </Form.Control>
    </Form.Field>
  );
}

export default UserCountry;
