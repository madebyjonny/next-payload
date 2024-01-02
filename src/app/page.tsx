import Image from "next/image";
import { PageClient } from "@/components/pageClient";

const getInitialProps = async () => {
  const data = await fetch("http://localhost:3000/api/pages/1");
  const page = await data.json();

  return { page };
};

export default async function Home() {
  const { page } = await getInitialProps();

  return (
    <main>
      <PageClient
        page={{
          ...page,
        }}
      />
    </main>
  );
}
