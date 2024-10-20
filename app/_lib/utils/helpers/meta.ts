import MetaConfig from "@/config/MetaConfig.json";

export const defaultMeta = {
  title: {
    default: MetaConfig.title,
    template: `%s | ${MetaConfig.title}`,
  },
  description: MetaConfig.description,
  icons: {
    icon: MetaConfig.link.icon,
  },
  images: MetaConfig.link.logo,
  authors: MetaConfig.author,
};
