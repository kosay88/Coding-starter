$(document).ready(function(){
    
    $('#searchButton').click(function() {
        $('.images').empty();
        findResults($('#searchInput').val());
    });

    $('#searchInput').on('keyup', function(e){
        if(e.which == 13){
            $('.images').empty();
            findResults($('#searchInput').val());
        }
    })    
});

function findResults(str){

$.ajax({
    url: "https://pixabay.com/api/",
    method: "GET",
    data: {
    key: "2409187-ee958c2d8895c6eb14d3ce314",
    q: str,
    per_page:$('#mySelectNumber').val() 
    },

    success: function(data){
    displayResults (data);
}

});

function displayResults(data){
    for(var i = 0; i < data.hits.length; i++){
        var html = "";
        html += '<a href="' + data.hits[i].largeImageURL +'">';
        html += '<img src="'+data.hits[i].largeImageURL +'" class="small">';
        html += '</a>';
        $('.images').append(html);
        console.log(data.hits[i].largeImageURL);
        }
    }
}
