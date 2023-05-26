export function getNumberPersonFromUrl(url: string): number {
  if (Array.isArray(url)) {
    return 0;
  }

  const splitedUrl = url.split("/");
  return Number(splitedUrl.at(-2)) || 0;
}
