const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * (max + 1))
}

// HACK:(nus3) テスト書く
/**
 * publicにある静的なアセットのパスを返します
 * @param {number} len - 生成したい配列の要素数
 * @param {number} max - 最大値
 * @return {number[]} - randomなindexの配列
 */
export const randomIndexes = (len: number, max: number): number[] => {
  // TODO:(nus3) ちょくちょく配列のレンジでエラー出るのでバグってる なおす
  if (len > max) {
    return []
  }

  const indexes = [...Array(max)].map((_, i) => i)

  const output = []
  for (let i = 0; i < len; i++) {
    const ri = getRandomInt(indexes.length)
    output.push(indexes[ri])
    indexes.splice(ri, 1)
  }

  return output
}
