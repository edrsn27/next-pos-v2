import { useEffect } from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import { useRouter } from "next/router";
import { useAuth } from "context/AuthProvider";

import PageChange from "components/PageChange/PageChange.js";

export default function Auth({ children }) {
  const { currentUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && currentUser) router.push("/admin/dashboard");
  }, [currentUser, loading]);
  if (!currentUser && !loading)
    return (
      <>
        <Navbar transparent />
        <main>
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
              className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
              style={{
                backgroundImage: "url('/img/register_bg_2.png')",
              }}
            ></div>
            {children}
            <FooterSmall absolute />
          </section>
        </main>
      </>
    );
  else return <PageChange path={router.pathname} />;
}
