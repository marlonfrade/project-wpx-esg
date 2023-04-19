import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  console.log(data);
  return data;
}

export async function getFourLatestPosts() {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  const latestPosts = data.slice(0, 4);
  return latestPosts;
}

export async function getAllCategoriesWithPosts() {
  const query = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}
