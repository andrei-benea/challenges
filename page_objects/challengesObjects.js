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
        console.log(strin)
    }
    // Input from the command line a number, and if it contains 2 as a character, remove it
    // async challengeThree() {}
    // //////// //////// //////// //////
    //From an array of Months, using a switch conditional, print : 
    // for : 'June', print 'strawberries', 
    // for : 'December' print 'snow',
    // for : 'September' print 'colors',
    // for : 'February'  print 'ski',
    // for : 'April' print 'easter',
    // for everything else print 'not to be considered'
    async challengeFour() {
        let month;
        let year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        switch (new Date().getMonth()) {
            case 0:
                month = 'January';
                console.log('not to be considered')
                break;
            case 1:
                month = 'February';
                console.log('ski')
                break;
            case 2:
                month = 'March';
                console.log('not to be considered')
                break;
            case 3:
                month = 'April';
                console.log('easter')
                break;
            case 4:
                month = 'May';
                console.log('not to be considered')
                break;
            case 5:
                month = 'June';
                console.log('strawberries')
                break;
            case 6:
                month = 'July';
                console.log('not to be considered')
                break;
            case 7:
                month = 'August';
                console.log('not to be considered')
                break;
            case 8:
                month = 'September';
                console.log('colors')
                break;
            case 9:
                month = 'October';
                console.log('not to be considered')
                break;
            case 10:
                month = 'November';
                console.log('not to be considered')
                break;
            case 11:
                month = 'December';
                console.log('snow')
                break;
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