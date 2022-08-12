export default class ChallengesObjects {
    url = 'www.google.com';
    elements = {

    };
    // Print a String, a number and a Date in miliseconds in the console using parametrized strings
    async challengeOne() {
        let str = 'string';
        let nr = 4;
        let dt = Date.now();
        console.log(`String is ${str}`)
        console.log(`String is ${nr}`)
        console.log(`String is ${dt}`)
    }
    // Print 2 Strings combined and the String 'Test$*&' without the $ sign. Print the result reversed.
    async challengeTwo() {
        let str = 'string';
        let stri = 'stringy';
        let strin = 'Test$*&';
        console.log(`Combined strings are ${stri}` + `${str}`)
        let res = strin.replace('$', '')
        console.log(res)
        let len = strin.length;
        let rev = new String;
        for (let i = len - 1; i >= 0; i--) {
            let d = res.charAt(i)
            console.log(d)
            rev += d;
        }
        console.log(rev)
    }
    // Input from the command line a number, and if it contains 2 as a character, remove it
    async challengeThree() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question(`Input any sequence of numbers then press ENTER`, name => {
            let re = /2/
            if (name.match(re)) {
                console.log(name.replace(re, ''))
            }
            else {
                console.log('Try again. GOODBYE!');    
            }
            readline.close();
        });
    }
    ////////////////////////////////////
    //From an array of Months, using a switch conditional, print : 
    // for : 'June', print 'strawberries', 
    // for : 'December' print 'snow',
    // for : 'September' print 'colors',
    // for : 'February'  print 'ski',
    // for : 'April' print 'easter',
    // for everything else print 'not to be considered'
    async challengeFour() {
        const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let len = year.length;
        for (let i = 0; i < len; i++) {
            switch (year[i]) {
                case 'June':
                    console.log('June: strawberries')
                    break;
                case 'December':
                    console.log('December: snow')
                    break;
                case 'September':
                    console.log('September: colors')
                    break;
                case 'February':
                    console.log('February: ski')
                    break;
                case 'April':
                    console.log('April: easter')
                    break;
                default:
                    console.log('Everything else: not to be considered')
                    break;
            }
        }
    }
    async challengeFive() {
        await this.checkreversed(334);
        await this.checkreversed(333);
    }
    async checkreversed(number) {
        var rem, temp, final = 0;
        temp = number;
        while (number > 0) {
            rem = number % 10;
            number = parseInt(number / 10);
            final = final * 10 + rem;
        }
        return console.log(final === temp);
    }
    // Generate an array of Strings that contains numbers from 1 to 100. Display each array element. Replace number 49 with 1313.
    async challengeSix() {
        let arr = Array();
        for (let i = 1; i < 101; i++) {
            arr.push(i.toString())
        }
        console.log(arr)
        arr.splice(48, 1, '1313');
        console.log(arr)
    }
}