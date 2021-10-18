class validation {
    constructor(siteUrl, visitors, email) {
        this.siteUrl = siteUrl;
        this.visitors = visitors;
        this.email = email;
    }

    checkIsEmpty(check, block) {
        const str = /^\s*$/;
        const span = document.createElement("span");
        span.innerHTML = "error";
        if (str.test(block)) {
            if (check) {
                const name = document.getElementById('name');
                name.appendChild(span);
            } else {
                const checkDescription = document.getElementById('checkDescription')
                checkDescription.appendChild(span);
            }
        }
    }

    checkIsUrl() {
        const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        const span = document.createElement("span");
        span.innerHTML = "error";
        if (!regex.test(this.siteUrl)) {
            const url = document.getElementById('url');
            url.appendChild(span);
        }
    }

    checkIsNumber() {
        const number = /^(0|-?[1-9]\d{0,9})$/;
        const customersNum = document.getElementById('customers');
        const span = document.createElement("span");
        span.innerHTML = "error";
        if (!number.test(this.visitors)) {
            customersNum.appendChild(span);
        }
    }

    checkIsEmail() {
        const checkEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/;
        const mail = document.getElementById('mail');
        const span = document.createElement("span");
        span.innerHTML = "error";
        if (!checkEmail.test(this.email)) {
            mail.appendChild(span);
        }
    }

    checkRadioBtn() {
        const payment = document.getElementsByName('payment');
        const radioBtn = document.getElementById('radioBtn');
        const span = document.createElement("span");
        span.innerHTML = "error";
        for (let i = 0; i < payment.length; i++) {
            if (payment[i].checked) {
                return true;
            }
        }
        radioBtn.appendChild(span);
    }

    checkVotes() {
        const votes = document.getElementById('votes');
        const tickReview = document.getElementById('tickReview');
        const span = document.createElement("span");
        span.innerHTML = "error";
        if (votes.checked) {
            return true;
        } else {
            tickReview.appendChild(span);
        }
    }
}

document.addEventListener('submit', function (e) {
    const siteName = document.getElementById('siteName');
    const description = document.getElementById('description');
    const siteUrl = document.getElementById('siteUrl');
    const visitors = document.getElementById('visitors');
    const email = document.getElementById('email');
    const checkValidation = new validation(siteUrl.value, visitors.value, email.value);
    checkValidation.checkIsEmpty(true, siteName.value);
    checkValidation.checkIsUrl();
    checkValidation.checkIsNumber();
    checkValidation.checkIsEmail();
    checkValidation.checkRadioBtn();
    checkValidation.checkVotes();
    checkValidation.checkIsEmpty(false, description.value);
    e.preventDefault();
});

/*function nameValidation() {
    const str = /^\s*$/;
    const siteName = document.getElementById('siteName');
    const name = document.getElementById('name');
    const span = document.createElement("span");
    span.innerHTML = "error";
    if (str.test(siteName.value)) {
        name.appendChild(span);
    }
    return;
}*/
const input = document.querySelectorAll('div');
for(let i = 0; i < input.length; i++) {
    input[i].addEventListener('blur', (event) => {
        const str = /^\s*$/;
        const span = document.createElement("span");
        span.innerHTML = "error";
        if (str.test(event.target.value)) {
            console.log(event.target.tagName);
            event.currentTarget.appendChild(span);
        }
    }, true);
    
}

