(this.webpackJsonpinterviewassist=this.webpackJsonpinterviewassist||[]).push([[0],{17:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(11),s=t.n(a),c=t(3),i=t(4),u=t(6),l=t(5),o=(t(2),t(0)),p=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).handleClick=function(e,n,t){var a=r.state,s=a.cAnswers,c=a.uAnswers;s[n]=0===s[n].length?t(e).toString():"",0===s[n].length&&(c[n]=""),r.setState({cAnswers:s,uAnswers:c})},r.state={cAnswers:[],uAnswers:[],btnText:{false:"Clear",true:"Calculate"}},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.cAnswers,r=n.uAnswers,a=n.btnText,s=this.props,c=s.testCasesArr,i=s.handleCalculate;c.forEach((function(e){t.push(""),r.push("")}));return Object(o.jsx)(o.Fragment,{children:c.map((function(n){return function(n,t,s,c,i){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"sameLine",children:["Case ",n+1,":"," ",t.reduce((function(e,n){return e+(n.pName+" = ")+JSON.stringify(n.pValue)+", "}),"").slice(0,-2)," ","\u2003 Your answer:",Object(o.jsx)("input",{value:i,onChange:function(t){r[n]=t.target.value,e.setState({uAnswers:r})}}),Object(o.jsx)("button",{disabled:0===r[n].length,onClick:function(){e.handleClick(t,n,s)},children:a[0===c.length]}),"\u2003",!!c&&Object(o.jsxs)("label",{className:c===i?"goodjob":"",children:["Computed answer:\u2003",c," ",c===i&&"-- Correct answer!"]})]},n),Object(o.jsx)("hr",{})]})}(n.idx,n.inpParamsArr,i,t[n.idx],r[n.idx])}))})}}]),t}(r.Component),j=function(){var e=[{idx:0,inpParamsArr:[{pName:"v",pValue:1.2345,pType:"number"}]},{idx:1,inpParamsArr:[{pName:"v",pValue:9.8765,pType:"number"}]}],n="// Consider ".concat(e[0].inpParamsArr[0].pName,": ").concat(e[0].inpParamsArr[0].pValue,"\n  function f1(v) {\n    return Math.round( v * 100 ) / 100;\n  };");return Object(o.jsxs)("div",{className:"sameCol",children:[Object(o.jsx)("div",{children:"Question 1 - Rounding"}),Object(o.jsx)("div",{children:Object(o.jsx)("pre",{children:n.split("\n").map((function(e){return Object(o.jsx)("code",{children:e+"\n"})}))})}),Object(o.jsx)("hr",{}),Object(o.jsx)(p,{testCasesArr:e,handleCalculate:function(e){return Math.round(100*e[0].pValue)/100}}),Object(o.jsx)("hr",{})]})},d=t(7),h=function(){var e=[{idx:0,inpParamsArr:[{pName:"paragraph",pValue:"Two plus two equals four",pType:"string"}]},{idx:1,inpParamsArr:[{pName:"paragraph",pValue:"This paragraph is not very long as it comprises only of one sentence",pType:"string"}]}],n="// Consider ".concat(e[0].inpParamsArr[0].pName,": ").concat(e[0].inpParamsArr[0].pValue,"\n  const f2 = (paragraph) => {\n    return Math.max(\n      ...paragraph.split(' ').map(w => w.length)\n      );\n  };");return Object(o.jsxs)("div",{className:"sameCol",children:[Object(o.jsx)("div",{children:"Question 2 - Paragraph Split"}),Object(o.jsx)("div",{children:Object(o.jsx)("pre",{children:n.split("\n").map((function(e){return Object(o.jsx)("code",{children:e+"\n"})}))})}),Object(o.jsx)("hr",{}),Object(o.jsx)(p,{testCasesArr:e,handleCalculate:function(e){return Math.max.apply(Math,Object(d.a)(e[0].pValue.split(" ").map((function(e){return e.length}))))}}),Object(o.jsx)("hr",{})]})},b=t(8),x=t(10),O=function(){var e=[{idx:0,inpParamsArr:[{pName:"arr",pValue:["a","a","c","b","a","b"],pType:"array"}]},{idx:1,inpParamsArr:[{pName:"arr",pValue:["abc","abc","ca","ac","ca","xyb"],pType:"array"}]}],n="// Consider ".concat(e[0].inpParamsArr[0].pName,": ").concat(e[0].inpParamsArr[0].pValue,"\n  function f3 (arr) => {\n    const res = {}\n    for (let i = 0; i < arr.length; i++) {\n      const val = res[arr[i]] || 0;\n      res[arr[i]] = val + 1;\n    }\n    return res;\n  };");return Object(o.jsxs)("div",{className:"sameCol",children:[Object(o.jsx)("div",{children:"Question 3 - Key Value Pairs"}),Object(o.jsx)("div",{children:Object(o.jsx)("pre",{children:n.split("\n").map((function(e){return Object(o.jsx)("code",{children:e+"\n"})}))})}),Object(o.jsx)("hr",{}),Object(o.jsx)(p,{testCasesArr:e,handleCalculate:function(e){return JSON.stringify(e[0].pValue.reduce((function(e,n){return Object(x.a)(Object(x.a)({},e),{},Object(b.a)({},n,(e[n]||0)+1))}),{}))}}),Object(o.jsx)("hr",{})]})},m=function(){var e=[{idx:0,inpParamsArr:[{pName:"inpArr",pValue:["a","m","d","k","g"],pType:"array"}]},{idx:1,inpParamsArr:[{pName:"inpArr",pValue:[1,3,7,2,4,5,0,6],pType:"array"}]}],n="// Consider ".concat(e[0].inpParamsArr[0].pName,": ").concat(e[0].inpParamsArr[0].pValue,"\n  function f4(inpArr, inpIdx = 0, outArr = []) {\n    if (inpIdx === inpArr.length) return outArr.pop();\n    for (let outIdx = 0; outIdx < outArr.length; outIdx++) {\n      if (inpArr[inpIdx] < outArr[outIdx]) {\n        return f4(inpArr, inpIdx + 1, [\n          ...outArr.slice(0, outIdx),\n          inpArr[inpIdx],\n          ...outArr.slice(outIdx)\n        ]);\n      }\n    }\n    return f4(inpArr, inpIdx + 1, outArr.concat(inpArr[inpIdx]));\n  };");return Object(o.jsxs)("div",{className:"sameCol",children:[Object(o.jsx)("div",{children:"Question 3 - Key Value Pairs"}),Object(o.jsx)("div",{children:Object(o.jsx)("pre",{children:n.split("\n").map((function(e){return Object(o.jsx)("code",{children:e+"\n"})}))})}),Object(o.jsx)("hr",{}),Object(o.jsx)(p,{testCasesArr:e,handleCalculate:function(e){return e[0].pValue.reduce((function(e,n){return[].concat(Object(d.a)(e.filter((function(e){return e<=n}))),[n],Object(d.a)(e.filter((function(e){return e>n}))))}),[]).pop()}}),Object(o.jsx)("hr",{})]})},f=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).handleClick=function(e){r.setState({})},r.state={chosenQ:-1,codeqs:[{idx:0,text:"Given an array of strings, generate an object with keys as unique strings in the array & values as number of times the key has occurred in the array.",testCases:[{caseNum:0,inpEltName:"InputArray",inpEltValue:"[ 'a', 'a', 'd', 'b', 'd', 'c', 'a', 'b']",outEltValue:"{'a' : 3, 'b' : 2, 'd' : 2 ,'c' : 1}"},{caseNum:1,inpEltName:"InputArray",inpEltValue:"[ 'abc', 'adcb', 'aa', 'abc', 'ad', 'abc', 'aa', 'ba', 'aa', 'aa', 'adcb' ]",outEltValue:"{ aa : 4, abc : 3, ad : 1, adcb : 2, ba : 1 }"}]},{idx:1,text:"Given a paragraph (ie, string), generate a map (ie, key-value pair) where key is length (integer) and value is an array of words (in paragraph) where length = key.",testCases:[{caseNum:0,inpEltName:"InputString",inpEltValue:"'Two plus two equals four'",outEltValue:"{ $\n              3: ['Two', 'two'], $\n              4: ['plus', 'four'], $\n              6: ['equals'] $\n        }"},{caseNum:1,inpEltName:"InputString",inpEltValue:"'This paragraph is not very long as it comprises only of one sentence'",outEltValue:"{ $\n          2 : ['is', 'as', 'it', 'of'], $\n          3 : ['not', 'one'], $\n          4 : ['This', 'very', 'long', 'only'], $\n          8 : ['sentence'], $\n          9 : ['paragraph', 'comprises'] $\n         }"}]}]},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.codeqs,r=n.chosenQ;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"sameLine",children:[t.map((function(n,t){return Object(o.jsx)("button",{onClick:function(){e.setState({chosenQ:t})},children:"Question "+(t+1)},t)})),-1!==r&&Object(o.jsx)("button",{onClick:function(){e.setState({chosenQ:-1})},children:"Clear Question"})]}),Object(o.jsx)("div",{className:"sameCol",children:-1!==r&&t.filter((function(e){return e.idx===r})).map((function(e,n){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:e.text}),e.testCases.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Test Case ",e.caseNum+1]}),Object(o.jsxs)("p",{children:[e.inpEltName,": "]}),Object(o.jsx)("code",{children:e.inpEltValue}),Object(o.jsx)("p",{children:"Expected output:"}),Object(o.jsx)("code",{children:e.outEltValue.split("$").map((function(e){return Object(o.jsx)("span",{children:e})}))})]})}))]},n)}))})]})}}]),t}(r.Component),v=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).state={questions:[Object(o.jsx)(j,{}),Object(o.jsx)(h,{}),Object(o.jsx)(O,{}),Object(o.jsx)(m,{})],chosenQ:-1},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.questions,r=n.chosenQ;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"sameCol",children:[Object(o.jsx)("h4",{children:"Understanding Code Snippets"}),Object(o.jsxs)("div",{className:"sameLine",children:[t.map((function(n,t){return Object(o.jsx)("button",{onClick:function(){e.setState({chosenQ:t})},children:"Question "+(t+1)},t)})),-1!==r&&Object(o.jsx)("button",{onClick:function(){e.setState({chosenQ:-1})},children:"Clear Question"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("h6",{children:"Please use pen/pencil, paper as needed for code-snippet questions"}),Object(o.jsx)("hr",{}),-1!==r&&t[r],Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Developing Code"}),Object(o.jsx)(f,{})]})]})}}]),t}(r.Component);function g(){var e=new Date,n=e.toISOString().substring(0,10)+" "+e.toLocaleTimeString().substring(0,5);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{children:["Welcome to Technical Discussion - ",n]}),Object(o.jsx)("h2",{children:"JavaScript Knowledge & Experience preferred"}),Object(o.jsx)(v,{})]})}var A=document.getElementById("root");s.a.render(Object(o.jsx)(r.StrictMode,{children:Object(o.jsx)(g,{})}),A)},2:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.b8bbcfb9.chunk.js.map