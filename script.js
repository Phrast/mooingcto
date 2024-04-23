function createCloud() {
  var cloud = $('<div class="cloud"><img src="./img/grass.png" alt="Cloud"></div>');
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var leftPosition = Math.random() * windowWidth;
  var topPosition = Math.random() * windowHeight * 0.8 + windowHeight * 0.2; // Scatter more on the lower side
  
  cloud.css({
    left: leftPosition,
    top: topPosition
  });
  
  
  // Store original position
  cloud.data('originalX', leftPosition);
  cloud.data('originalY', topPosition);
  
  $('#cloud-container').append(cloud);
}



$(document).ready(function() {

  var numberOfClouds = 20;
  var maxMove = 50; // Maximum distance clouds can move from their original position
  
  // Create clouds
  for (var i = 0; i < numberOfClouds; i++) {
    createCloud();
  }

});

