$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var modelNumber = $('#modelNumber').val();
      $.ajax({
        url: 'carDetails.json',
        dataType: 'json',
        success: function(data) {
          var car = data[modelNumber];
          if (car) {
            var carDetails = '<p><strong>Make:</strong> ' + car.make + '</p>';
            carDetails += '<p><strong>Model:</strong> ' + car.model + '</p>';
            carDetails += '<p><strong>Year:</strong> ' + car.year + '</p>';
            carDetails += '<p><strong>Color:</strong> ' + car.color + '</p>';
            $('#carDetails').html(carDetails);
          } else {
            $('#carDetails').html('<p>Car not found</p>');
          }
        },
        error: function() {
          $('#carDetails').html('<p>Error loading car details</p>');
        }
      });
    });
  });
  