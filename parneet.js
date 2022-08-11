fetch(
  "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
)
  .then((res) => res.json())
  .then(function (datas) {
    for (var i in datas) {
      var row = `
          <tr>
			<td>${"→"}</td>
<td>${datas[i].userId}</td>
            <td>${datas[i].id}<br>
			<em><small><small>${datas[i].userId}-${datas[i].userId}-2019</small></small></em></td>
            <td style="text-decoration:underline;">${datas[i].title}</td>
            <td>${datas[i].body}</td>
          </tr>1
  `;
      var table = $("#table-body");
      table.append(row);
    }
  });

function newsletter(){
	document.getElementById("news").innerHTML="Your first email newsletter will arrive shortly. Subscribe to receive news from WEEB ZONE.";
	document.getElementById("news2").innerHTML="HAVE A GOOD DAY!";
}

function fetcch(){
	var table=document.getElementById("table-body");
	var b=document.getElementById("b").value;
	var c=100;
	var d=document.getElementById("d").value;
	var e=document.getElementById("e").value;
	var row=table.insertRow(0);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	cell1.innerHTML="→";
	cell2.innerHTML=b;
	cell3.innerHTML=++c;
	cell4.innerHTML=d;
	cell5.innerHTML=e;
	
	window.alert("BLOG POSTED!");
}