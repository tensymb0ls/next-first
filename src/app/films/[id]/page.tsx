async function getData(id: any) {
  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }: any) => {
  const data = await getData(params.id);
  console.log(data || "no data");

  return (
    <div className="min-h-screen">
      {data.characters.map((item: any) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default page;
