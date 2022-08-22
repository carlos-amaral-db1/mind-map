import { TechnologyData } from "./technologyData";

export const reposData = [
    // {
    //     name : "Nome do repositório",
    //     subtitle : "Responsabilidade do repositório",
    //     githubLink : "https://github.com/avenuesec",

    //     observations : {
    //         isEmpty : true,
    //         branchMainIsUpdated : false,
    //         readmeIsUpdated : false,

    //         suggestionsList : [
    //           "Exemplo de sugestão 1",
    //           "Exemplo de sugestão 2"  
    //         ],
    //     },

    //     technologies : {
    //         dependenciesPackageLink : "https://github.com/",
    //         list : [
    //             TechnologyData.golang_1_18,
    //             TechnologyData.gRPC_1_47_0,
    //             TechnologyData.protobuf_1_28_0
    //         ]
    //     }
    // },



    {
        name: "Account",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/account",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [
                "Exemplo de anotação"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/account/blob/develop/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.gRPC_1_47_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "Accio MF",
        subtitle: "Microserviços do Account",
        githubLink: "https://github.com/avenuesec/accio-mf",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [
                "Última atualização em Fevereiro de 2022",
                "Branch main do repositório accio-mf está meio simples, isso é correto?",
                "No  package.json indica que existe a dependencia do sass, porém no  app.tsx diz que a tecnologia é css, a dependencia do sass é necessária?"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/accio-mf/blob/main/package.json",
            list: [
                TechnologyData.react_6_4_19,
                TechnologyData.typeScript_4_5_5,
                TechnologyData.css_latest
            ]
        }
    },

    {
        name: "Account Adapters",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/account-adapters",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [
                "É necessário existir? Sabendo que está vázio"
            ],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },

    

    {
        name: "Account Contracts",
        subtitle: "Contratos relacionados ao SalesForce",
        githubLink: "https://github.com/avenuesec/account-contracts",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [
                "Colocar as tecnologias no README",
                "No go.mod, existem dois protobuf como dependência. Linha 8 - Linha 13"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/account-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.gRPC_1_39_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "Account Project Layout",
        subtitle: "Layout básico das aplicações de Account",
        githubLink: "hhttps://github.com/avenuesec/account-project-layout",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Actions",
        subtitle: "Integration Tests",
        githubLink: "https://github.com/avenuesec/actions",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [
                "Atualizar o README da raiz com as tecnologias e responsabilidades do repositório"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/actions/blob/main/run_integration/package.json",
            list: [
                TechnologyData.js_latest,
                TechnologyData.axios_0_27_2,
                TechnologyData.node_16_13_0
            ]
        }
    },



    {
        name: "Actverso",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/actverso",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [
                "Branch dev também vazia"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/actverso/tree/actverso#setup",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.warp,
                TechnologyData.aws
            ]
        }
    },



    {
        name: "Apex Contracts",
        subtitle: "Apex common contracts",
        githubLink: "https://github.com/avenuesec/apex-contracts",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/apex-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.datastore_1_1_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "API",
        subtitle: "Samples and documentation for Avenue's Trading plataform API",
        githubLink: "https://github.com/avenuesec/api",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/apex-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.react_16_8_6,
                TechnologyData.axios_0_19_0
            ]
        }
    },
]