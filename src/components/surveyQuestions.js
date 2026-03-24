export const templateSurveyQuestions = [

    // Q1 - Commune d'origine
    {
        id: "Q1",
        text: "De quelle commune venez vous ?",
        type: 'commune',
        next: "Q2"
    },

    // Q2 - Motif origine
    {
        id: "Q2",
        text: "Ce lieu est-il .... ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Votre domicile", next: "Q3" },
            { id: 2, text: "Votre lieu de travail habituel", next: "Q3" },
            { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q3" },
            { id: 4, text: "Votre établissement scolaire", next: "Q3" },
            { id: 5, text: "Un lieu d'achats, courses, ...", next: "Q3" },
            { id: 6, text: "Un lieu de loisirs", next: "Q3" }
        ]
    },

    // Q3 - Commune de destination
    {
        id: "Q3",
        text: "Dans quelle commune vous ?",
        type: 'commune',
        next: "Q4"
    },

    // Q4 - Motif destination
    {
        id: "Q4",
        text: "Ce lieu est-il .... ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Votre domicile", next: "Q5" },
            { id: 2, text: "Votre lieu de travail habituel", next: "Q5" },
            { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q5" },
            { id: 4, text: "Votre établissement scolaire", next: "Q5" },
            { id: 5, text: "Un lieu d'achats, courses, ...", next: "Q5" },
            { id: 6, text: "Un lieu de loisirs", next: "Q5" }
        ]
    },

    // Q5 - Fréquence du trajet
    {
        id: "Q5",
        text: "A quelle fréquence faites-vous le trajet d'aujourd'hui ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "En semaine, entre 3 et 5 fois", next: "Q6" },
            { id: 2, text: "En semaine, moins de 3 fois", next: "Q6" },
            { id: 3, text: "Le week-end principalement", next: "Q6" },
            { id: 4, text: "Moins d'une fois par semaine", next: "Q6" },
            { id: 5, text: "Moins d'une fois par mois", next: "Q6" }
        ]
    },

    // Q6 - Utilisation du PEM
    {
        id: "Q6",
        text: "Utilisez vous ou non le PEM à proximité ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "OUI", next: "Q7" },
            { id: 2, text: "NON", next: "Q7" }
        ]
    },

    // Q7 - Parking sud pendant les travaux
    {
        id: "Q7",
        text: "Seriez-vous prêts à aller vous garer au sud de la gare pendant les travaux de ce parking (qui sera fermé), ou trouveriez-vous d'autres solutions ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "OUI", next: "end" },
            { id: 2, text: "NON", next: "end" }
        ]
    }
];
