
jQuery().ready(function() {

    jQuery("#simplii-car-request-form").validate({
        focusInvalid: false,
        rules: {
            simplii_abholzeit: "required",
            simplii_rueckgabezeit: "required",
            simplii_full_date: "required",
            simplii_needed_kilometer: "required",
            simplii_surname: {
                required: true,
                minlength: 2
            },
            simplii_name: {
                required: true,
                minlength: 2
            },
            simplii_mail_address: {
                required: true,
                email: true
            },
            simplii_phonenumber: {
                required: true,
                regx:/^(?![8]{10}|[9]{10})[7-9]{1}[0-9]{9}$/,
                minlength:8,
                maxlength:14,
            },
            acc_request: "required"
        },
        messages: {
            simplii_abholzeit: "Bitte gib Deine gewünschte Abholzeit an.",
            simplii_rueckgabezeit: "Bitte gib Deine gewünschte Rückgabezeit an.",
            simplii_full_date: "Bitte gib Deinen gewünschten Buchungszeitraum an.",
            simplii_needed_kilometer: "Bitte gib Deine benötigten Kilometer an.",
            simplii_surname: {
                required: "Bitte gib Deinen Vornamen an",
                minlength: "Der Vorname muss mindestens 2 Zeichen haben."
            },
            simplii_name: {
                required: "Bitte gib Deinen Namen an",
                minlength: "Der Vorname muss mindestens 2 Zeichen haben."
            },
            simplii_mail_address: "Geben gib eine gültige E-Mail-Adresse an.",
            simplii_phonenumber: "Geben gib eine gültige Telefonnummer an.",
            acc_request: "Du musst die Bedingungen zum abschicken des Formulares akzeptieren. ",
        }
    });
})