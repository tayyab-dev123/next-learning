import { userList } from "./userlist";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");
  cookies().set("userType", type);
  console.log(cookies().get("userType"));

  const filteredUsers = type
    ? userList.filter((user) => user.type === type)
    : userList;
  return new Response(JSON.stringify(filteredUsers), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = { id: userList.length + 1, ...user };
  userList.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

// To disable the cache, you can use the following code and if you use request headers, cookies, then cookies or ANY method other than GET then cache disbled by default.

// export const dynamic = "force-dynamic";

// export async function GET() {
//   return new Response(
//     JSON.stringify({
//       time: new Date().toLocaleTimeString(),
//     })
//   );
// }
