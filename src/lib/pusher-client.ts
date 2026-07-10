"use client";

// Lazily instantiate so this never runs during SSR.
// The module is imported only in client components/hooks.
let _pusherClient: import("pusher-js").default | null = null;

export function getPusherClient(): import("pusher-js").default {
  if (typeof window === "undefined") {
    throw new Error("getPusherClient() must only be called in the browser");
  }
  if (!_pusherClient) {
    // Dynamic require avoids the UMD bundle being evaluated during SSR.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const PusherJs = require("pusher-js") as typeof import("pusher-js");
    const Pusher = (PusherJs as any).default ?? PusherJs;
    _pusherClient = new Pusher(
      process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
      {
        cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTOR as string,
      },
    );
  }
  return _pusherClient!;
}
