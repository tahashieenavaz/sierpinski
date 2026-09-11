export default function randomNumber(low: number, high: number) {
  if (low > high) {
    throw new Error(
      `randomNumber received a low(${low}) that is bigger than high(${high}). `,
    );
  }

  const difference = high - low;
  return Math.floor(Math.random() * difference + low);
}
