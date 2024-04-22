import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignIn from "./SignIn";

export default async function Page() {
  const session = await getServerSession();
  if (session) {
    redirect('/dashboard');
  }
  return <SignIn/>
}