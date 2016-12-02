function imagesService() {

    const self = this;
    self.random = random;
    self.search = search;

    function random(callback) {

        const request = new XMLHttpRequest();

        request.open("GET", "http://pixabay.com/api/?key=3892617-2883036288160f7e76309a559&response_group=image_details&per_page=7", true);

        request.onreadystatechange = function () {

            if (request.readyState == 4) {
                if (request.status == 200) {
                    const data = JSON.parse(request.responseText);
                    callback(data);
                    //console.log(data);
                }
            }
        };

        request.send();

    };

    function search(query, callback) {

        const request = new XMLHttpRequest();

        if (query.length > 0) {

            request.open("GET", "http://pixabay.com/api/?key=3892617-2883036288160f7e76309a559&q=" + encodeURIComponent(query) + "&response_group=image_details&per_page=7");

            request.onreadystatechange = function () {

                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const data = JSON.parse(request.responseText);
                        callback(data);
                    }
                }
            };

            request.send();
        } else {
            return
        }

    };


};
