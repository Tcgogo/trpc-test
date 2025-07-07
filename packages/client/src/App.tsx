import React from "react";
// import ReactDOM from "react-dom/client";

import { TRPCContext } from "./widgets/tRPCContext";

// import "@unocss/reset/tailwind-compat.css";
// import "@assets/style.css";

import { User } from "./modules/User";

// const root = ReactDOM.createRoot(document.getElementById("root")!);
// root.render(
//   <React.StrictMode>
//     <TRPCContext urls={["http://localhost:3000/trpc"]}>
//       <User />
//     </TRPCContext>
//   </React.StrictMode>
// );

export default function App() {
  return (
    <React.StrictMode>
      <TRPCContext urls={["http://localhost:3000/trpc"]}>
        <User />
      </TRPCContext>
    </React.StrictMode>
  );
}
