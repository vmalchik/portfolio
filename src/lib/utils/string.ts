/**
 * @param str - The string to capitalize the first letter of.
 * @description Capitalizes the first letter of a given string and returns the modified string.
 * @returns
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
