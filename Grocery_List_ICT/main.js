function tableGenerate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var jsoninfo = JSON.parse(this.responseText);
       console.log(jsoninfo);
       var data= jsoninfo.all
        makeTable(data)

      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();

}
    function makeTable(data) {
        var i;
        var table=" <thead><th>SL NO</th><th>ITEM</th><th>QUANTITY</th><th>UNIT</th><th>DEPARTMENT</th><th>NOTES</th></thead><tbody>";

        for (i = 0; i <data.length; i++) {
          table += "<tr><td>" +
          data[i].SL_NO+
          "</td><td>" +
          data[i].ITEM+
          "</td><td>"+
          data[i].QUANTITY+
          "</td><td>"+
          data[i].UNIT+
          "</td><td>"+
          data[i].DEPARTMENT+
          "</td><td>"+
          data[i].NOTES
          "</td></tr>";
        }
        table+="</tbody>";
        document.getElementById("shoplist").innerHTML = table;

    }
