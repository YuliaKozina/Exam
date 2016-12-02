window.onload = function () {
    const service = new imagesService();

    const search_btn = document.querySelector("#search-btn");
    //console.log("search_btn:", search_btn);

    service.random(function (data) {
        render(data);
    });

    const render = function (data) {
        //console.log("data from render", data);

        const images_wrapper = document.querySelector("#holidays__ideas_box");

        var images = "";

        for (var i = 0; i <= 6; i++) {

            if (i == 4) {
                images += '<div class="holidays__idea holidays__idea--wider animated fadeInLeft" style="background-image: url(' + data.hits[i].webformatURL + ');"><a href="' + data.hits[i].pageURL + '" target="_blank"><div class="idea__text_wrapper"><p class="idea__title">' + data.hits[i].tags + '</p></div></a></div>';
            } else if (i == 5) {
                images += '<div class="holidays__idea holidays__idea--wider animated fadeInLeft" style="background-image: url(' + data.hits[i].webformatURL + ');"><a href="' + data.hits[i].pageURL + '" target="_blank"><div class="idea__text_wrapper"><p class="idea__title">' + data.hits[i].tags + '</p></div></a></div>';

            } else {
                images += '<div class="holidays__idea animated fadeInLeft" style="background-image: url(' + data.hits[i].webformatURL + ');"><a href="' + data.hits[i].pageURL + '" target="_blank"><div class="idea__text_wrapper"><p class="idea__title">' + data.hits[i].tags + '</p></div></a></div>';
            }

            //console.log("image", data.hits[i].webformatURL);
        }
        //console.log("images", images);

        images_wrapper.innerHTML = "";
        images_wrapper.innerHTML = images;
    };

    const searchImages = function() {
        const query = document.querySelector("#search-input").value;
        //console.log("search query input: ", query);

        service.search(query, function (data) {
            render(data);
        });
    };

    if (search_btn.addEventListener) {
        search_btn.addEventListener('click', searchImages);
    } else if (search_btn.attachEvent) {
        search_btn.attachEvent('onclick', searchImages);
    }


};