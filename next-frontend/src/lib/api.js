export async function getHeaderData() {
  const api = "http://localhost:4000/api/headers";
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed href fetch data");
  }

  return res.json();
}

export async function getFooterData() {
  const api = "http://localhost:4000/api/footers";
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed href fetch data");
  }

  return res.json();
}

export async function getRoomsData() {
  const api = "http://localhost:4000/api/rooms/turkish";
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed href fetch data");
  }

  return res.json();
}