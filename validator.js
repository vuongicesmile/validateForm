
function Validator(formSelector) {

    // chuyen doi du lieu 
    // biến này là object và nó sẽ chứa tất cả rules của form chúng ta
    var formRules = {

    };

    // qui uoc tao rules
    // neu co loi return lai 'error message'
    // neu khong co loi retun undefined
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'vui long nhap truong nay';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'vui long nhap email nay';
        },
        min: function (min) {
            // day gia tri so vao day
            // dung fucntion long nhau
            return function (value) {
                return value.length >= min ? undefined : `vui long nhap toi thieu
                ${min} ky tu `;
            }
        },
        max: function (max) {
            // day gia tri so vao day
            // dung fucntion long nhau
            return function (value) {
                return value.length >= min ? undefined : `vui long nhap toi thieu
                ${min} ky tu `;
            }
        },

    }
    // Ta co 1 chuoi sau do lay rule la cac function trong chuoi do


    // lay ra element trong dom 
    var formElement = document.querySelector(formSelector);
    // console.log(formElement);
    // kiem tra neu nhap sai ten form; 
    // chi xu ly khi co element trong dom
    if (formElement) {
        // lay ra tat ca input co atribule la rule va name
        var inputs = formElement.querySelectorAll('[name][rule]');
        //  console.log(inputs);
        // tra ve nodelist
        for (var input of inputs) {
            var rules = input.getAttribute('rule').split('|');
            for (var rule of rules) {
                if (rule.includes(':')) {
                    var ruleInfo = rule.split(':');
                    // console.log(ruleInfo);
                    rule = ruleInfo[0]
                }
                // di vao trong function rule
                //lan thu 2 push vao ben trong mang
                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(validatorRules[rule])
                }else {
                    // lan thu nhat gan la mang
                    // dua function vo cai mang
                    formRules[input.name]=[validatorRules[rule]];
                }
            }
            console.log(formRules);
            // console.log(input.name);
            // // lay duoc the name
            // // lay the rule 
            // console.log(input.getAttribute('rule'))
            // formRules[input.name] = input.getAttribute('rule');

        }
        // console.log(formRules);
    }
    // hien thuc hoa chua con function trong nay 
    // tao ra cac funcion trung ten , tu cac chu nay goi den fucntion 






}