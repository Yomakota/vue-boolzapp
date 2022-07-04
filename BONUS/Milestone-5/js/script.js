// BONUS:
// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato / ricevuto nella lista dei contatti


var app = new Vue(
    {
        el: '#root',
        data: {
            searchInputText: '',
            newMessage: '',
            currentActiveElement: 0,
            currentActiveMessage: null,
            answer: 'ok',
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
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
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
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
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        }
                    ],
                },
            ],
        },

        methods: {

            selectedContact(index) {
                this.currentActiveElement = index;
                this.currentActiveMessage = null;
            },
            
            showDropDownMenu(messageIndex) {

                if (messageIndex === this.currentActiveMessage) {
                    this.currentActiveMessage = null;
                } else {
                    this.currentActiveMessage = messageIndex;
                }

                // altro metodo con oggetto con una proprieta,in questo caso menu, di default = false e index = null

                //  currentActiveMessage: {
                //      menu: false,
                //      index: null,
                //  },

                // if (this.currentActiveMessage.menu && this.currentActiveMessage.index === index) {
                //     this.currentActiveMessage.menu = false;

                // } else {
                //     this.currentActiveMessage.index = index;
                //     this.currentActiveMessage.menu = true;
                // }

            },

            sendNewMessage() {
                data = dayjs().format("DD/MM/YYYY HH:mm:ss");

                if (this.newMessage.trim() != "") {
                    this.contacts[this.currentActiveElement].messages.push({
                        text: this.newMessage,
                        date: data,
                        status: 'sent',
                    });
                }

                setTimeout(() => {

                    answerReceviedDate = dayjs().format("DD/MM/YYYY HH:mm:ss");

                    this.contacts[this.currentActiveElement].messages.push({
                        text: this.answer,
                        status: 'received',
                        date: answerReceviedDate = dayjs().format("DD/MM/YYYY HH:mm:ss"),
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
            
            removeMessage(index) {
                this.contacts[this.currentActiveElement].messages.splice(index, 1);

                this.currentActiveMessage.status = false;
                this.currentActiveMessage.index = null;
            },
            
            dateLastMessage(index) {
                const contactMessage = this.contacts[index].messages;

                // se array vuoto torno stringa vuota
                if( contactMessage.length === 0 ) {
                    return '';
                }

                // altrimenti la data dell'ultimo elemento dell'array di messaggi
                return contactMessage[contactMessage.length - 1].date;

                // if (this.contacts[index].messages.length > 0) {
                //     lastMessage = this.contacts[index].messages.length - 1;
                //     lastMessageDate = this.contacts[index].messages[lastMessage].date;
                //     return lastMessageDate;
                // }
            },

            lastMessage(index) {
                const contactMessage = this.contacts[index].messages;

                // se array vuoto torno stringa vuota
                if (contactMessage.length === 0) {
                    return '';
                }

                // altrimenti taglio testo e torno il testo
                let lastMessageText = contactMessage[contactMessage.length - 1].text;
                if(lastMessageText.length > 20) {
                    lastMessageText = lastMessageText.slice(0, 10) + '...';
                }
                return lastMessageText;

                // if (this.contacts[index].messages.length > 0) {
                //     lastMessage = this.contacts[index].messages.length - 1;
                //     lastMessageText = this.contacts[index].messages[lastMessage].text;
                //     return lastMessageText;
                // }
            },
        }
    }
);