import getType from './getType';    //파일 끌어옴
import random from './getRandom';    //파일 끌어옴
import _ from 'lodash';

// 데이터 타입

console.log(typeof "JavaScript Essentials");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
// 함수로 정확하게 데이터 타입 알아봄
console.log(getType(123));
console.log(getType("JavaScript Essentials"));
console.log(getType(true));
console.log(getType(undefined));
console.log(getType(null));
console.log(getType([]));
console.log(getType({}));

// 연산자
// 산술 연산자(arihmetic operator)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);    // 나머지값

// 할당 연산자(assignment operator)

let a = 2;    //const ->재할당 불가 , = ->할당 연산자 

console.log(a);

let b = 2;  //let -> 변수b에 다른 데이터 할당시 사용
// b = b + 1;  
b += 1;  // += -> 위의 b = b + 1 과 같은 뜻

console.log(b);

let c = 5;
// c = c - 7;
c -= 7;

console.log(c);

let d = 3;
// d = d * 4;
d *= 4;

console.log(d);

let e = 10;
// e = e / 2;
e /= 2;

console.log(e);

let f = 7;
// f = f % 5;
f %= 5;

console.log(f);

// 비교연산자(comparison operator)

const g = 1;
const h = 3;

console.log(g === h);
console.log(g !== h);
console.log(g < h);
console.log(g > h);
console.log(g >= h);
console.log(g <= h);

function isEqual(x, y){
    return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));

// 논리 연산자 (logical operator)

const i = 1 === 1;
const j = 'AB' === 'ABC';
const k = true;

console.log(i);
console.log(j);
console.log(k);

console.log('&&: ', i && j && k);   //and 연산자 : 모두 true 일때
console.log('||: ', i || j || k);   //or 연산자 : 하나라도 true 일때
console.log('!: ', !i);   //not 연산자 : 반대로 


// 삼항 연산자(ternary operator)

const l = 1 < 2;

if (l) {
    console.log('참');
}else{
    console.log('거짓');
}

console.log(l ? '참' : '거짓'); // 항이 3개 -> if문과 같은 역할


// 조건문 (if statement)

const m = random();

if ( m === 0) {
    console.log('m is 0');
}else if (m === 2) {
    console.log('m is 2');
}else if (m === 4){
    console.log('m is 4');
}else{
    console.log('rest...');
}

// 조건문 (Switch statment)

switch (m) {
    case 0:
        console.log('m is 0');
    break;
    case 2:
        console.log('m is 2');
    break;
    case 4:
        console.log('m is 4');
    break;
    default:
        console.log('rest...');
    break;
}

// 반복문 (For statment)
// for (시작조건; 종료조건; 변화조건){}
const ulEl = document.querySelector('ul');

// console.log(ulEl); -> ul태그 확인

for (let n = 0; n < 10; n += 1){
    const li = document.createElement('li');
    li.textContent = `list-${n + 1}`;
    if((n + 1) % 2 === 0){
        li.addEventListener('click', function(){
            console.log(li.textContent);
        });
    }
    ulEl.appendChild(li);
}

// 변수 유효범위(Variable Scope)
// var, let, const


// 형 변환(type conversion)

const o = 1;
const p = '1';

console.log(o === p); //== 동등연산자 ===비교 연산자

// Truthy(참 같은 값)
// true, {}, [], 1,2,..., 'false', -12, '3.14'....

// Falsy(거짓 같은 값)
// false, '', null , undefinde, 0 ,-0, NaN


// 화살표 함수
// () => {} vs function () {}

const double = function(x){
    return x * 2;
}
console.log('double :', double(7));

const doubleArrow = x => x * 2;
console.log('doubleArrow :', doubleArrow(8));


// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const q = 7;
function doubleTwo(){
    console.log(q * 2);
}
doubleTwo();

(function() {
    console.log(q * 2);
})();   //즉시 실행 함수 ()로 묶어서 익명함수로 작성

(function() {
    console.log(q * 2);
}());   //호출()-> 함수묶어둔()안에 넣어도 무관. 사용시 해당 방법 더 권장



// 호이스팅(Hoisting)
// 함수 선언부가 유효번위 최상단으로 끌어올려지는 현상

const r = 7;

double3();

function double3 (){
    console.log(r * 2);
}


// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료
// 1000ms -> 1s

// const timer = setTimeout(() => {
//     console.log('Heropy!');
// }, 3000);

// const h1El = document.querySelector('h1');
// h1El.addEventListener('click',() => {
//     clearTimeout(timer);
// });

// const timer2 = setInterval(() => {
//     console.log('Heropy!');
// }, 3000);

// h1El.addEventListener('click',() => {
//     clearInterval(timer2);
// });


// 콜백(callback)
// 함수의 인수로 사용되는 함수 실행위치 보장

// setTimeout(함수 , 시간)


