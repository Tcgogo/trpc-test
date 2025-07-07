import { trpc } from "@trpc/context";

export const User = () => {
  const { data, refetch } = trpc.user.greeting.useQuery(
    {
      name: "阿斯顿撒打算",
    },
    {
      enabled: false,
    }
  );
  
  return <div>
    <button onClick={() => refetch()}>发送请求</button>
    <div>{data}</div>
  </div>;
};
