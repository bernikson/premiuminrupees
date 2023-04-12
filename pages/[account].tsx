import Account from "../components/account/account";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Account />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
