import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "hsl(var(--card))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
          borderRadius: "1rem",
          padding: "16px 24px",
        },
        success: {
          iconTheme: {
            primary: "hsl(var(--primary))",
            secondary: "white",
          },
        },
      }}
    />
  );
}
