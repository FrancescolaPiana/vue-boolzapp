const contacts = [
    {
    id:1,
    name: 'Michele',
    avatar: '_1',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Hai portato a spasso il cane?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Ricordati di stendere i panni',
    status: 'sent'
    },
    {
    date: '10/01/2020 16:15:22',
    message: 'Tutto fatto!',
    status: 'received'
    },
    ],
    },
    {
        id:2,
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
        {
        date: '20/03/2020 16:30:00',
        message: 'Ciao come stai?',
        status: 'sent'
        },
        {
        date: '20/03/2020 16:30:55',
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
        },
        {
        date: '20/03/2020 16:35:00',
        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent'
        }
        ],
        },
            {
            id:3,
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
                {
                id:4,
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
                ],
                },
                {
                id:5,
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
                }
                ],
                },
                    {
                    id:6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    }
                    ],
                    },
                    {
                    id:7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    }
                    ],
                    },
                        {
                        id:8,
                        name: 'Davide',
                        avatar: '_8',
                        visible: true,
                        messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                        ],
                        }
]
console.log(contacts);
// console.log(contacts[0].messages[0].message);

console.log(contacts[0].avatar);

const {createApp} = Vue;
const app = createApp({
    data(){
        return {
            contacts,
            currentChat: 0,
            newMessage: '',
            researchProfile: ''
        }
    },

    methods: {
        // on click change carousel chats
        setChat(id){
            this.currentChat = this.contacts.findIndex((profile) => profile.id === id
            )
        },

        // sent a message
        sendMessage(){
            if (!this.newMessage) { return;
                
            }
            const d = new Date();
            let newDate = d.toDateString();
            const newsentMessage = 
            {
                date: newDate,
                message: this.newMessage,
                status: 'sent'
                }
                this.contacts[this.currentChat].messages.push(newsentMessage)
            this.newMessage = ''

        // function respond after one sec
        setTimeout(() => {
            const newReceivedMessage = 
            {
                date: newDate,
                message: 'Si okay Ti faccio sapere in giornata',
                status: 'received'
            }
            this.contacts[this.currentChat].messages.push(newReceivedMessage)
        }, 1000)
        },

        getLastMessageDate(profile){
            const data = profile.messages.filter((message) => {
                return message.status === 'received';
            })
            console.log(data);
            return data[data.length-1].date;
        },

        getLastMessage(profile){
            const msg = profile.messages.filter((message) => {
                return message.status === 'received';
            })
            console.log(msg);
            return msg[msg.length-1].message;
        },


    },

    computed: {
        // creazione nuovo arrai filtrato non distruttivo
        filteredContacts(){
            return this.contacts.filter((profile) => {
                const name = profile.name.toLowerCase() 
                console.log(name);
                return name.includes(this.researchProfile.toLowerCase())
            })
        }
         

    },

    mounted(){
       
    },

    created(){
     
    },

    beforeCreate(){
    },

});
app.mount('#foil')
