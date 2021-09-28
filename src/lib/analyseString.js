/* istanbul ignore file */

export default (str) => {
  return {
    length: str.length,
    spaces: str.split(' ').length,
    numbers: str.replace(/\D/g, '').length
  }
}