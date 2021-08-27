const maxLengthCreator = (max) => (val) => {
  if (val?.length > max) return `Max length is ${max}`;
}

export const maxLength10 = maxLengthCreator(10);
export const maxLength25 = maxLengthCreator(25);

export const required = (value) => {
  if (!value) {
    return "Field is required";
  }
}
