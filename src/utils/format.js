export const formatPrice = (x, currency = "€") => {
  return `${currency}${Number(x).toFixed(2)}`;
};

const formatValue = (value) => {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  } else {
    return value;
  }
};

export const parseQueryAsObject = (data) => {
  if (data) {
    return data.split(",").map((el) => {
      const [name, value] = el.split(":");
      return { name, value: formatValue(value) };
    });
  }
};

export const setObjectAsQuery = (data) => {
  return data.map(({ name, value }) => `${name}:${value}`).join(",");
};

export const getObjectAsQueryParams = (data) => {
  return data
    .map(({ name, value }) => ({ [name]: value }))
    .reduce(
      (accumulator, currentValue) => Object.assign(accumulator, currentValue),
      {}
    );
};
