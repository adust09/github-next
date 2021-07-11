import { octokit } from "@/utils/fetcher";
import { InferGetServerSidePropsType } from "next";

export type PageProps = InferGetServerSidePropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const repos = await octokit.request("GET /users/adust09/repos", {
    username: "adust09",
  });
  return { props: { repos } };
};

export default function Page(props: PageProps) {
  if (!props.repos.data) return <>error!</>;
  props.repos.data.map((repo) => {
    console.log(repo.url);
  });
  return <div>Hello Next.js</div>;
}
