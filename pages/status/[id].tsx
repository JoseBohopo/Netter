import Nettwit from "eplant/components/Organisms/Nettwit";
import { useRouter } from "next/router";

function DevitPage(props: any) {
  return (
    <>
      <Nettwit {...props} /> <style jsx>{""}</style>{" "}
    </>
  );
}

export default DevitPage;

export async function getServerSideProps(context: any) {
  const { params, res } = context;
  const { id } = params;
  const apiResponse = await fetch(`http://localhost:3000/api/nettwits/${id}`);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return { props };
  }
  if (res) {
    res.writeHead(301, { Location: "/home" }).end();
  }
}
