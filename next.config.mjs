// next.config.mjs

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; 
includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), 
geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const csp = `
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self' data:;
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

// OPTIONAL (leave commented unless you have a collector URL)
const reportOnlyCsp = `
  default-src 'self';
  script-src 'self' 'wasm-unsafe-eval' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self' data:;
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  report-to csp-endpoint;
`.replace(/\s{2,}/g, " ").trim();

const nextConfig = {
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        ...securityHeaders,
        { key: "Content-Security-Policy", value: csp },

        // Enable these ONLY when you have a reporting endpoint:
        // { key: "Content-Security-Policy-Report-Only", value: 
reportOnlyCsp },
        // { key: "Reporting-Endpoints", value: 
"csp-endpoint=\"https://YOUR_REPORT_COLLECTOR.example/\"" },
      ],
    }];
  },
};

export default nextConfig;
