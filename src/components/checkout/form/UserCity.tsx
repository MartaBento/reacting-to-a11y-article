import * as Form from "@radix-ui/react-form";

function UserCity() {
  return (
    <Form.Field name="city">
      <Form.Label className="text-sm font-bold">Town/City</Form.Label>
      <Form.Control asChild>
        <input
          className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-sm shadow-md border-fernGreen bg-gray-200"
          type="text"
          value="New York"
          placeholder="e.g. New York"
          disabled
        />
      </Form.Control>
    </Form.Field>
  );
}

export default UserCity;
