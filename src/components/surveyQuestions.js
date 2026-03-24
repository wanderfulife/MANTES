export const templateSurveyQuestions = [

    {
        id: "Q0",
        text: "Lieu d'interview",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Voirie", next: "Q3" },
            { id: 2, text: "En gare", next: "Q1" },
            { id: 3, text: "Parking", next: "Q3" }
        ]
    },

    {
        id: "Q1",
        text: "Êtes-vous arrivés en gare en voiture ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "OUI", next: "Q2" },
            { id: 2, text: "NON", next: "Q3" }
        ]
    },

    {
        id: "Q2",
        text: "Où êtes-vous garé ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Parking Relais Nord, Mantes la Jolie", next: "Q3" },
            { id: 2, text: "Parking Relais Sud, Mantes la Ville", next: "Q3" },
            { id: 3, text: "Espace public Nord, Mantes la Jolie", next: "Q3" },
            { id: 4, text: "Espace public Sud, Mantes la Ville", next: "Q3" }
        ]
    },

    {
        id: "Q3",
        text: "De quelle commune venez vous ?",
        type: 'commune',
        note: "Si l'origine est la commune où est située la gare ou une commune limitrophe à moins de 2 km, demander le quartier/secteur d'origine.",
        next: "Q4"
    },

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

    {
        id: "Q5",
        text: "Pour quelle raison vous stationnez vous autour de la gare ?",
        type: 'singleChoice',
        condition: "Q1 == 1 || Q0 == 3",
        options: [
            { id: 1, text: "Prendre le train", next: "Q6" },
            { id: 2, text: "Prendre un bus", next: "Q6" },
            { id: 3, text: "Accompagner un voyageur", next: "Q6" },
        ]
    },

    {
        id: "Q6",
        text: "Dans quelle commune allez vous ?",
        type: 'commune',
        next: "Q7"
    },

    {
        id: "Q7",
        text: "Ce lieu est-il .... ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Votre domicile", next: "Q8" },
            { id: 2, text: "Votre lieu de travail habituel", next: "Q8" },
            { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q8" },
            { id: 4, text: "Votre établissement scolaire", next: "Q8" },
            { id: 5, text: "Un lieu d'achats, courses, ...", next: "Q8" },
            { id: 6, text: "Un lieu de loisirs", next: "Q8" }
        ]
    },

    {
        id: "Q8",
        text: "Combien de temps resterez vous stationné ?",
        type: 'singleChoice',
        condition: "Q1 == 1 || Q0 == 3",
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q9" },
            { id: 2, text: "De 2h à 4h", next: "Q9" },
            { id: 3, text: "De 4h à 6h", next: "Q9" },
            { id: 4, text: "Plus de 6h", next: "Q9" }
        ]
    },

    {
        id: "Q9",
        text: "A quelle fréquence faites-vous le trajet d'aujourd'hui ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "En semaine, entre 3 et 5 fois", next: "Q10" },
            { id: 2, text: "En semaine, moins de 3 fois", next: "Q10" },
            { id: 3, text: "Le week-end principalement", next: "Q10" },
            { id: 4, text: "Moins d'une fois par semaine", next: "Q10" },
            { id: 5, text: "Moins d'une fois par mois", next: "Q10" }
        ]
    },

    {
        id: "Q10",
        text: "Seriez-vous prêts à aller vous garer au sud de la gare pendant les travaux de ce parking (qui sera fermé), ou trouverez-vous d'autres solutions ?",
        type: 'singleChoice',
        condition: "Q0 == 3",
        options: [
            { id: 1, text: "OUI", next: "end" },
            { id: 2, text: "NON", next: "end" }
        ]
    }
];
