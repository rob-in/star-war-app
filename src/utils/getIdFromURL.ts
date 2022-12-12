export function getIdFromURL(url: string): string {
  const splitUrl = url.split("/");
  return splitUrl[splitUrl.length - 2] || '';
}
