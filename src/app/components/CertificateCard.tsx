import { certificate } from "@prisma/client";
import Link from "next/link";
import { IoLink } from "react-icons/io5";

export default function CertificateCard({
  certificate,
}: {
  certificate: certificate;
}) {
  return (
    <div className="flex p-4 h-full bg-white border border-gray-200 rounded-lg shadow ">
      <div className="w-4/5 lg:w-full h-full flex flex-col">
        <div>Name : {certificate.title}</div>
        <div>Finished At : {new Date(certificate.finishAt).toDateString()}</div>
        <div>From : {certificate.Organization}</div>
        <div className="flex-col flex md:flex-row gap-2 flex-wrap">
          {certificate.Skills.map((skill) => {
            return (
              <div className="badge badge-outline badge-primary ">{skill}</div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center w-1/12 ">
        <Link href={certificate.url}>
          <div className="border rounded-lg flex items-center gap-2 p-2 btn-primary">
            <IoLink size={40} />
            <p>Link</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
