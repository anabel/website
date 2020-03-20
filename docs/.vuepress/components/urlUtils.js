export function url(filename) {
  try {
    return require("@images/" + filename);
  } catch (error) {}
}
