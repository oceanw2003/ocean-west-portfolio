import { portfolio } from "@/data/portfolio";

export const siteMetadata = {
  title: portfolio.title,
  description: portfolio.description,
  siteUrl: portfolio.siteUrl,
};

export function absoluteUrl(path = "") {
  return `${siteMetadata.siteUrl}${path}`;
}
