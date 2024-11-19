import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./component/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
