// BONUS:
// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato / ricevuto nella lista dei contatti


var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            menu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            menu: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            menu: false,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            menu: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            menu: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            menu: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            menu: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            menu: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            menu: false,
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            menu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            menu: false,
                        }
                    ],
                },
            ],

            currentActiveElement: 0,

            newMessage: '',

            answer: 'ok',

            searchInputText: '',
        },

        methods: {

            selectedContact(index) {
                this.currentActiveElement = index;
            },

            sendNewMessage() {

                data = dayjs().format("DD/MM/YYYY HH:mm");

                if (this.newMessage.trim() != "") {

                    this.contacts[this.currentActiveElement].messages.push({
                        text: this.newMessage,
                        date: data,
                        status: 'sent',
                    });
                }

                setTimeout(() => {

                    answerReceviedDate = dayjs().format("DD/MM/YYYY HH:mm");

                    this.contacts[this.currentActiveElement].messages.push({
                        text: this.answer,
                        status: 'received',
                        date: answerReceviedDate,
                    });

                }, 1000);

                this.newMessage = '';
            },

            searchContactChat() {

                this.contacts.forEach((contact) => {
                    if (contact.name.toLowerCase().includes(this.searchInputText.toLowerCase())) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            },

        },
    }
);