import Link from "next/link";

export default function DefaultTodoListDone() {
  return (
    <div>
      Todo List | <Link href="/dashboard">Pending</Link>
    </div>
  );
}
