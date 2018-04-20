$.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    method: "GET",
    contentType: "application/json charset=UTF-8",
    data: {
        q: "cats",
        limit: 10,
        api_key: "P9bJdm7JNuc8h48kXLOcz4h6UclUdZAs"

    },

    success: handleResults

});

function handleResults (response_body){
    response_body.data.forEach(function(item) {
        var url = item.images.fixed_height_downsampled.url;
        var image = $(document.createElement("img"));
        image.attr("src", url)
        image.appendTo("#contain")
        
    })
}