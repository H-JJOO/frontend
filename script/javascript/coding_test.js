// // 1. 각도기
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
// 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록
// solution 함수를 완성해주세요.
//
// function solution(angle) {
//     let answer = 0;
//
//     if (angle < 90 && angle > 0) {
//         return 1
//     } else if (angle === 90) {
//         return 2
//     } else if (angle > 90 && angle < 180) {
//         return 3
//     } else if (angle === 180) {
//         return 4
//     } else {
//         alert('angle 값은 0초과 180 이하로 입력해주세요.')
//     }
//
//     return answer;
// }
//
// alert(solution(1))

// // 2. 옷가게 할인
// // 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// // 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
//
// function solution(price) {
//     let answer = 0;
//
//     if (price > 1000000) {
//         return alert('price 값은 1000000 이하로 작성해주세요.')
//     }else if (price >= 100000 && price < 300000) {
//         return Math.floor(price * 0.95)
//     } else if (price >= 3000000 && price < 500000) {
//         return Math.floor(price * 0.9)
//     } else if (price >= 500000) {
//         return Math.floor(price * 0.8)
//     } else if (price < 10) {
//         alert('price 값은 10 이상 입력해주세요')
//     } else {
//         alert('price 값은 1000000 이하 입력해주세요.')
//     }
//
// }
//
// console.log(solution(1111111))

// 3. 머쓱이는 친구들과 369게임을 하고 있습니다.
// 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록
// solution 함수를 완성해보세요.

// function solution(order) {
//     let answer = 0;
//
//     let cnt = 0;
//
//     let str_order = String(order)
//
//     for (let i = 0; i < str_order.length; i++) {
//         if (str_order[i] === '3' || str_order[i] === '6' || str_order[i] === '9') {
//             cnt+=1
//         }
//     }
//
//     return cnt
// }
//
// solution(29423)

// // 4. 머쓱이는 프로그래머스에 로그인하려고 합니다.
// // 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
// // 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
//
// function solution(id_pw, db) {
//     let answer = '';
//
//     for (let i = 0; i < db.length; i++) {
//         if (id_pw[0] === db[i][0]) {
//             if (id_pw[1] === db[i][1]) {
//                 return "login"
//             } else {
//                 return "wrong pw"
//             }
//         }
//     }
//     return "fail"
//
//     // for (let i = 0; i < db.length; i++) {
//     //     if (id_pw[0] === db[i][0]) {
//     //         if (id_pw[1] === db[i][1]) {
//     //             return "login"
//     //         } else {
//     //             return "wrong pw"
//     //         }
//     //     }
//     // }
//     // return answer;
// }
//
// console.log(solution(["meosseudgi", "12234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))

/*
console.log(id_pw[0])
    console.log(id_pw[1])
    console.log(db[2][0])
    console.log(db[2][1])
* */
