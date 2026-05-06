
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async() => {
  const session = await auth();

  console.log(session)

  
  return (
    <>
      <div  className="relative min-h-screen w-full overflow-x-hidden">

        <p className="h1-bold font-space-grotesk">start new project DEV</p>
        <h1 className="font-inter">Title DEV</h1>
        <h2 className="font-mono">Subtitle</h2>



        <form
  className="px-10 pt-[100px]"
  action={async () => {
    "use server";

    await signOut({ redirectTo: ROUTES.SIGN_IN });
  }}
>
  <Button type="submit">Log out</Button>
</form>
      </div>



    </>
  );
};

export default Home;
