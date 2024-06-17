export default function useRemoveHtmlTags() {
  const removeHtmlTags = (data) => {
    return data?.replace(/<[^>]*>/g, "");
  };
  return { removeHtmlTags };
}
