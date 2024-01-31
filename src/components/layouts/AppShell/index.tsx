import { useRouter } from "next/router";
// import Navbar from "../Navbar";
import { Source_Serif_4 } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"));

type AppShellProps = {
  children: React.ReactNode;
};

const sourcerSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={sourcerSerif4.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
