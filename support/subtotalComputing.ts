export function getSubtotal(price: string, newQuantity: string) {
    
    const result = parseFloat(price.replace('$','')) * parseFloat(newQuantity);
    return  `$` + result.toPrecision(result.toString().length + 2);
}