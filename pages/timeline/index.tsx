import NextLink from "eplant/components/Atoms/NextLink";
import Title from "eplant/components/Atoms/Title";

export default function Timeline() {
  return (
    <>
      <Title text="This is the timeline" />
      <NextLink path="/" textArea="Go Home" />

      <style jsx>{`
        h1 {
          font-size: 2.25rem;
          color: red;
        }
      `}</style>
    </>
  );
}

// Timeline.getInitialProps = {};
