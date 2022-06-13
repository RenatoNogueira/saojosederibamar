$(document).ready(function () {
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#sjRIBAMAR").attr('src');

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#sjRIBAMAR").attr('src', '');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#videoUM").on('shown.bs.modal', function (e) {
        $("#sjRIBAMAR").attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#videoUM").on('hide.bs.modal', function (e) {
        $("#sjRIBAMAR").attr('src', '');
    });
});

$(document).ready(function () {
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#sjRIBAMARII").attr('src');

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#sjRIBAMARII").attr('src', '');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#videoDOIS").on('shown.bs.modal', function (e) {
        $("#sjRIBAMARII").attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#videoDOIS").on('hide.bs.modal', function (e) {
        $("#sjRIBAMARII").attr('src', '');
    });
});