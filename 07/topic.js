 //var topic1 = window.prompt("Please enter topic");
 var topic = [
     "尚未開學",
     "國定假日",
     "環境準備",
     "隨機性",
     "重複性",
     "條件判斷",
     //topic1
 ];

 var startDate = new Date();

 function setMonthAndDay(startMonth, startDay) { //一次設定好月份與日期
     startDate.setMonth(startMonth - 1, startDay);
     startDate.setHours(0);
     startDate.setMinutes(0);
     startDate.setSeconds(0);
 }
 /*var topic1 = window.prompt("Please enter topic");
 if (topic1 != null)
     topic.push(topic1);*/
 var month;
 month = window.prompt("Please enter Month");
 while (month > 12 | month < 1)
     month = window.prompt("Please enter Month");
 var date;
 date = window.prompt("Please enter Date");
 while (month == 1 | month == 3 | month == 5 | month == 7 | month == 8 | month == 10 | month == 12 && date > 31 | date < 1)
     date = window.prompt("Please enter Date");
 while (month == 4 | month == 6 | month == 9 | month == 11 && date > 30 | date < 1)
     date = window.prompt("Please enter Date");
 while (month == 2 && date > 29 | date < 1)
     date = window.prompt("Please enter Date");
 setMonthAndDay(month, date); //呼叫前面的funtion
 //setMonthAndDay(4, 1);