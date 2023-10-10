
var simplii_url = document.location.protocol + '//' + document.location.host;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

jQuery.ajax({
    type: 'POST',
    url: simplii_start_ajax.ajaxurl,
    dataType: "json",
    data: {
        action: 'getRequestedDates',
        request_id: urlParams.get('request_id')
    },
    success: function (response, textStatus, XMLHttpRequest) {
        requestDates = [response['data']['startdate'], response['data']['enddate']];
        getRequestCalendar(requestDates);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {

    }
});

function getRequestCalendar(requestDates) {
    const DateTime = easepick.DateTime;
    const bookedDates = [
        requestDates,

    ].map(d => {
        if (d instanceof Array) {
            const start = new DateTime(d[0], 'DD.MM.YYYY');
            const end = new DateTime(d[1], 'DD.MM.YYYY');

            return [start, end];
        }

        return new DateTime(d, 'DD.MM.YYYY');
    });



    const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
            simplii_url + '/wp-content/plugins/simplii/css/lightpick.css',
            simplii_url + '/wp-content/plugins/simplii/css/lightpick_individual.css',
        ],
        plugins: ['RangePlugin', 'LockPlugin'],
        RangePlugin: {
            tooltipNumber(num) {
                return num - 1;
            },
            locale: {
                one: 'Tag',
                other: 'Tage',
            },
        },
        lang: "de-DE",
        grid: 3,
        calendars: 3,
        inline: true,
        LockPlugin: {
            minDate: new Date(),
            minDays: 2,
            maxDays: 730,
            inseparable: false,

            filter(date, picked) {
                if (picked.length === 1) {
                    const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                    return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
                }

                return date.inArray(bookedDates, '[)');
            },
        },


    });
}