// function timeout(callback) {
//     setTimeout(() => {
//         console.log('jiseon!');
//         callback();
//     }, 3000);
// }
// timeout(() => {
//     console.log('Doun!');
// });
// console.log('Doun!');


// math 함수

console.log('ads : ', Math.abs(-12));//정수처리
console.log('min : ', Math.min(2,8));
console.log('max : ', Math.max(2,8));
console.log('ceil : ', Math.ceil(3.14));//올림처리
console.log('floor : ', Math.floor(3.14));//내림처리
console.log('round : ', Math.round(3.5));//반올림
console.log('random : ', Math.random());//랜덤 값


// 배열(array)
const numbers = [1, 2, 3, 4];
const fruist = ['Apple', 'Banana', 'Cherry'];

console.log(numbers[1]);
console.log(fruist[2]);

// .length
console.log(numbers.length);
console.log(fruist.length);
console.log([1, 2].length);

console.log([].length);

// .concat()배열 병합

console.log(numbers.concat(fruist));
console.log(numbers);
console.log(fruist);

// .forEach()

fruist.forEach(function (element, index, array){
    console.log(element, index, array);
});

// .map()


const s = fruist.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`);
});
console.log(s);

// const t = fruist.map(function (fruit, index) {
//     return {
//         id: index,
//         name: fruit
//     };//객제 리터럴 방식
// });

const t = fruist.map((fruit, index) => ({
    id : index,
    name: fruit
}));    //화살표 함수 -> 축약

console.log(t);

// .filter()

const u = numbers.map(number => number < 3);
console.log(u);

const v = numbers.filter(number => number < 3);
console.log(v);

// .find() .findIndex() -> 찾음 

const w = fruist.find(fruit => /^B/.test(fruit));
console.log(w);

const x = fruist.findIndex(fruit => /^C/.test(fruit));
console.log(x);


// .includes() -> 배열에 포함이 되어져있는지

const y = numbers.includes(3);
console.log(y);

const z = fruist.includes('JISEON');
console.log(z);

// .push() .unshift()
// 원본 수정됨 주의

const numbers2 = [1, 2, 3, 4 ];
const fruist2 = ['Apple', 'Banana', 'Cherry'];

numbers2.push(5);   //뒤에 삽입
console.log(numbers2);

numbers2.unshift(0);  //앞에 삽입
console.log(numbers2);

// .reverse() -> 순서 변형
// 원본 수정됨

numbers2.reverse();
fruist2.reverse();

console.log(numbers2);
console.log(fruist2);

// .splice(2, 1) -> 인덱스번호 에서 몇개를 지워라. : 인덱스 2번부터 1개만 지워라. 
// .splice(2, 0 , 999) -> 2번부터 지울껀 없고(0) 999를 추가해라 
// 원본 수정됨

numbers2.splice(2, 1);
console.log(numbers2);

fruist2.splice(2, 0, 'Orange');
console.log(fruist2);


// 객체 (object)

const userAge = {
    // key : value
    name : 'jiseon',
    age : 22
};

const userEmail = {
    name : 'jiseon',
    email : 'cjs42552@naver.com'
};

const target = Object.assign(userAge, userEmail);

console.log(target);
console.log(userAge);
console.log(target === userAge);

const a1 = {k : 123 };
const b1 = {k : 123 };
console.log(a1 === b1);

const user = {
    name : 'jiseon',
    age : 22,
    email : 'cjs42552@naver.com' 
};

const keys = Object.keys(user);
console.log(keys);
// ['name','age', 'email' ]

console.log(user['email']); //인덱싱 

const values = keys.map(key => user[key]);
console.log(values);


// 구조 분해 할당 = 비구조화 할당(Destructuring assignment)

const user2 = {
    name : '지선',
    age : 22,
    email : 'cjs42552@naver.com',
    address : 'USA'
};

const {name: jiseon , age, email, address = 'Korea'} = user2
// E.g, user.address name : jiseon -> 변수만들어줌 address = 'korea' -> 값 직접 입력 but! user2에 값이 있으면 무시됨.

console.log(`사용자의 이름은 ${jiseon} 입니다.`);
console.log(`${jiseon}의 나이는 ${age} 세 입니다.`);
console.log(`${jiseon}의 이메일 주소는 ${email}입니다.`);
console.log(address);

const fruits = ['Apple', 'Banana', 'Cherry'];
const [c1, d1, e1, f1] = fruits ;
console.log(c1, d1, e1, f1);



// 전개 연산자 (Spread) = ...

const fruits2 = ['Apple', 'Banana', 'Cherry', 'Orange'];
console.log(fruits2);
console.log(...fruits2);
// console.log('Apple','Banana', 'Cherry'); 이것 처럼 출력됨.

function toObject(g1, h1, ...i1) {//...i1 나머지 매게변수 : 나머지 배열로 나열해줌
    return {
        g1, // 축약형
        h1 : h1,
        i1 : i1
    };
};

//const toObjest = (g1, h1, ...i1) => ({g1, h1, i1});  ->축약형

console.log(toObject(...fruits2));


// 데이터 불변성(Immutability)
// 원시 데이터 : String, Number, Boolean, undefined, unll
// 참조형 데이터 : Object, Array, Function
// -------------------------------------------------------
// |1:           |2:          |3:           |4:
// -------------------------------------------------------

// 원시 데이터 불변성 
let j1 = 1;
let k1 = 4;
console.log(j1, k1, j1 === k1);
k1 = j1;
console.log(j1, k1, j1 === k1);
j1 = 7;
console.log(j1, k1, j1 === k1);
let l1 = 1;
console.log(k1, l1, k1 === l1);

// 참조형 데이터-> 불변성이 없음. 따라서 가변성 데이터
let m1 = { k : 1};
let n1 = { k : 1};
console.log(m1, n1, m1 === n1);
m1.k = 7;
n1 = m1;
console.log(m1, n1, m1 === n1);
m1.k = 2;
console.log(m1, n1, m1 === n1);
let o1 = n1;
console.log(m1, n1, o1, m1 === o1);
m1.k = 9;
console.log(m1, n1, o1, m1 === o1);


// 참조형 데이터의 얕은 복사와 깊은 복사
// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// import _ from 'lodash'; 1행

const user3 = {
    name : 'jiseon',
    age : 22,
    email : ['cjs42552@naver.com']
} ;

const copyUser = _.cloneDeep(user3); // 깊은 복사 -> lodash 이용, 속까지 다 복사(참조형 안에 참조형이 또 있는경우)
// const copyUser = Object.assign({}, user3); //얕은복사 -> 겉만 복사
// const copyUser = {...user3}; //얕은 복사
console.log(copyUser === user3);

user3.age = 23;
console.log('user', user3);
console.log('copyUser', copyUser);

console.log('------');
console.log('------');



user3.email.push('4ucjs1125@gmail.com');
console.log(user3.email === copyUser.email);
console.log('user' , user3);
console.log('copyUser', copyUser);

// lodash 활용

const usersA = [
    {
        userId : '1',
        name : 'jiseon'
    },
    {
        userId : '2',
        name : 'yolo'
    }
];
const usersB = [
    {
        userId : '1',
        name : 'jiseon'
    },
    {
        userId : '3',
        name : 'leo'
    }
];
const usersC = usersA.concat(usersB);
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC, 'userId'));

const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('uniqonBy', usersD);

const usersE = [
    {
        userId : '1',
        name : 'jiseon'
    },
    {
        userId : '2',
        name : 'yolo'
    },
    {
        userId : '3',
        name : 'leo'
    },
    {
        userId : '4',
        name : 'Everyday'
    },
    {
        userId : '5',
        name : 'yololeo'
    }
];

const foundUser = _.find(usersE, { name : 'yololeo'});
const foundUserIndex = _.findIndex(usersE, {name : 'leo'});
console.log(foundUser);
console.log(foundUserIndex);

_.remove(usersE, { name : 'Everyday'});
console.log(usersE);

// JSON(JavaScript Object Notation)
// 자바스크립트의 객체 표기법
import myData from './myData.json';

console.log(myData);
const usersF = {
    name : 'jiseon',
    age : 22,
    email :[
        'cjs42552@naver.com',
        '4ucjs1125@naver.com'
    ]
};

console.log('user', usersF);

const str = JSON.stringify(usersF); // json 문자 데이터 화
console.log('str', str);
console.log(typeof str);

const obj = JSON.parse(str); //json 값이나 객체 생성
console.log('obj', obj);


// OMDb API 활용 axios 패키지 설치 후 사용

import axios from 'axios';

function fetchMovies(){
    axios
        .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
        .then(res => {
            console.log(res);
            const movh1El = document.querySelector('h1.movie'); 
            //html 문서의 H1중에서 class=movie 를 선택하여 변수지정->html문서에 표시됨
            const imgEl = document.querySelector('img');  
            //html 문서의 img를 선택하여 변수지정->html문서에 표시됨
            movh1El.textContent = res.data.Search[0].Title; 
            // movh1El.textContent -> 변수의 텍스트 콘텐츠에 = res.data에서.Search[0](Search 인덱스 0번째의).Title 을 가져와라;
            imgEl.src = res.data.Search[0].Poster;
            // imgEl.src -> 변수의 src 속성에 = res.data에서.Search[0](Search 인덱스 0번째의).Poster 을 가져와라;
        });
    //axios를 활용 하여 .get(해당 주소-정보)를 가지고오고 .then(그것-> 가지고온 것을 res함수로 만듦) 
};
fetchMovies();


