
const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    grid: 4,
    calendars: 3,
    inline: true,
    AmpPlugin: {
        resetButton: true,
        darkMode: false
    },
    RangePlugin: {
        repick: true
    },
    plugins: [
        "AmpPlugin",
        "RangePlugin",
        "LockPlugin"
    ]
})
    