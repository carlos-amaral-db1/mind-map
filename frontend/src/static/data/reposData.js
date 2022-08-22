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



    {
        name: "App certificates",
        subtitle: "This repository contains all the certificates",
        githubLink: "https://github.com/avenuesec/app_certificates",

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
        name: "Argocd",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/argocd",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: [
                TechnologyData.shell
            ]
        }
    },



    {
        name: "Atlantis",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/atlantis",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: [
                TechnologyData.shell
            ]
        }
    },



    {
        name: "Avenue RFCs",
        subtitle: "This repository holds the Request for Comments (RFCs) for Avenue",
        githubLink: "https://github.com/avenuesec/avenue-rfcs",

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
        name: "Backend Dev Test",
        subtitle: "Receive data and store in a safe repository",
        githubLink: "https://github.com/avenuesec/backend-dev-test",

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
        name: "Banking",
        subtitle: "Manager banking features, such as card and account management and transactions authorizations",
        githubLink: "https://github.com/avenuesec/banking",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/banking/blob/dev/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.postgres_1_1_0
            ]
        }
    },



    {
        name: "Banking Web",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/banking-web",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/banking-web",
            list: []
        }
    },



    {
        name: "Bexs Contracts",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/bexs-contracts",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/bexs-contracts",
            list: []
        }
    },



    {
        name: "Bonds",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/bonds",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/bonds/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.amqp_1_0_0
            ]
        }
    },



    {
        name: "BrBroker",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/brbroker",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/brbroker/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_17,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.grpc_1_45_0
            ]
        }
    },



    {
        name: "BrBroker Contracts",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/brbroker-contracts",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/brbroker-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.gRPC_1_39_0
            ]
        }
    },



    {
        name: "BrBroker Migrator",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/brbroker-migrator",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/brbroker-migrator/blob/master/go.work.sum",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.firestore_1_1_0,
                TechnologyData.bigquery_1_12_0
            ]
        }
    },



    {
        name: "BrBroker Dtvm Ted Worker",
        subtitle: "Make TED inside DTVM",
        githubLink: "https://github.com/avenuesec/brbroker.dtvm.ted-worker",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "CLI",
        subtitle: "Avenue CLI",
        githubLink: "https://github.com/avenuesec/cli",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/cli/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.amqp_1_0_0,
                TechnologyData.firestore_1_6_1
            ]
        }
    },



    {
        name: "Common [Continuar a preencher]",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/common",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/cli/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.amqp_1_0_0,
                TechnologyData.firestore_1_6_1
            ]
        }
    },
]