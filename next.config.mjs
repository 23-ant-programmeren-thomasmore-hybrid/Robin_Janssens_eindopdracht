import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    // Note: This is only an example. If you use Pages Router,
    // use something else that works, such as "service-worker/index.ts".
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
    // cacheOnFrontEndNav: true,
    disable: process.env.NODE_ENV === "development",
    reloadOnOnline: true,
    register: true,
});

export default withSerwist({
    // Your Next.js config
});