import { auth } from "@/auth";
import { NextPage } from "next";

const Page: NextPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }
  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default Page;
