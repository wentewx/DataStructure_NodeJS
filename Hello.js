//VS PPT: https://drive.google.com/file/d/1pjOZp8Xp6Ghb31Nfnj0YRsVwAzMMyhCq/view?usp=sharing
//JS PPT: https://drive.google.com/open?id=0BwN5VWV_C7-5ZnE3d045YWZJb00
//Javascript 變數的使用

var weight=50.5;
var height=160;




//使用第三方套件 readline-sync (待使用者輸入資料後程式再繼續執行) 
//NodeJS 套件管理程式為 npm，需打開終端機輸入指令
//安裝 readline-sync 套件指令: npm install readline-sync
//另可透過package.json指定所有相關套件後 npm install 即可安裝所有套件

const readline = require('readline-sync');
weight = readline.question('請輸入您的體重(kg)?');
height = readline.question('請輸入您的身高(cm)?');  
weight = Number(weight)
height = Number(height)
if (isNaN(weight)|| weight<=0 || weight>631){
    console.log("資料有誤!請輸入介於1~630之間的數字")
}else if (isNaN(height) || height<=0 || height>240){
    console.log("資料有誤!請輸入介於1~240之間的數字")
}else {
    var bmi = weight/((height/100)**2);
    console.log("Hello! Your BMI value is "+ bmi);
}



//not only bmi value, but also judgement
//Ask user to input height only, is it workable?