"use client";
export default async function Project() {
  const data = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "certificate",
    {
      method: "GET",
    }
  );
  if (data.status == 200) {
    const jsonData = await data.json();
    return (
      <div>
        {JSON.stringify(jsonData)}
        <button
          onClick={() => {
            alert(process.env.BACKEND_URL);
          }}
        >
          Test
        </button>
      </div>
    );
  } else {
    return (
      <div>
        Failed
        <button
          onClick={() => {
            alert(process.env.BACKEND_URL);
          }}
        >
          Test
        </button>
      </div>
    );
  }
}
