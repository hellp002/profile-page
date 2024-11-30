import { certificate } from "@prisma/client";
import CertificateCard from "../components/CertificateCard";

export default async function Project() {
  const data = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "certificate",
    {
      method: "GET",
    }
  );
  if (data.status == 200) {
    const jsonData: certificate[] = await data.json();
    return (
      <div className="flex flex-col gap-4 m-4">
        {jsonData.map((data) => {
          return <CertificateCard key={data.id} certificate={data}  />;
        })}
      </div>
    );
  } else {
    return <div>Failed</div>;
  }
}
