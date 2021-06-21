// var x=prompt("Enter Any Number");
//x+=4;//x=x+4
// console.log('the Number is:'+x);
// var num1=prompt("Enter Any Number");
// var num2=prompt("Enter Any Number two");
// num1=parseInt(num1,10);
// num2=parseInt(num2,10);
// var result,sub,mul,div,rem;
// result=num1+num2;
// sub=num1-num2;
// mul=num1*num2;
// div=num1/num2;
// rem=num1%num2;
// document.write('The First Number:'+num1+"</br>"+'The Second Number:'+num2+"</br>"+'total:'+result+"</br>");
// document.write('The First Number:'+num1+"</br>"+'The Second Number:'+num2+"</br>"+'total:'+sub+"</br>");
// document.write('The First Number:'+num1+"</br>"+'The Second Number:'+num2+"</br>"+'total:'+mul+"</br>");
// document.write('The First Number:'+num1+"</br>"+'The Second Number:'+num2+"</br>"+'total:'+div+"</br>");
// document.write('The First Number:'+num1+"</br>"+'The Second Number:'+num2+"</br>"+'total:'+rem+"</br>");

//const { Console } = require("console");

// var f=prompt("Enter Celcius Value");
//  f=(f-32)*5/9;
//  document.write('The Farhenhiet Value:'+f);

// var num1=prompt("Enter Any Number");
// var num2=prompt("Enter Any Number two");
// if(num1>num2)
// console.log(num1+'is a Big Number');
// else
// console.log(num2+'is a Big Number');

// var year=prompt("Enter any Year ");
// if(year%4==0)
// console.log('leaf Year');
// else 
// console.log('Not leaf Year');
// && logical opertator//and gate 2 tai true hote hobe like,11,00 
// ||//or gate jekono akta true holei hobe like 01=1
// 11=1
// 01=1

// var letter=prompt("Enter any Vowel");
// if(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")
// console.log('vowel');
// else
// console.log('consonent');
// var num1=prompt("Enter any number1");
// var num2=prompt("Enter any number2");
// var num3=prompt("Enter any number3");
// if(num1>num2 && num1>num3)
// document.write(num1+"&nbsp;"+'<h4>Number one is greater</h4>');
// else if(num2>num1 && num2>num3)
// document.write(num2+"&nbsp;"+'<h4>Number two is greater</h4>');
// else
// document.write(num3+"&nbsp;"+'<h4>Number three is greater</h4>');     89


// var mark=prompt("Enter any Marks");
//     mark=parseInt(mark);

//     if((mark > 100))  
//     document.write('Invaild Marks,Try to submit Vaild Marks!');
//     else if(mark<0)
//     document.write('Invaild Marks,Try to submit Vaild Marks!');
//     else if(mark>=80 && mark<=100)
//     document.write('A+');

//     else if(mark>=70 && mark<=79)
//     document.write('A');

//     else if(mark>=60 && mark<=69)
//      document.write('A-');

//     else if(mark>=33 && mark<=39)
//      document.write('D');

//     else
//      document.write('fail');


    //  for(i=1;i<=100;i++){//i=initial  1+1
    //       var res=i;
    //       document.write(res+"<br>");
    //  }

    //  for(i=1;i<=100;i=i+2){//i=initial  1+1
    //       var res=i;
    //       document.write(res+"<br>");
    //  }


    // for(i=1;i<=100;i++){
    //     for(j=1;j<=10;j++){
    //         var res=i*j;
    //         document.write(i+'x'+j+'='+res+'<br>');
    //     }
    //     document.write('<br>');
    // }

    // var k=parseInt(prompt("Enter the First value"));
    // var h=parseInt(prompt("Enter the second value"));
    // var sum=0;
    // for(var x=k;x<=h;x=x+1){
    //     sum=sum+x;
    // }
    // document.write(sum);
    // function NameValue(num){
    //     var res=num*num;
    //     document.write("Result:"+res+"<br>");

    // }
    // NameValue(6);
    // NameValue(7);


    //   function NameValue(num,num2){
    //     var res=num*num2;
    //     return res;
       
    // }
    // var x=NameValue(5,7);
    //  document.write("Result:"+x+"<br>");



//  var num=6;
//  var res=num*num;
//  document.write("Result:"+res+"<br>");

//   var num=7;
//  var res=num*num;
//  document.write("Result:"+res+"<br>");




function Teacher(name,salary,age,sub){
    //alert("kabir");
    this.name=name;
    this.salary=salary;
    this.age=age;
    this.sub=sub;

    this.display=function(){
        console.log(this.name);
        console.log(this.salary);[]
        console.log(this.age);
        console.log(this.sub);
    }

 
}
var teacherOne = new Teacher('Humayun Kabir',30000,23,['English','ICT','Math']);
var teacherTwo = new Teacher('Jamil Ahmed',32000,23,['English','ICT','Math']);

// document.write("name:"+ teacherOne.name+"<br>");
// document.write("salary:"+ teacherOne.salary);

teacherOne.display();
teacherTwo.display();











