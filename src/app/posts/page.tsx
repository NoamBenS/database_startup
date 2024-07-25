import { auth, currentUser } from "@clerk/nextjs/server";
import FormUI from "./formUI";


export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const user = await currentUser();

  return (
    <main>
      <h3 style={{ textAlign: "center", paddingTop: "5%" }}>Welcome to your posts page, { user?.emailAddresses?.map(email => email.emailAddress) }</h3>
      <div style={{ textAlign: "center", paddingTop: "5%" }}>
      </div>
      <div style= {{ display: "flex", justifyContent: "center"}}>
        <FormUI userId={userId}/>
      </div>

    </main>
  );
}
