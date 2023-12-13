import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "org.parallelintersect.aitools",
  appName: "aitools",
  webDir: ".next/server/app",
  server: {
    androidScheme: "https",
  },
};

export default config;
