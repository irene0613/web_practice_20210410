var x = 0;
$(function() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    var millisecsPerDay = 24 * 60 * 60 * 1000;
    for (x = 0; x < topicCount; x++) {
        var color = "color";
        if (topic[x] == "國定假日" | topic[x] == "尚未開學") {
            color = "co";
        }
        $("#courseTable").append("<tr class = " + color + ">" +
            `<td>${x + 1}</td>` +
            `<td>${((new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()).slice(5)}</td>` +
            `<td>${topic[x]}</td>` +
            "</tr>");
        //startDate.getTime()是距離1970有多少天+每次加7天
        //${...}在一句話中插入
    }
});

function myCreateFunction() {
    var topic1 = window.prompt("Please enter topic");
    if (topic1 != null)
        topic.push(topic1);
    var table = document.getElementById("courseTable");
    var topicCount = topic.length;
    var millisecsPerDay = 24 * 60 * 60 * 1000;
    for (; x < topicCount; x++) {
        var color = "color";
        $("#courseTable").append("<tr class = " + color + ">" +
            `<td>${x + 1}</td>` +
            `<td>${((new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()).slice(5)}</td>` +
            `<td>${topic[x]}</td>` +
            "</tr>");
    }
}