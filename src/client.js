import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'n9y8d3x7',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skUR1F1qIfdNSYKfisB47wPjYz2uj6bVZoRYqwVzkjg8wpuGu9geN2yQByG6LVyBjFkY8xfUBalnbZZCNeKxdf6dR8MZQWtSQoTdKI6Ku1dThI1Zwuj6V5UUx2SIrkFFhLQ1PAbWo4XoAHdhwx69oraXUqwG9U72sTIpGI5zGChSFgZFd1Cf',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
