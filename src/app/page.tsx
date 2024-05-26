import Image from "next/image";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

  return (
    <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center text-lg">
      <div className="text-3xl">My name is Werapat Wangrungroj</div>
      <div className="">
        I am a third-year engineering student at Chulalongkorn University,
        currently passionate about full-stack web development and aspiring to
        become a Machine Learning Engineer.
      </div>
    </div>
  );
}
