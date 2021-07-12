export const snipQarray = [
  {
    idx: 0,
    title: "Rounding",
    sourceCode: `// Consider
      function f1(v) {
        return Math.round( v * 100 ) / 100;
      };`,
    questFunc: (arr) => {
      return Math.round(arr[0].pValue * 100) / 100;
    },
    testCasesArr: [
      {
        idx: 0,
        inpParamsArr: [{ pName: "v", pValue: 1.2345, pType: "number" }],
      },
      {
        idx: 1,
        inpParamsArr: [{ pName: "v", pValue: 9.8765, pType: "number" }],
      },
    ],
  },
  {
    idx: 1,
    title: "Paragraph-split",
    sourceCode: `// Consider
      const f2 = (paragraph) => {
        return Math.max(
          ...paragraph.split(' ').map(w => w.length)
          );
      };`,
    questFunc: (arr) => {
      return Math.max(...arr[0].pValue.split(" ").map((w) => w.length));
    },
    testCasesArr: [
      {
        idx: 0,
        inpParamsArr: [
          {
            pName: "paragraph",
            pValue: "Two plus two equals four",
            pType: "string",
          },
        ],
      },
      {
        idx: 1,
        inpParamsArr: [
          {
            pName: "paragraph",
            pValue:
              "This paragraph is not very long as it comprises only of one sentence",
            pType: "string",
          },
        ],
      },
    ],
  },
  {
    idx: 2,
    title: "Key Value pairs",
    sourceCode: `// Consider
      function f3 (arr) => {
        const res = {}
        for (let i = 0; i < arr.length; i++) {
          const val = res[arr[i]] || 0;
          res[arr[i]] = val + 1;
        }
        return res;
      };`,
    questFunc: (arr) => {
      return JSON.stringify(
        arr[0].pValue.reduce(
          (fin, itm) => ({ ...fin, [itm]: (fin[itm] || 0) + 1 }),
          {}
        )
      );
    },
    testCasesArr: [
      {
        idx: 0,
        inpParamsArr: [
          {
            pName: "arr",
            pValue: ["a", "a", "c", "b", "a", "b"],
            pType: "array",
          },
        ],
      },
      {
        idx: 1,
        inpParamsArr: [
          {
            pName: "arr",
            pValue: ["abc", "abc", "ca", "ac", "ca", "xyb"],
            pType: "array",
          },
        ],
      },
    ],
  },
  {
    idx: 3,
    title: "Array manipulation",
    sourceCode: `// Consider
      function f4(inpArr, inpIdx = 0, outArr = []) {
        if (inpIdx === inpArr.length) return outArr.pop();
        for (let outIdx = 0; outIdx < outArr.length; outIdx++) {
          if (inpArr[inpIdx] < outArr[outIdx]) {
            return f4(inpArr, inpIdx + 1, [
              ...outArr.slice(0, outIdx),
              inpArr[inpIdx],
              ...outArr.slice(outIdx)
            ]);
          }
        }
        return f4(inpArr, inpIdx + 1, outArr.concat(inpArr[inpIdx]));
      };`,
    questFunc: (arr) => {
      return arr[0].pValue
        .reduce(
          (fin, itm) => [
            ...fin.filter((x) => x <= itm),
            itm,
            ...fin.filter((x) => x > itm),
          ],
          []
        )
        .pop();
    },
    testCasesArr: [
      {
        idx: 0,
        inpParamsArr: [
          {
            pName: "inpArr",
            pValue: ["a", "m", "d", "k", "g"],
            pType: "array",
          },
        ],
      },
      {
        idx: 1,
        inpParamsArr: [
          {
            pName: "inpArr",
            pValue: [1, 3, 7, 2, 4, 5, 0, 6],
            pType: "array",
          },
        ],
      },
    ],
  },
];

export const codeQarray = [
  {
    idx: 0,
    title: "Fizz Buzz - the most basic",
    text: "Given a number less than 100, return an array as described",
    urls: [
      <a
        key="0"
        href="https://en.wikipedia.org/wiki/Fizz_buzz"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>,
      ": ",
      <a
        key="1"
        href="https://en.wikipedia.org/wiki/Fizz_buzz"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://en.wikipedia.org/wiki/Fizz_buzz
      </a>,
    ],
    testCases: [
      {
        caseNum: 0,
        inpEltName: "InputNumber",
        inpEltValue: "10",
        outEltValue: "[ 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz ]",
      },
      {
        caseNum: 1,
        inpEltName: "InputNumber",
        inpEltValue: "15",
        outEltValue:
          "[ 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz ]",
      },
    ],
    solution: `[...Array(inpNum).keys()].map(i => i + 1).map(i => 
      i % 3 === 0 && i % 5 === 0
      ? 'Fizz Buzz'
      : i % 5 === 0
        ? 'Buzz'
        : i % 3 === 0
        ? 'Fizz'
        : i
      );`,
  },
  {
    idx: 1,
    title: "Find the most-frequent element in an array",
    text: "Given an array, return the most repeated element/s",
    testCases: [
      {
        caseNum: 0,
        inpEltName: "InputArray",
        inpEltValue: "[ 'a', 'a', 'd', 'b', 'd', 'c', 'a', 'b']",
        outEltValue: "['a']",
      },
      {
        caseNum: 1,
        inpEltName: "InputArray",
        inpEltValue: "[ 'a', 'a', 'b', 'b', 'd', 'c', 'a', 'b']",
        outEltValue: "['a', 'b']",
      },
      {
        caseNum: 1,
        inpEltName: "InputArray",
        inpEltValue: "[ 0, 7, 1, 2, 0, 4 ]",
        outEltValue: "[0]",
      },
      {
        caseNum: 1,
        inpEltName: "InputArray",
        inpEltValue: "[ 1, 7, 0, 7, 4, 0 ]",
        outEltValue: "[0, 7]",
      },
    ],
  },
  {
    idx: 2,
    title: "Generate a dictionary of words based on length",
    text: "Given a paragraph (ie, string), generate a map (ie, key-value pair) where key is length (integer) and value is an array of words (in paragraph) where length = key.",
    testCases: [
      {
        caseNum: 0,
        inpEltName: "InputString",
        inpEltValue: "'Two plus two equals four'",
        outEltValue: `{ $
              3: ['Two', 'two'], $
              4: ['plus', 'four'], $
              6: ['equals'] $
        }`,
      },
      {
        caseNum: 1,
        inpEltName: "InputString",
        inpEltValue:
          "'This paragraph is not very long as it comprises only of one sentence'",
        outEltValue: `{ $
          2 : ['is', 'as', 'it', 'of'], $
          3 : ['not', 'one'], $
          4 : ['This', 'very', 'long', 'only'], $
          8 : ['sentence'], $
          9 : ['paragraph', 'comprises'] $
         }`,
      },
    ],
  },
];

export const totalSnipQuestions = snipQarray.length;
export const totalCodeQuestions = codeQarray.length;
