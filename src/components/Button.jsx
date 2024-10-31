// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 border-solid border-2 border-stone-400 hover:border-stone-100 transition duration-200 ease-in"
      {...props}
    >
      {children}
    </button>
  );
}
