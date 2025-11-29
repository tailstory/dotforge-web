/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
    interface Locals extends Runtime {

    }
}

// Declare build-time variables
declare const __GIT_COMMIT_HASH__: string;
