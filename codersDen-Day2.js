//1.Using console.log() print out the following statement:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");


//2.Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num= "10";
console.log(typeof num)//string
console.log(typeof 10)//number
let numInt= parseInt(num)
console.log(numInt)//10
console.log(typeof numInt)//number

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num2= "9.8";
let num2Float= parseFloat(num2)
console.log(num2Float===10)//false
let num2Int= Math.ceil(num2Float)
console.log(num2Int)//10
console.log(num2Int===10)//true


//5.Check if 'on' is found in both python and jargon
let python= "python"
let jargon= "jargon"

console.log(python.endsWith("on"))//true
console.log(jargon.endsWith("on"))//true

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon'.endsWith('jargon'))//true

//7.Generate a random number between 0 and 100 inclusively.
console.log(Math.ceil(Math.random()*100))

//8.Generate a random number between 50 and 100 inclusively.
console.log(Math.ceil(Math.random()*50+50))

//9.Generate a random number between 0 and 255 inclusively.
console.log(Math.ceil(Math.random()*255))


//10.Access the 'JavaScript' string characters using a random number.
let javascript= 'JavaScript'
let randomString = Math.floor(Math.random()* javascript.length)
 console.log(javascript.charAt(randomString))

 //11 Use console.log() and escape characters to print the following pattern

// 2 1 2 4 8
//  3 1 3 9 27
//  4 1 4 16 64
//  5 1 5 25 125


 //12. Use substr to slice out the phrase because because because from the following sentence:
 
let becauseStatement=  'You cannot end a sentence with because because because is a conjunction'
console.log(becauseStatement.indexOf('b'))//31
console.log(becauseStatement.indexOf(' is'))//54
console.log(becauseStatement.substr(31,23))



//Exercise: level 3

//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence1= 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let pattern1= /love/gi
console.log(sentence1.match(pattern1))

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let pattern2= /because/gi
console.log(becauseStatement.match(pattern2))

//3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace("%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching", "I am a teacher, and I love teaching;. There is nothing; as more rewarding as educating and empowering people. ;I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30 Days Of JavaScript is also the result of love of teaching"))

//4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let txt= 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regEx=/\d+/g;
let stringNumbers= txt.match(regEx)
console.log(stringNumbers)//['5000','10000','15000']
let  number0=  Number(stringNumbers[0])
let number1= Number(stringNumbers[1])
let number2= Number(stringNumbers[2])
let totalAnnualIncome= ((number0+number2)*12)+number1
console.log(totalAnnualIncome)//250000 euro



