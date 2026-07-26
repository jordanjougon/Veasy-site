"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import type { ComponentProps } from "react";

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  event: string;
  eventData?: Record<string, string | number | boolean | null>;
}

export default function TrackedLink({
  event,
  eventData,
  onClick,
  ...props
}: TrackedLinkProps) {
  const posthog = usePostHog();

  return (
    <Link
      {...props}
      onClick={(e) => {
        posthog?.capture(event, eventData);
        onClick?.(e);
      }}
    />
  );
}
