const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  // const response = await client.getContentType();
  const entries = await client.getEntries();

  if (entries.items) return entries.items;
}

export default { fetchEntries };
