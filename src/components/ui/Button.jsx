export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
       className="flex justify-center items-center px-6 py-4 text-white rounded-xl
       bg-[linear-gradient(to_right,#fbbd08_0%,#F47B20_25%,#C4272E_50%,#8B1A4A_75%,#3D1053_100%)]
       hover:bg-[linear-gradient(to_right,#F47B20,#fbbd08)] shadow-[4px_4px_10px_rgba(251,189,8,0.2)]  transition-colors duration-300 shrink-0"
          >
      {children}
    </button>
  );
}