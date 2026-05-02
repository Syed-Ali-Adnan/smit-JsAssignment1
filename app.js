Section 1:

1. JavaScript kya hoti hai?
JavaScript ek programming language hai jo websites ko interactive banati hai.
Ye browser ke andar run hoti hai.

2. JavaScript ka use kaha hota hai?

1.Web development (buttons, forms, sliders)
2.Server-side (Node.js)
3.Mobile apps (React Native)


3. Browser JS ko kaise run karta hai?
Browser ke andar JavaScript Engine hota hai (like V8), jo code ko execute karta hai.

4. JS compiled hai ya interpreted?
JavaScript interpreted language kehlati hai (but internally JIT use hota hai).

5. Hello World:
console.log("Hello World");

Section 2: Interpreter vs Compiler

6. Interpreter kya hota hai?
Line-by-line code execute karta hai.

7. Compiler kya hota hai?
Poora code ek baar mein machine code mein convert karta hai.

8. JS interpreter-based kyun?
Kyuki browser usay line-by-line execute karta hai.

9. 2 differences:

Interpreter  line by line
Interpreter slow

Compiler  full code ek baar
Compiler fast


10. Compiler language example:
C, C++

🟡 Section 3: Variables (11–20)
11. Variable kya hota hai?
Data store karne ka container.
12. var, let, const difference:


var → old

let → changeable

const → fixed

13. var scope:
Function scope

14. let scope:
Block scope

15. const use:
Jab value change nahi karni ho

16. const reassign?
 Nahi

17. Output:
var x = 10;var x = 20;
console.log(x);
 20

18. Output:
let y = 10;y = 15;
console.log(y);
15

19.Error:
const z = 5;
z = 10;

Error: Assignment to constant variable

Section 4: Data Types

21. Kitne types?
2 types: Primitive & Non-primitive

22. Primitive types:
string
number
boolean
null
undefined
bigint
symbol


23. string:
Text data
let name = "Ali";

24. number:
Numeric value
let age = 25;

25. boolean:
True / False

26. null vs undefined:

null  intentionally empty

undefined  value assign nahi hui


27. Object:
Key-value pair
let user = {name: "Ali"};

28. Array:
List of values
let arr = [1, 2, 3];

🟡 Section 5: typeof
29. typeof kya karta hai?
Data type batata hai

30.
typeof "Hello"
string

31.
typeof 123
number

32.
typeof null
object (JS bug)

Section 6: Truthy & Falsy

33. Truthy value:
Jo true treat hoti ho

34. Falsy values:

false
0
""
null
undefined
NaN


35. Output:
if (0) { console.log("Yes");} else { console.log("No");}
 No

36. Output:
if ("Hello") { console.log("True");}
 True

37. false, 0, ""
 Falsy

Section 7: Operators

38. Arithmetic operators:

/ %

39. Output:
let a = 5 + 3 * 2;
console.log(a);
 11

40. = vs ==
=  assign


==  compare (loose)


41. === kyun use hota hai?
Strict comparison (type + value)

42. Output:
5 == "5"
 true

Section 8: Comparison Operators 

43. Operators:

< >= <= == === !=

44.
10 > 5
 true

45.
10 === "10"
 false

Section 9: Logical Operators

46. Operators:
&& || !

47.
true && false
 false

48.
true || false
 true

Section 10: Increment / Decrement

49.
let x = 5;x++;
console.log(x);
 6

50.
let y = 5;
console.log(++y);
 6
