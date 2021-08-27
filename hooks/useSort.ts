export enum Order {
  ASCENDING = 'asc',
  DESCENDING = 'desc',
}

export enum Field {
  FIRSTNAME = 'firstName',
  LASTNAME = 'lastName',
  HANDICAP = 'handicap',
  PAR = 'par',
  BIRDIE = 'birdie',
  TRIPLEBOGGEY = 'tripleboggey',
  NEARESTTOTHEPIN = 'nearesttothepin',
  LONGESTDRIVE = 'longestdrive',
  EAGLE = 'eagle',
  DOUBLEBOGGEY = 'doubleboggey',
  HALLINONE = 'hallinone',
  BOOGGEY = 'booggey',
}

export const useSort = () => {
  const sort = (items = [], order, field, from, to) => {
    if (order === Order.ASC) {
      items.sort((a, b) => {
        return a[field].localeCompare(b[field]);
      });
    } else {
      items.sort((a, b) => {
        return b[field].localeCompare(a[field]);
      });
    }
    return items.slice(from, to);
  };

  return {
    sort,
  };
};
