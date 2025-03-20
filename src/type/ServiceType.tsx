export interface ServiceType {
    id?: number; // Ajout de l'ID unique
    slug: string;
    icon: string;
    image: string;
    category: string;
    title: string;
    desc: string;
    shortDesc: string;
    serviceItems: {
            id: number;
            itemTitle: string;
            itemDesc: string
        }[];
    serviceQuestions: {
                id: number;
                qsSubject: string;
                qsResponse: string;
        }[]
}

