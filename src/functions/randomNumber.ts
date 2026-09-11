export default function randomNumber(low: number, high: number) {
  const difference = high - low;
  return Math.floor(Math.random() * difference + low);
}
