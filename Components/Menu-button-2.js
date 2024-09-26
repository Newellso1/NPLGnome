export default function MenuButton() {
  return (
    <div className="absolute right-7 top-5 flex">
      <div className="relative">
        <div className="w-1 h-7 bg-black rotate-45 absolute "></div>
        <div className="w-1 h-7 bg-black -rotate-45 absolute "></div>
      </div>
    </div>
  );
}
