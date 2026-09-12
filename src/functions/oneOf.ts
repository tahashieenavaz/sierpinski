import randomNumber from "./randomNumber";

export default function oneOf<OneOfCollectionItem>(
  collection: OneOfCollectionItem[],
): OneOfCollectionItem {
  const randomIndex = randomNumber(0, collection.length);
  return collection[randomIndex];
}
