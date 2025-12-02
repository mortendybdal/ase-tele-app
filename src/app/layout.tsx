import StyledComponentsRegistry from "@/libs/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASE Customer Cards",
  description: "Customer information system for ASE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
