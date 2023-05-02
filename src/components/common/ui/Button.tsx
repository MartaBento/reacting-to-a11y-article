type ButtonProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

function BaseButton({ title, className, type, onClick }: ButtonProps) {
  return (
    <button
      className={`${className} rounded-full font-courierPrime bg-sage p-2 text-center underline decoration-wavy decoration-timberwolf`}
      aria-label={title}
      type={type || "button"}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default BaseButton;
