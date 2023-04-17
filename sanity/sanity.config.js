import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  // ...
  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "My Netlify deploys",
          sites: [
            {
              title: "Sanity Studio",
              apiId: "a3cd5bb2-47f2-462b-ac7a-4493fbe84003",
              buildHookId:
                "https://api.netlify.com/build_hooks/643da7cc7e204312ada6f421",
              name: "wpxlocacao-esg",
              url: "https://wpxlocacao-esg.netlify.app/",
            },
          ],
        }),
      ],
    }),
  ],
});
