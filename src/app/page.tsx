import Image from "next/image";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

  return (
    <div className="flex h-[calc(100vh-72px)] flex-col items-center justify-between ">
      <div className="flex h-3/5 w-full items-center justify-cente">
        My name is Werapat Wangrungroj
      </div>
    </div>
  );
}
