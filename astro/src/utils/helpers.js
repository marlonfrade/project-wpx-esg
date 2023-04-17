import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale/index.js";
import { useSanityClient, createImageBuilder } from "astro-sanity";

const builder = createImageBuilder(useSanityClient());

export function formatBlogPostDate(date) {
  const dateString = parseISO(date, "YYYY/MM/Do");
  const formattedDateString = format(dateString, "d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
  return `${formattedDateString}`;
}

export function getSanityImageURL(source) {
  return builder.image(source);
}
