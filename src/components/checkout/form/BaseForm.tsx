import BaseButton from "@components/common/ui/BaseButton";
import * as Form from "@radix-ui/react-form";

type BaseFormProps = {
  children: React.ReactNode;
  onClick: () => void;
};

function BaseForm({ children, onClick }: BaseFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <Form.Root
      onSubmit={handleSubmit}
      className="font-courierPrime md:w-10/12 flex flex-col space-y-4 mt-12 md:mt-0"
    >
      {children}
      <BaseButton title="Buy me some plants!" type="submit" />
    </Form.Root>
  );
}

export default BaseForm;
