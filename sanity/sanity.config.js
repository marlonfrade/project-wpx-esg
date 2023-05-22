import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  // ...
  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: process.env.NETLIFY_WIDGET_TITLE,
          sites: [
            {
              title: "Sanity Studio",
              apiId: process.env.NETLIFY_API_ID,
              buildHookId: process.env.NETLIFY_BUILD_HOOK_ID,
              name: process.env.NETLIFY_SITE_NAME,
              url: process.env.NETLIFY_SITE_URL,
            },
          ],
        }),
      ],
    }),
  ],
});
