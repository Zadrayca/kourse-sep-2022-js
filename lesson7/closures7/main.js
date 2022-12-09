function userCard(id) {

    let key;
    if (id >= 1 && id <= 3) {
        key = id;
    } else {
        return console.error('Лимит количества карт исчерпан. У вас уже есть 3 карты.');
    }

    const createLog = (operationType, credits) => ({operationType, credits, operationTime: new Date().toLocaleString()});

    const cardInfo = {balance: 100, transactionLimit: 100, historyLogs: [], key: key};

    const userWorker = {
        getCardOptions: function () {
            return cardInfo;
        },

        putCredits: function (credits) {
            cardInfo.balance += credits;
            cardInfo.historyLogs.push(createLog('Received credits', credits))
        },

        takeCredits: function (credits) {
            if (credits <= cardInfo.balance && credits <= cardInfo.transactionLimit) {
                cardInfo.balance -= credits;
                cardInfo.historyLogs.push(createLog('Withdrawal of credits', credits))
            } else {
                console.error('Недостаточно денег на счету, или недостаточен лимит на перевод.');
            }
        },

        setTransactionLimit: function (limit) {
            cardInfo.transactionLimit = limit;
            cardInfo.historyLogs.push(createLog('Transaction limit change', limit))
        },
        transferCredits: function (credits, card) {
            if (credits <= cardInfo.balance && credits <= cardInfo.transactionLimit) {

                card.putCredits(credits * 0.995);
            } else {
                console.error('Недостаточно денег на счету, или недостаточен лимит на перевод.');
            }
            userWorker.takeCredits(credits);
        }

    }
    return userWorker;
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.key = 1;
    }

    addCard() {
        this.cards.push(userCard(this.key));
        this.key++;
    }

    getCardByCay(key) {
        if (key >= 1 && key <= 3) {
            for (const item of this.cards) {
                if (item.getCardOptions().key === key) {
                    return item;
                }
            }
        }
    }
}

const userBob = new UserAccount('Bob');
userBob.addCard();
userBob.addCard();
const cardBob1 = userBob.getCardByCay(1);
const cardBob2 = userBob.getCardByCay(2);


const userJohn = new UserAccount('John');
userJohn.addCard();
const cardJohn1 = userJohn.getCardByCay(1);

cardBob1.putCredits(500);
cardBob1.setTransactionLimit(800);
cardBob1.transferCredits(300, cardBob2);

cardBob2.takeCredits(50);

cardBob2.transferCredits(20, cardJohn1);

cardBob1.transferCredits(200, cardJohn1);

cardJohn1.setTransactionLimit(500);
cardJohn1.transferCredits(250, cardBob1);


console.log(cardBob1.getCardOptions());
console.log(cardBob2.getCardOptions());
console.log(cardJohn1.getCardOptions());