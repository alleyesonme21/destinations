

function Destination(name, country, timeOfYear, landmarks) {
  this.name = name;
  this.country = country;
  this.timeOfYear = timeOfYear;
  this.landmarks = landmarks
}
$(document).ready(function() {
  $("#formy").submit(function(event) {
    event.preventDefault();    
    var newDest = new Destination(($("#name").val()), ($("#country").val()),
      ($("#timeOfYear").val()), ($("#landmarks").val()), );
      // console.log(newDest);


  $("#output").append("<h3><span class='clickable'>"+newDest.name+'</span></h3>');
    $("#output").append("<div class='blah'><li>"+newDest.country+"</li><li>"+newDest.timeOfYear+"</li><li>"+newDest.landmarks+"</li></div>")

    $(".clickable").click(function() {
      $(".blah").show();
    });


});
  
});