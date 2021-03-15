export function formatPrice(price) {
  return `$ ${price.toString().replace(/\d(?=(?:\d{3})+$)/g, "$&.")}`;
}

export function formatConditionSold(condition, sold) {
  return `${condition === "new" ? "Nuevo" : "Usado"} - ${sold} vendidos`;
}
