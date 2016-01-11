// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });
  $('.upvote').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    var totalVotes = $(this).parent().find('.total-votes');
    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      success: function(response) {
        totalVotes.text(response);
      }
    });
  });

  $('.downvote').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    var totalVotes = $(this).parent().find('.total-votes');
    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      success: function(response) {
        totalVotes.text(response);
      }
    });
  });
