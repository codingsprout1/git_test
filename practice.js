function practice3() {
  let array = ["사과", "바나나", "딸기", "복숭아", "포도"];

  result = "";
  for (let i = 0; i < array.length; i++) {
      result += array[i] + (i == array.length - 1 ? " " : " / ");
  }
  // 값 출력하기1
  console.log(result);

  // 값 출력하기2
  console.log(array.join(" / "));

  // '복숭아'와 일치하는 값 찾아 인덱스와 값 출력하기
  let index = array.indexOf("복숭아");
  let value = array[index];
  console.log(`${index} : ${value}`);
}
practice3();