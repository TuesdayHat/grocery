//var shopping = [];

$(document).ready(function(){
  var shopping = [];
  $("#theForm").submit(function(){
    event.preventDefault();
    //debugger;
    var input = $("input#food").val();
    $("#sortedList").empty();

    function addList (){
      $("#list").append("<li>" + input + "</li>")
      shopping.push(input);
      sortList(shopping);
    }

    function sortList(list){
      var sorted = list.sort();
      sorted.forEach(function(item){
        item = item.toUpperCase();
        $("#sortedList").append("<li>" + item + "</li>")
      });
      $("#list").hide();
    }

    addList();


  });
});
