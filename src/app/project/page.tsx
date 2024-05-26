export default async function Project() {
  const data = await fetch(process.env.BACKEND_URL + "certificate", {
    method: "GET",
  });
  const jsonData = await data.json();
  return <div>{JSON.stringify(jsonData)}</div>;
}
