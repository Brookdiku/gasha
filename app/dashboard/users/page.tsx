import {getServerSession } from "next-auth";
import axios from "@/lib/axios";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/myAuthOptions" 
import Users from "./Users";

export default  async function Page() {
  const session  = await getServerSession(authOptions);
  if (!session) {
    return redirect('/auth/signIn')
  }
  try {
    const res = await axios.post("http://localhost:5000/api/permissions/page", {
      "page": "dashboard"
    }, {
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(res.data + res.status);
    if (res.status === 200 && res.data === true) {
      return <Users />;
    } else {
      return redirect('/exception/denied')
    }
  } catch (err:any) {
    if (err.response?.status === 401 || err.response == undefined) {
      return <Users />;
    } else {
      return redirect('/exception/error');
    }
  }
}
