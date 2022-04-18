export default function orderByProps(obj, arr = []) {
  const arrParametrs = [];
  const arrAlphabetSort = [];
  for (const key in obj) {
    if (arr.length > 0) {
      if (!arr.includes(key)) {
        arrAlphabetSort.push({ key: key, value: obj[key],});
      }
    } else {
      arrAlphabetSort.push({
        key: key,
        value: obj[key]
      });
    }
  }

  arr.forEach(elem => {
    arrParametrs.push({
      key: elem,
      value: obj[elem],
    })
  });

  arrAlphabetSort.sort((a, b) => a.key > b.key ? 1 : -1);
  const arrresult = [...arrParametrs, ...arrAlphabetSort];
  return arrresult;
}
