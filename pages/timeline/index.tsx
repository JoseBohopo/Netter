import AppLayout from "eplant/components/AppLayout";
import NextLink from "eplant/components/Atoms/NextLink";
import Link from "next/link";

export default function Timeline() {
  return (
    <>
      <AppLayout>
        <h1>This is the timeline</h1>
        <NextLink path="/" textArea="Go Home" />
      </AppLayout>

      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  );
}

Timeline.getInitialProps = {};
