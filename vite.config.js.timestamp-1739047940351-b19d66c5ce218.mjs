// vite.config.js
import { sveltekit } from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/@sveltejs+kit@2.5.18_@sveltejs+vite-plugin-svelte@3.1.1_svelte@4.2.18_vite@5.3.3_@types+node@_nh52qkc43ryxlq3mo3ni6kz73e/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import Unocss from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/unocss@0.61.3_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_/node_modules/unocss/dist/vite.mjs";
import { presetTypography, presetIcons, presetUno } from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/unocss@0.61.3_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_/node_modules/unocss/dist/index.mjs";
import extractorSvelte from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/@unocss+extractor-svelte@0.61.3/node_modules/@unocss/extractor-svelte/dist/index.mjs";
import { presetScrollbar } from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/unocss-preset-scrollbar@0.3.1_unocss@0.61.3_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6__/node_modules/unocss-preset-scrollbar/dist/index.mjs";
import transformerDirective from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/@unocss+transformer-directives@0.61.3/node_modules/@unocss/transformer-directives/dist/index.mjs";
import transformerVariantGroup from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/@unocss+transformer-variant-group@0.61.3/node_modules/@unocss/transformer-variant-group/dist/index.mjs";
import transformerCompileClass from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/@unocss+transformer-compile-class@0.61.3/node_modules/@unocss/transformer-compile-class/dist/index.mjs";
import { imagetools } from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/vite-imagetools@7.0.2_rollup@4.18.0/node_modules/vite-imagetools/dist/index.js";
import path from "path";
import { partytownVite } from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/@builder.io+partytown@0.10.2/node_modules/@builder.io/partytown/utils/index.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///C:/Users/tim16/works/blog-website/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10_sass@1.77.6/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\tim16\\works\\blog-website";
var __vite_injected_original_import_meta_url = "file:///C:/Users/tim16/works/blog-website/vite.config.js";
var pathMainPkg = fileURLToPath(new URL("package.json", __vite_injected_original_import_meta_url));
var jsonMainPkg = readFileSync(pathMainPkg, "utf8");
var pathQWERPkg = fileURLToPath(new URL("QWER/package.json", __vite_injected_original_import_meta_url));
var jsonQWERPkg = readFileSync(pathQWERPkg, "utf8");
var mainPkg = JSON.parse(jsonMainPkg);
var qwerPkg = JSON.parse(jsonQWERPkg);
var outputFolderPath = Object.keys(process.env).some((key) => key.includes("VERCEL")) ? ".vercel/output/static" : Object.keys(process.env).some((key) => key.includes("NETLIFY")) ? "build" : "static";
var vite_config_default = defineConfig({
  mode: process.env.MODE || "production",
  envPrefix: "QWER_",
  define: {
    __VERSION_MAIN__: mainPkg,
    __VERSION_QWER__: qwerPkg
  },
  plugins: [
    Unocss({
      extractors: [extractorSvelte()],
      presets: [
        presetUno(),
        presetScrollbar(),
        presetIcons(),
        presetTypography({
          cssExtend: {
            ":not(pre) > code::before,:not(pre) > code::after": {
              content: ""
            },
            pre: {
              "border-radius": 0,
              padding: 0,
              margin: 0
            }
          }
        })
      ],
      transformers: [transformerDirective(), transformerVariantGroup(), transformerCompileClass()],
      shortcuts: [
        {
          "title-link": "bg-gradient-to-t from-orange-500 to-orange-500 bg-no-repeat [background-position:0_88%] [background-size:0%_0.1em] focus:![background-size:100%_100%] hover:![background-size:100%_100%] group-hover:[background-size:100%_0.1em] motion-safe:transition-all motion-safe:duration-200"
        },
        [
          /^title-link-(.*)-(.*)-(.*)-(.*)$/,
          ([, f, fc, t, tc]) => `bg-gradient-to-t from-${f}-${fc} to-${t}-${tc} bg-no-repeat [background-position:0_88%] [background-size:0%_0.15em] focus:![background-size:100%_100%] hover:![background-size:100%_100%] group-hover:[background-size:100%_0.15em] motion-safe:transition-all motion-safe:duration-300`
        ]
      ]
    }),
    imagetools(),
    sveltekit(),
    partytownVite({
      dest: path.join(__vite_injected_original_dirname, outputFolderPath, "~partytown")
    })
  ],
  resolve: {
    alias: {
      $QWER: path.resolve(".", "QWER"),
      $generated: path.resolve(".", "src/generated"),
      $stores: path.resolve(".", "src/lib/stores"),
      $i18n: path.resolve(".", "src/i18n"),
      $config: path.resolve(".", "user/config"),
      $assets: path.resolve(".", "user/assets"),
      $custom: path.resolve(".", "user/custom"),
      $static: path.resolve(".", "static")
    }
  },
  server: {
    fs: {
      allow: [".."]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0aW0xNlxcXFx3b3Jrc1xcXFxibG9nLXdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRpbTE2XFxcXHdvcmtzXFxcXGJsb2ctd2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdGltMTYvd29ya3MvYmxvZy13ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSc7XHJcbmltcG9ydCB7IHByZXNldFR5cG9ncmFwaHksIHByZXNldEljb25zLCBwcmVzZXRVbm8gfSBmcm9tICd1bm9jc3MnO1xyXG5pbXBvcnQgZXh0cmFjdG9yU3ZlbHRlIGZyb20gJ0B1bm9jc3MvZXh0cmFjdG9yLXN2ZWx0ZSc7XHJcbmltcG9ydCB7IHByZXNldFNjcm9sbGJhciB9IGZyb20gJ3Vub2Nzcy1wcmVzZXQtc2Nyb2xsYmFyJztcclxuaW1wb3J0IHRyYW5zZm9ybWVyRGlyZWN0aXZlIGZyb20gJ0B1bm9jc3MvdHJhbnNmb3JtZXItZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB0cmFuc2Zvcm1lclZhcmlhbnRHcm91cCBmcm9tICdAdW5vY3NzL3RyYW5zZm9ybWVyLXZhcmlhbnQtZ3JvdXAnO1xyXG5pbXBvcnQgdHJhbnNmb3JtZXJDb21waWxlQ2xhc3MgZnJvbSAnQHVub2Nzcy90cmFuc2Zvcm1lci1jb21waWxlLWNsYXNzJztcclxuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ3ZpdGUtaW1hZ2V0b29scyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBwYXJ0eXRvd25WaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcGFydHl0b3duL3V0aWxzJztcclxuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmNvbnN0IHBhdGhNYWluUGtnID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCdwYWNrYWdlLmpzb24nLCBpbXBvcnQubWV0YS51cmwpKTtcclxuY29uc3QganNvbk1haW5Qa2cgPSByZWFkRmlsZVN5bmMocGF0aE1haW5Qa2csICd1dGY4Jyk7XHJcbmNvbnN0IHBhdGhRV0VSUGtnID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCdRV0VSL3BhY2thZ2UuanNvbicsIGltcG9ydC5tZXRhLnVybCkpO1xyXG5jb25zdCBqc29uUVdFUlBrZyA9IHJlYWRGaWxlU3luYyhwYXRoUVdFUlBrZywgJ3V0ZjgnKTtcclxuY29uc3QgbWFpblBrZyA9IEpTT04ucGFyc2UoanNvbk1haW5Qa2cpO1xyXG5jb25zdCBxd2VyUGtnID0gSlNPTi5wYXJzZShqc29uUVdFUlBrZyk7XHJcblxyXG5jb25zdCBvdXRwdXRGb2xkZXJQYXRoID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLnNvbWUoKGtleSkgPT4ga2V5LmluY2x1ZGVzKCdWRVJDRUwnKSlcclxuICA/ICcudmVyY2VsL291dHB1dC9zdGF0aWMnXHJcbiAgOiBPYmplY3Qua2V5cyhwcm9jZXNzLmVudikuc29tZSgoa2V5KSA9PiBrZXkuaW5jbHVkZXMoJ05FVExJRlknKSlcclxuICAgID8gJ2J1aWxkJ1xyXG4gICAgOiAnc3RhdGljJztcclxuXHJcbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBtb2RlOiBwcm9jZXNzLmVudi5NT0RFIHx8ICdwcm9kdWN0aW9uJyxcclxuICBlbnZQcmVmaXg6ICdRV0VSXycsXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBfX1ZFUlNJT05fTUFJTl9fOiBtYWluUGtnLFxyXG4gICAgX19WRVJTSU9OX1FXRVJfXzogcXdlclBrZyxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIFVub2Nzcyh7XHJcbiAgICAgIGV4dHJhY3RvcnM6IFtleHRyYWN0b3JTdmVsdGUoKV0sXHJcbiAgICAgIHByZXNldHM6IFtcclxuICAgICAgICBwcmVzZXRVbm8oKSxcclxuICAgICAgICBwcmVzZXRTY3JvbGxiYXIoKSxcclxuICAgICAgICBwcmVzZXRJY29ucygpLFxyXG4gICAgICAgIHByZXNldFR5cG9ncmFwaHkoe1xyXG4gICAgICAgICAgY3NzRXh0ZW5kOiB7XHJcbiAgICAgICAgICAgICc6bm90KHByZSkgPiBjb2RlOjpiZWZvcmUsOm5vdChwcmUpID4gY29kZTo6YWZ0ZXInOiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZToge1xyXG4gICAgICAgICAgICAgICdib3JkZXItcmFkaXVzJzogMCxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICAgIHRyYW5zZm9ybWVyczogW3RyYW5zZm9ybWVyRGlyZWN0aXZlKCksIHRyYW5zZm9ybWVyVmFyaWFudEdyb3VwKCksIHRyYW5zZm9ybWVyQ29tcGlsZUNsYXNzKCldLFxyXG4gICAgICBzaG9ydGN1dHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAndGl0bGUtbGluayc6XHJcbiAgICAgICAgICAgICdiZy1ncmFkaWVudC10by10IGZyb20tb3JhbmdlLTUwMCB0by1vcmFuZ2UtNTAwIGJnLW5vLXJlcGVhdCBbYmFja2dyb3VuZC1wb3NpdGlvbjowXzg4JV0gW2JhY2tncm91bmQtc2l6ZTowJV8wLjFlbV0gZm9jdXM6IVtiYWNrZ3JvdW5kLXNpemU6MTAwJV8xMDAlXSBob3ZlcjohW2JhY2tncm91bmQtc2l6ZToxMDAlXzEwMCVdIGdyb3VwLWhvdmVyOltiYWNrZ3JvdW5kLXNpemU6MTAwJV8wLjFlbV0gbW90aW9uLXNhZmU6dHJhbnNpdGlvbi1hbGwgbW90aW9uLXNhZmU6ZHVyYXRpb24tMjAwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIC9edGl0bGUtbGluay0oLiopLSguKiktKC4qKS0oLiopJC8sXHJcbiAgICAgICAgICAoWywgZiwgZmMsIHQsIHRjXSkgPT5cclxuICAgICAgICAgICAgYGJnLWdyYWRpZW50LXRvLXQgZnJvbS0ke2Z9LSR7ZmN9IHRvLSR7dH0tJHt0Y30gYmctbm8tcmVwZWF0IFtiYWNrZ3JvdW5kLXBvc2l0aW9uOjBfODglXSBbYmFja2dyb3VuZC1zaXplOjAlXzAuMTVlbV0gZm9jdXM6IVtiYWNrZ3JvdW5kLXNpemU6MTAwJV8xMDAlXSBob3ZlcjohW2JhY2tncm91bmQtc2l6ZToxMDAlXzEwMCVdIGdyb3VwLWhvdmVyOltiYWNrZ3JvdW5kLXNpemU6MTAwJV8wLjE1ZW1dIG1vdGlvbi1zYWZlOnRyYW5zaXRpb24tYWxsIG1vdGlvbi1zYWZlOmR1cmF0aW9uLTMwMGAsXHJcbiAgICAgICAgXSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gICAgaW1hZ2V0b29scygpLFxyXG4gICAgc3ZlbHRla2l0KCksXHJcbiAgICBwYXJ0eXRvd25WaXRlKHtcclxuICAgICAgZGVzdDogcGF0aC5qb2luKF9fZGlybmFtZSwgb3V0cHV0Rm9sZGVyUGF0aCwgJ35wYXJ0eXRvd24nKSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJFFXRVI6IHBhdGgucmVzb2x2ZSgnLicsICdRV0VSJyksXHJcbiAgICAgICRnZW5lcmF0ZWQ6IHBhdGgucmVzb2x2ZSgnLicsICdzcmMvZ2VuZXJhdGVkJyksXHJcbiAgICAgICRzdG9yZXM6IHBhdGgucmVzb2x2ZSgnLicsICdzcmMvbGliL3N0b3JlcycpLFxyXG4gICAgICAkaTE4bjogcGF0aC5yZXNvbHZlKCcuJywgJ3NyYy9pMThuJyksXHJcbiAgICAgICRjb25maWc6IHBhdGgucmVzb2x2ZSgnLicsICd1c2VyL2NvbmZpZycpLFxyXG4gICAgICAkYXNzZXRzOiBwYXRoLnJlc29sdmUoJy4nLCAndXNlci9hc3NldHMnKSxcclxuICAgICAgJGN1c3RvbTogcGF0aC5yZXNvbHZlKCcuJywgJ3VzZXIvY3VzdG9tJyksXHJcbiAgICAgICRzdGF0aWM6IHBhdGgucmVzb2x2ZSgnLicsICdzdGF0aWMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGZzOiB7XHJcbiAgICAgIGFsbG93OiBbJy4uJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStSLFNBQVMsaUJBQWlCO0FBQ3pULE9BQU8sWUFBWTtBQUNuQixTQUFTLGtCQUFrQixhQUFhLGlCQUFpQjtBQUN6RCxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLHVCQUF1QjtBQUNoQyxPQUFPLDBCQUEwQjtBQUNqQyxPQUFPLDZCQUE2QjtBQUNwQyxPQUFPLDZCQUE2QjtBQUNwQyxTQUFTLGtCQUFrQjtBQUMzQixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxvQkFBb0I7QUFiN0IsSUFBTSxtQ0FBbUM7QUFBMEksSUFBTSwyQ0FBMkM7QUFjcE8sSUFBTSxjQUFjLGNBQWMsSUFBSSxJQUFJLGdCQUFnQix3Q0FBZSxDQUFDO0FBQzFFLElBQU0sY0FBYyxhQUFhLGFBQWEsTUFBTTtB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
