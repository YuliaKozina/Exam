window.onload = function () {
    var left = document.getElementsByClassName('.how-it-works__slider-arrow-left');
    var right = document.getElementsByClassName('.how-it-works__slider-arrow-right');
    var elementsList = document.getElementsByClassName('.how-it-works__slider');

    var pixelsOffset = 235;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = -((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    left.onclick = function () {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        };
    };

    right.onclick = function () {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        }
    };
};