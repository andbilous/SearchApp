export const useSearch = () => {
  const search = (items: any, query: string) => {
    return items.filter(
      (item) => item.firstName.includes(query) || item.lastName.includes(query)
    );
  };
  return {
    search,
  };
};
