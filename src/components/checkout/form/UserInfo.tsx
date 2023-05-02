import * as Form from "@radix-ui/react-form";

type UserInfoProps = {
  type: "first" | "last";
};

function UserInfo({ type }: UserInfoProps) {
  const errorMessageStyle = "text-[10px] text-red-700 font-bold opacity-80";
  const formLabel = `${type.charAt(0).toUpperCase()}${type.slice(1)} Name`;

  return (
    <Form.Field name={`${type}name`}>
      <Form.Label className="text-sm font-bold">{formLabel}</Form.Label>
      <Form.Control asChild>
        <input
          className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-sm shadow-md border-fernGreen"
          type="text"
          placeholder={`Your ${type} name`}
          pattern="^[a-zA-Z0-9 ]*$"
          required
        />
      </Form.Control>
      <Form.Message className={errorMessageStyle} match="valueMissing">
        {`Please enter your ${type} name.`}
      </Form.Message>
      <Form.Message className={errorMessageStyle} match="patternMismatch">
        Please enter only alphanumeric characters and spaces.
      </Form.Message>
    </Form.Field>
  );
}

export default UserInfo;
