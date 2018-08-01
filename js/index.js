const a = parseFloat(prompt('enter coef a'));
const b = parseFloat(prompt('enter coef b'));
const c = parseFloat(prompt('enter coef c'));
if (a != 0) {
 function sqr(a, b, c) {
  const d = (b * b - 4 * a * c);
  const disqrim = Math.sqrt(d);
  if (d >= 0) {
   const x1 = (-b - disqrim) / (2 * a);
   const x2 = (-b + disqrim) / (2 * a);
   return [x1, x2];
  }
  if (d == 0) {
   const x3 = (-b / (2 * a));
   return [x3];
  }
  else {
   return [noresult];
  }
 }
 const result = sqr(a, b, c);
 alert result =  ('some numbers' + result);
}