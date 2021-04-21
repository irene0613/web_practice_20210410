var i1 = 0;

function move() {
    i1++;
    if (i1 > 2) i1 = 0;
    $("h1").text($("li").eq(i1).text());
}
run1 = window.setInterval("move()", 250);

$(function() {
    $("input").on("click", function() {
        clearInterval(run1);
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem); //Math.floor取整數,Math.random()為0-1的小數
        $("h1").text($("li").eq(randomChildNumber).text());
        var myimages = new Array()
        myimages[0] = "0.jpg"
        myimages[1] = "1.jpg"
        myimages[2] = "2.jpg"
        document.getElementById("myImage").src = myimages[randomChildNumber];
    });
});