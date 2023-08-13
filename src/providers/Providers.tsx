"use client";
import { FeedBackProvider, UiProvider } from "@/context";
import { FC } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <UiProvider>
      <FeedBackProvider>{children}</FeedBackProvider>
    </UiProvider>
  );
};
