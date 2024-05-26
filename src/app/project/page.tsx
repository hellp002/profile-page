export default async function Project() {
  const data = await fetch(process.env.BACKEND_URL + "certificate", {
    method: "GET",
  });
  if (data.status == 200) {
    const jsonData = await data.json();
    return <div>{JSON.stringify(jsonData)}</div>;
  } else {
    return <div>Failed</div>;
  }
}
