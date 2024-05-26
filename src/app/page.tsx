import Image from "next/image";

export default function Home() {
  console.log(process.env.BACKEND_URL);

  return (
    <div className="flex h-[calc(100vh-72px)] flex-col items-center justify-between ">
      <div className="flex h-3/5 w-full items-center justify-center">
        My name is Werapat Wangrungroj
      </div>
    </div>
  );
}
