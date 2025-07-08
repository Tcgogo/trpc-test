import { trpc } from "@trpc/context";

export const User = () => {
  const { data, refetch } = trpc.userInfo.findAll.useQuery({
    name: '123',
    age: 123
  }, {
    enabled: false
  })
  
  return <div>
    <button onClick={() => refetch()}>发送请求</button>
    <div>{data?.name}</div>
  </div>;
};
