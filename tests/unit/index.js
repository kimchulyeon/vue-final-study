/**
 *  # 함수("설명", () => {})
 *    * test("", () => {})
 *    * describe("", () => {})
 *
 *  # 메소드
 *    - expect(검증할 값)
 *    - toBe(기대하는 값) : matcher
 *    - not : not.toBe()
 *    - toEqual(기대하는 값) : 객체나 배열은 toBe 대신 toEqual을 사용
 *
 *    - toBeNull
 *    - toBeUndefined
 *    - toBeDefined
 *
 *    - toBeTruthy
 *    - toBeFalsy
 *
 *    - toBeGreaterThan
 *    - toBeGreaterThanOrEqual
 *    - toBeLessThan
 *    - toBeLessThanOrEqual
 *    - toBeCloseTo
 *
 *    - toMatch : 문자열
 *
 *    - toContain : 배열
 *
 *    - toThrow : 예외(에러)
 *
 *  # 비동기함수 테스트
 *    * done : 비동기함수 로직 마지막에 done()
 *      - test("설명", (done) => {
 *            ...
 *        })
 *
 *    * Promise로 작성된 코드 테스트는 done()이 필요없다. return만 해주면 된다. | async await
 *      - resolves : return expect(...).resolves.toBe(...)
 *      - rejects
 *
 *    * async | await
 *      - test("설명", async () => {
*           const age = await fn.getAge()
            expect(age).toBe(30)
 *        });
 **/

// describe("basic math", () => {
//   it("adds two numbers", () => {
//     expect(1 + 1).toBeGreaterThan(1);
//   });

//   test("1이 맞니?", () => {
//     expect("1").not.toBe(1);
//   });
// });
