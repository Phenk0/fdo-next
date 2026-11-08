// import {
//   NewsContent,
//   newsContentSchema,
// } from "@/features/news/schemas/news-content.schema";
// import { JSDOM } from "jsdom";
// import TurndownService from "turndown";
//
// export const convertLegacyComponent = (html: string): NewsContent => {
//   if (!html.trim()) return [];
//
//   const dom = new JSDOM(html);
//   const { body } = dom.window.document;
//
//   const turndown = new TurndownService({
//     headingStyle: "atx",
//     bulletListMarker: "-",
//     hr: "---",
//     emDelimiter: "*",
//     strongDelimiter: "**",
//   });
//
//   const content: NewsContent = [];
//
//   try {
//     for (const node of body.childNodes) {
//       if (node.nodeType === 3 && !node.textContent?.trim()) {
//         continue;
//       }
//
//       if (node instanceof dom.window.HTMLVideoElement) {
//         const url = node.getAttribute("src");
//
//         if (!url) {
//           throw new Error("Legacy video element has no src attribute");
//         }
//
//         content.push({
//           type: "video",
//           url,
//         });
//
//         continue;
//       }
//
//       const markdown = turndown.turndown(node as HTMLElement).trim();
//
//       if (markdown) {
//         content.push({
//           type: "paragraph",
//           text: markdown,
//         });
//       }
//     }
//
//     return newsContentSchema.parse(content);
//   } finally {
//     dom.window.close();
//   }
// };
