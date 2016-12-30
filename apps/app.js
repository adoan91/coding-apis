$(function() {

  $('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });

  // $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  //   //var myData = data.Search;
  //   //var myData = data.Search[0].Title;
  //   //console.log(data);
  //   //console.log(myData);
  //   showResults(data.Search);
  // },
  // //'xml'
  // 'json'
  // );

  

});

function getRequest(searchTerm) {

  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'https://www.omdbapi.com';

  // $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
  $.getJSON(url, params, function(data){
    showResults(data.Search);
  },
  'json'
  );
}

function showResults(results) {
  var html = "";
  $.each(results, function(index, value) {
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}