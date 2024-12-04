import { userList } from "../../api/userlist";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = userList.find((user) => user.id === Number(params.id));
  if (!user) {
    redirect("/user/api/");
    // return new Response("User not found", { status: 404 });
  }
  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  {
    const body = await request.json();
    const userIndex = userList.findIndex(
      (user) => user.id === Number(params.id)
    );
    if (userIndex === -1 || !body || !body.name || !body.email) {
      return new Response("User not found", { status: 404 });
    }
    userList[userIndex] = { id: userList[userIndex].id, ...body };
    return new Response(JSON.stringify(userList[userIndex]), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const header = new Headers(request.headers);
  const headerList = headers();

  const token = header.get("Authorization");
  const tokenList = headerList.get("Authorization");
  console.log({ tokenList, token });

  const userIndex = userList.findIndex((user) => user.id === Number(params.id));
  if (userIndex === -1) {
    return new Response("User not found", { status: 404 });
  }
  userList.splice(userIndex, 1);
  return new Response("<h3>User deleted</h3>", { status: 200 });
}
