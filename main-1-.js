// index-1-.html page //
  $("#log").click(function(){
  	 $("#start-button").show(1000);
  });

 $("#start-button").click(function(){
 	var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/home.html");
	   window.open(url);
   });

 // our community page //
 //it doesn't work yet
 $("#addFeedback").click(function(){
 	console.log("i work")
 	var feedback = [];
 	var add = $("#feedback").val()
 	if(add === ""){
 		alert("You must write your feedback")
 	}else{
 		$("#CommunityList").append(add)
 		feedback.push(add)
 	}
 });
//// BACK ///
 //back to home
 $("#home").click(function(){
 	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/home.html");
 	window.open(url);
 })

 //go to about us 
  $("#about-us").click(function(){
  	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/about-us.html");
  	window.open(url);
  })

  //go to our-community
   $("#our-community").click(function(){
   	console.log("iam work")
   	var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/our-community.html");
   	window.open(url);
   })