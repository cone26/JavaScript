const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const count = document.querySelector('.count');
let num = 0;
minus.addEventListener('click', () => {
  num -= 1;
  count.innerHTML = num;
});

plus.addEventListener('click', () => {
  num += 1;
  count.innerHTML = num;
});

//count.innerHTML = num; 사용해서 풀 수 있었던 간단한 문제
//처음에 document.write(num)만 생각나서 시도했다가 화면에 num변수에
//담은 숫자만 남게 되었다.
