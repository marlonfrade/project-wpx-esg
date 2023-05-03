import getYouTubeId from "get-youtube-id";
import { portableTextToHtml } from "astro-sanity";
import { getSanityImageURL } from "../utils/helpers.js";

const customComponents = {
  types: {
    mainImage: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${getSanityImageURL(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getSanityImageURL(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${getSanityImageURL(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getSanityImageURL(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    code: ({ value }) => {
      return `<code-block code='${value.code}' language='${value.language}'></code-block>`;
    },
    youtube: ({ value }) => {
      const { url } = value;
      const id = getYouTubeId(url);
      return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    },
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
