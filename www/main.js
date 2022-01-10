function validateLogin(){
    let isValid = true

    let userName = document.querySelector('#auth-form__username-input')
    let userNameMsg = document.querySelector('.auth-form__username .error-msg')

    let pass = document.querySelector('#auth-form__password-input')
    let passMsg = document.querySelector('.auth-form__password .error-msg')

    userNameMsg.innerHTML = ''
    passMsg.innerHTML = ''

    if(userName.value === ''){
        userNameMsg.innerHTML = 'Vui long khong bo trong'
        isValid = false
        userName.focus()
    }

    if(pass.value === ''){
        passMsg.innerHTML = 'Vui long khong bo trong'
        isValid = false
    }

    return isValid
}

function validateSubLoginForm(){
    let isValid = true

    //so sanh voi mat khau cu
    let passOld = document.querySelector('#auth-form__password-input')
    let passNew = document.querySelector('#resign-form__password-input')
    let passReenter = document.querySelector('#resign-form__password-certificate')

    let passNewErrorMsg = document.querySelector('.resign-form__password-new .error-msg')
    let passReenterErrorMsg = document.querySelector('.resign-form__password-reenter .error-msg')
    
    passNewErrorMsg.innerHTML = ''
    passReenterErrorMsg.innerHTML = ''

    if(passNew.value === ''){
        isValid = false
        passNewErrorMsg.innerHTML = 'Khong duoc bo trong'
    }

    if(passReenter.value === ''){
        isValid = false
        passReenterErrorMsg.innerHTML = 'Khong duoc bo trong'
    }

    if(passNew.value.length < 6 ){
        isValid = false
        passNewErrorMsg.innerHTML = 'Phai nhap mat khau it nhat 6 ki tu'
        passNew.focus()
    }

    if(passOld.value === passNew.value){
        isValid = false
        passNewErrorMsg.innerHTML = 'Khong nhap lai mat khau cu!!!'
        passNew.focus()
    }

    if(passNew.value !== passReenter.value){
        isValid = false
        passReenterErrorMsg.innerHTML = 'Phai nhap trung voi password'
        passReenter.focus()
    }

    return isValid
}

function handleFullLogin(){
    //handle submit main form
    let authFormSubmitBtn = document.querySelector('.auth-form__submit-btn')
    let userName = document.querySelector('#auth-form__username-input')
    let pass = document.querySelector('#auth-form__password-input')
    let idForUpdate = -1;

    authFormSubmitBtn.addEventListener('click', e => {
        if(validateLogin()){            
            //fetch API
            console.log('pass xac thuc javascript')
            fetch('http://localhost:8080/api/login_employee.php',{
                'method':'POST',
                'body' : new URLSearchParams({
                    'username': userName.value,
                    'password': pass.value
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.code == 0 && (userName.value == pass.value)){
                    //handle sub login form => hard
                    idForUpdate = data.affectedId
                    $('#re-sign-up_modal').modal('show')
                    // console.log(data.affectedId)
                }
                else if(data.code == 0){
                    //direct to the website
                    window.location.replace("http://localhost:8080/direct.php");
                }
                else{ //thong bao cac loi khi dang nhap
                    $('.auth-form_alert-failed').removeClass('hide')
                    $('.auth-form_alert-failed').html('<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + data.message)
                }
            })
        }
    })
    // console.log(idForUpdate)
    //handle submit sub form
    let subFormSubmitBtn = document.querySelector('.resign-form_submit-btn')
    let passReenter = document.querySelector('#resign-form__password-certificate')
    // console.log(passReenter.value)
    subFormSubmitBtn.addEventListener('click', e => {
        if(validateSubLoginForm()){
            //console.log('sub form success')
            
            fetch('http://localhost:8080/api/update_password.php',{
                'method': 'POST',
                'body': new URLSearchParams({
                    'idForUpdate': idForUpdate,
                    'newPassword': passReenter.value
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.code == 0){//update thanh cong
                    $('.resign-form_alert-success').removeClass('hide')
                    $('.resign-form_alert-success').text(data.message)
                    //delaying
                    setTimeout(function() {
                        //chuyen huong
                        window.location.replace("http://localhost:8080/direct.php");
                    }, 2000);
                    
                }
            })
        }
    })
}

/////////////////////////////////////CHIEF PART
function searchSuggest(){
    let searchBar = document.querySelector('.add-task-modal_assign-to .search-bar')
    if(searchBar != null){
        searchBar.addEventListener('input', e => {
            let input = e.target.value
            $.get("api_chief/search_suggest.php?search_text="+input, function(data){
                //moi lan nhap moi la phai xoa suggest cu
                $("#suggestions li").remove()
                //xu li' string data
                let employees = data.slice(1,data.length-1)
                let employees_array = employees.split(",")
                
                employees_array.forEach((employee) => {
                    let employee_str = employee.slice(1,employee.length-1)
                    let item = $(`<li class="list-group-item" onclick="select(this)">${employee_str}</li>`)
                    $("#suggestions").append(item)
                })
            })
        }) 
    }
    
}

function select(li){
    let searchBar = document.querySelector('.add-task-modal_assign-to .search-bar')
    searchBar.value = li.innerHTML
}

function validateAddTaskForm(){
    let isValid = true

    let taskTitle = document.querySelector('.add-task-modal_title .title-input')
    let titleMsg = document.querySelector('.add-task-modal_title .error-msg')
    
    let deadline = document.querySelector('.add-task-modal_deadline .deadline')
    let dlMsg = document.querySelector('.add-task-modal_deadline .error-msg')

    let searchBar = document.querySelector('.add-task-modal_assign-to .search-bar')
    let searchMsg = document.querySelector('.add-task-modal_assign-to .error-msg')

    let taskDesc = document.querySelector('.add-task-modal_summernote #summernote')
    let descMsg = document.querySelector('.add-task-modal_summernote .error-msg')

    titleMsg.innerHTML = ''
    dlMsg.innerHTML = ''
    searchMsg.innerHTML = ''
    descMsg.innerHTML = ''

    if(taskTitle.value == ''){
        isValid = false
        titleMsg.innerHTML = 'Vui long nhap truong nay'
    }

    if(deadline.value == ''){
        isValid = false
        dlMsg.innerHTML = 'Khong duoc bo qua truong nay'
    }

    if(searchBar.value == ''){
        isValid = false
        searchMsg.innerHTML = 'Khong duoc bo qua truong nay'
    }
    
    return isValid
}

function validateUpdateInfoForm(){
    let name = document.querySelector(".chief-info_fullname")
    let email = document.querySelector(".chief-info_email")
    let age = document.querySelector('.chief-info_age')
    let phone = document.querySelector('.chief-info_phone')
    let address = document.querySelector('.chief-info_address')
    let gender = document.querySelector('.chief-info_gender')
    let dateJoin = document.querySelector('.chief-info_date-joined')
    let dateBirth = document.querySelector('.chief-info_date-birth')

    let emailMsg = document.querySelector('.chief-page_main .update-info_email .error-msg')
    let ageMsg = document.querySelector('.chief-page_main .update-info_age .error-msg')
    let phoneMsg = document.querySelector('.chief-page_main .update-info_phone .error-msg')
    let addressMsg = document.querySelector('.chief-page_main .update-info_address .error-msg')
    let genderMsg = document.querySelector('.chief_gender .error-msg')
    let dateJoinMsg = document.querySelector('.update-info_date-join .error-msg')
    let dateBirthMsg = document.querySelector('.update-info_date-of-birth .error-msg')
    //console.log(emailMsg)
    //console.log(dateJoinMsg)
    let emptyMsg = 'Vui long cap nhat thong tin'

    if(email.innerHTML == '')
        emailMsg.innerHTML = emptyMsg
    if(age.innerHTML == '')
        ageMsg.innerHTML = emptyMsg
    if(phone.innerHTML == '')
        phoneMsg.innerHTML = emptyMsg
    if(address.innerHTML == '')
        addressMsg.innerHTML = emptyMsg
    if(gender.innerHTML == '')
        genderMsg.innerHTML = emptyMsg
    if(dateJoin.innerHTML == '')
        dateJoinMsg.innerHTML = emptyMsg
    if(dateBirth.innerHTML == '')
        dateBirthMsg.innerHTML = emptyMsg
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


function validateUpdateInfo(){
    let isValid = true
    let email = document.querySelector('#email-chief')
    let age = document.querySelector('#age-chief')

    if(email.value != '' )
        if(!validateEmail(email.value)){
            isValid = false
            $('.chief-page_main .update-info_email .error-msg').text('Sai dinh dang email')
            email.focus()
        }
    
    if(age.value != '')
        if(parseInt(age.value , 10) < 18 || parseInt(age.value , 10) > 65){
            isValid = false
            $('.chief-page_main .update-info_age .error-msg').text('Tuoi khong hop li')
            age.focus()
        }    
    return isValid

}

function chiefUpdateInfo(){
    validateUpdateInfoForm()
    let chief_fullname = document.querySelector(".fullname-input_js")
    let chief_email = document.querySelector(".email-input_js")
    let chief_age = document.querySelector('.age-input_js')
    let chief_phone = document.querySelector('.phone-input_js')
    let chief_address = document.querySelector('.address-input_js')
    let chief_gender = document.querySelector('.gender-input_js')
    let chief_dateJoin = document.querySelector('.date-input_js')
    let chief_dateBirth = document.querySelector('.birth-input_js')

    let updateBtn = document.querySelector('.update-info_submint-btn')
    updateBtn.addEventListener('click', e => {
        if(validateUpdateInfo()){
            //console.log('call api update info')
            fetch("http://localhost:8080/update-info.php", {
                'method' : 'POST',
                'body' : new URLSearchParams({
                    'fullname' : chief_fullname.value,
                    'email' : chief_email.value,
                    'age' : parseInt(chief_age.value,10),
                    'phone': chief_phone.value,
                    'address': chief_address.value,
                    'gender': chief_gender.value,
                    'date-join': chief_dateJoin.value,
                    'date-birth' : chief_dateBirth.value
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.code == 0){
                    //toast msg success
                    let failMsg = document.querySelector('.chief-update_success-msg')
                    failMsg.classList.remove('hide')
                    setTimeout(() => {
                        location.reload();
                    },2000)
                }else{
                    //toast msg failed
                    let failMsg = document.querySelector('.chief-update_failed-msg')
                    failMsg.classList.remove('hide')
                }
                
            }) 
        }
    })

    $(".add-avatar_input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    let avatarForm = document.querySelector("#update-avatar_form");
    avatarForm.addEventListener('submit', e => {
        //ngan chuyen den trang api
        e.preventDefault()
        ////////////////xu li
        let avatar = document.querySelector('.add-avatar_input')
        let imgSrc = 'uploads/'+avatar.files[0].name
        
        let empUpdateInfo = document.querySelector('.employee-page_update-info')
        if(empUpdateInfo != null)
            imgSrc = '../uploads/'+avatar.files[0].name;
        
            //get update avatar api
        let formData = new FormData()
        formData.append('avatar',avatar.files[0])

        // let xhr = new XMLHttpRequest()
        // xhr.open('POST','update-avatar.php',true);
        // xhr.send(formData)
        fetch("http://localhost:8080/update-avatar.php",{
            'method' : 'POST',
            'body' : formData,
            'header' : {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            if(data.code == 0){
                let avatarImgHolder = document.querySelector('.avatar-img')
                avatarImgHolder.setAttribute('src',imgSrc)
            }
        })
        .catch(err => console.log(err))
    })
}

function chiefTaskFull(){
    
    //search suggestion
    searchSuggest()

    //validate add task form
    let addTaskBtn = document.querySelector('.add-task-btn')

    let taskTitle = document.querySelector('.add-task-modal_title .title-input')
    let deadline = document.querySelector('.add-task-modal_deadline .deadline')
    let searchBar = document.querySelector('.add-task-modal_assign-to .search-bar')
    let taskDesc = document.querySelector('.add-task-modal_summernote #summernote')
    
    let dep = document.querySelector('.employee-department_title')
    
    if(addTaskBtn != null){
        addTaskBtn.addEventListener('click', e => {
        
            if(validateAddTaskForm()){
    
                //fetch api to add task
                fetch('http://localhost:8080/api_chief/add_task.php',{
                    'method':'POST',
                    'body' : new URLSearchParams({
                        'task-title': taskTitle.value,
                        'deadline': deadline.value,
                        'assign-to': searchBar.value,
                        'task-desc': taskDesc.value,
                        'department': dep.innerHTML
                    })
                })
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    if(data.code == 0){
                        //thong bao thanh cong
                        let succAlert = document.querySelector('.add-task_alert-success')
                        succAlert.classList.remove('hide')
                    }else{
                        //thong bao that bai
                        let failAlert = document.querySelector('.add-task_alert-fail')
                        failAlert.classList.remove('hide')
                    }
                    //after submit
                    loadTask()
                    taskTitle.value = ''
                    deadline.value = ''
                    searchBar.value = ''
                    $('.note-editable').text('')
                    taskTitle.focus()
                })
            }
        })
    }
    
}

function loadTask(){
    //delete all before load
    let tbody = document.querySelector('.chief-task_display')
    if(tbody != null)
        tbody.innerHTML = ''

    //load new
    fetch("http://localhost:8080/api_chief/load_task.php")
    .then(res => res.json())
    .then(taskList => {
        taskList.forEach(task => {
            //////////////////////Preview Part
            //console.log(task)
            let tbody = document.querySelector('.chief-task_display')
            let tr = document.createElement('tr')

            let content = `<tr>
                <td>${task[0]}</td>
                <td class="preview_title">${task[1]}</td>
                <td class="preview_desc">${task[2]}</td>
                <td class="preview_dead">${task[3]}</td>
                <td class="preview_status">${task[4]}</td>
                <td class="preview_assign-to">${task[5]}</td>
                <td class="preview_reviewed">${task[6]}</td>
                <td>
                    
                    <i class="fas fa-edit text-blue options-icon" onclick="processTask(this)" data-toggle="modal" data-target="#chief_task-process"></i>
                    
                </td>
            </tr>`
            //<i class="fas fa-trash text-red options-icon" onclick="handleDelete(this)" data-toggle="modal" data-target="#deleteTaskConfirm"></i>
            //<i class="fas fa-info-circle text-yellow options-icon"></i>
            tr.innerHTML = content
            tr.setAttribute('task-id',task[0])
            tr.setAttribute('content',task[8])
            tr.setAttribute('attached',task[9])

            if(Date.parse('1970-01-02 00:00:00') == Date.parse(task[10]))
                tr.setAttribute('submit-date','unsumbit')
            else
                tr.setAttribute('submit-date',task[10])
            
            if(tbody != null)
                tbody.appendChild(tr)
        })
    })
    .then()
    .catch(console.log)
}



function processTask(editBtn){
    let row = editBtn.parentElement.parentElement
    //console.log(row)
    let title = document.querySelector('.view-task_title')
    let desc = document.querySelector('.view-task_desc')
    let assignTo = document.querySelector('.view-task_assign-to')

    let dead = document.querySelector('.view-task_deadline')
    let submit = document.querySelector('.view-task_submit-date')
    let status = document.querySelector('.view-task_status')

    let content = document.querySelector('.text-work')
    let attached = document.querySelector('.attached-file')

    title.innerHTML = row.querySelector('.preview_title').innerHTML
    desc.innerHTML = row.querySelector('.preview_desc').innerHTML
    assignTo.innerHTML = row.querySelector('.preview_assign-to').innerHTML
    dead.innerHTML = row.querySelector('.preview_dead').innerHTML
    status.innerHTML = row.querySelector('.preview_status').innerHTML

    submit.innerHTML = row.getAttribute('submit-date')
    content.innerHTML = row.getAttribute('content')
    attached.innerHTML = row.getAttribute('attached')
    //hien thi ra phan full task info
    if(isLate(row.getAttribute('submit-date'), row.querySelector('.preview_dead').innerHTML)){
        title.classList.remove('text-success')
        assignTo.classList.remove('text-success')
        dead.classList.remove('text-success')
        status.classList.remove('text-success')
        submit.classList.remove('text-success')

        title.classList.add('text-danger')
        assignTo.classList.add('text-danger')
        dead.classList.add('text-danger')
        status.classList.add('text-danger')
        submit.classList.add('text-danger')
    }else{
        title.classList.remove('text-danger')
        assignTo.classList.remove('text-danger')
        dead.classList.remove('text-danger')
        status.classList.remove('text-danger')
        submit.classList.remove('text-danger')

        title.classList.add('text-success')
        assignTo.classList.add('text-success')
        dead.classList.add('text-success')
        status.classList.add('text-success')
        submit.classList.add('text-success')
    }
    let id = row.getAttribute('task-id')

    let footer = document.querySelector('.view-task_footer')
    footer.innerHTML = ''
    //cancel task neu co the
    if(status.innerHTML == 'New'){
        
        let btn = document.createElement('button')
        btn.setAttribute('type','button')
        btn.setAttribute('class','btn btn-warning task-cancel')
        btn.setAttribute('onclick',`handleCancel(${id})`)
        
        btn.innerHTML = 'Cancel'
        //console.log(btn)
        footer.appendChild(btn)
    }
    //Approve/Reject neu co the
    if(status.innerHTML == 'Waiting'){
        
        let approve = document.createElement('button')
        let reject = document.createElement('button')

        approve.setAttribute('type','button')
        approve.setAttribute('class','btn btn-success task-approve')
        approve.setAttribute('onclick',`handleApprove(${id})`)
        approve.innerHTML = 'Approve'

        reject.setAttribute('type','button')
        reject.setAttribute('class','btn btn-danger task-reject')
        reject.setAttribute('onclick',`handleReject(${id})`)
        reject.setAttribute('data-toggle','modal')
        reject.setAttribute('data-target','#rejectTaskConfirm')
        
        reject.innerHTML = 'Reject '
        //console.log(approve)
        
        footer.appendChild(approve)
        footer.appendChild(reject)
        
        //rating
        let good = `<div class="custom-control custom-radio ">
                        <input type="radio" id="good" name="complete-level[]" class="custom-control-input ">
                        <label class="custom-control-label" for="good">Good</label>
                    </div>`
        let dumb1 = `
                <span class="text-danger completion-warn"> You have to choose completion level: </span>
                <div class="completion-rate d-flex" style = "justify-content: left;margin-left: 0;margin-right: auto;">`
                        

        let dumb2 =     `<div class="custom-control custom-radio ml-2">
                            <input type="radio" id="bad" name="complete-level[]" class="custom-control-input">
                            <label class="custom-control-label" for="bad">Bad</label>
                        </div>

                        <div class="custom-control custom-radio ml-2">
                            <input type="radio" id="ok" name="complete-level[]" class="custom-control-input">
                            <label class="custom-control-label" for="ok">OK</label>
                        </div>
                </div>`
              
        let dumb = ''
        //let newFooter = document.querySelector('.chief-task_process-body')
        let div = document.querySelector('.complete-level_block')
        //reset
        div.classList.remove('hide')
        div.innerHTML = ''
        //add content
        if(!isLate(row.getAttribute('submit-date'), row.querySelector('.preview_dead').innerHTML)){
            dumb = dumb1 + good + dumb2
        }else{
            dumb = dumb1 + dumb2
        }

        div.innerHTML = dumb

    }

    if(status.innerHTML != 'Waiting'){
        let div = document.querySelector('.complete-level_block')
        if(div != null)
            div.classList.add('hide')
    }
}

function isLate(submitDate,deadline){
    return Date.parse(submitDate) > Date.parse(deadline)
}

/////////////handle task
function handleCancel(taskId){
    //console.log(taskId)
    fetch("http://localhost:8080/api_chief/cancel_task.php",{
        'method' : 'POST',
        'body': new URLSearchParams({
            'task-id': taskId
        })
    })
    .then(res => res.json())
    .then(data => {
        // if(data.code == 0){
            
        // }
        afterProccess(data.message,data.code)
    }) 
}

function handleApprove(taskId){
    //xu li muc do hai long
    let warn = document.querySelector('.completion-warn')
    let radios = document.getElementsByName('complete-level[]');
    let rate = ''
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            rate = radios[i].getAttribute('id')

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if(rate == '') warn.innerHTML = 'Check here in order to approve!!!'
    else{
        fetch("http://localhost:8080/api_chief/approve_task.php",{
            'method': 'POST',
            'body': new URLSearchParams({
                'task-id': taskId,
                'rate': rate.toUpperCase()
            })
        })
        .then(res => res.json())
        .then(data => {
            // if(data.code == 0){
            //     loadTask()
            // }
            afterProccess(data.message,data.code)
        }) //thong bao ra
    }
}

function handleReject(taskId){
    let note = document.querySelector('#reject-task_note')
    let newDead = document.querySelector('#reject-task_new-deadline')
    let btn = document.querySelector('.task-reject_confirmed-btn')

    btn.addEventListener('click', e => {
        fetch("http://localhost:8080/api_chief/reject_task.php", {
            'method': 'POST',
            'body' : new URLSearchParams({
                'task-id': taskId,
                'note' : note.value,
                'new-dead': newDead.value
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.code == 0){
                console.log(btn)
                console.log('reject')
            }
            afterProccess(data.message,data.code)
            $('.task-reject_confirmed-btn').off()
        })
    })
}

//after send form:
function afterProccess(msg,id){
    let succ = document.querySelector('#proccess-task_func-succ')
    let fail = document.querySelector('#proccess-task_func-fail')
    if(id == 0){
        loadTask()
        let succAlert = document.querySelector('.alert-function')
        succAlert.innerHTML = msg
        succ.classList.remove('hide')
    }else{
        fail.classList.remove('hide')
    }

    setTimeout(() => {
        succ.classList.add('hide')
        fail.classList.add('hide')
        //out ra man hinh chinh
        turnOffModal()
    } , 2000)
    
}

function turnOffModal(){
    
    $('#rejectTaskConfirm').modal('hide')
    $('#chief_task-process').modal('hide')
    $('#chief_task-process').modal('hide') //cancel
}
////////////////////Chief handle absent request ////////////////
class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      return this.stack.push(item);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.length - 1];
    }
  
    get length() {
      return this.stack.length;
    }
  
    isEmpty() {
      return this.length === 0;
    }
}
  
  
function load_absent_requests(){
    let department = document.querySelector('.employee-department_title').innerHTML
    // console.log(department)
    let stack = new Stack()
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    let count = 1

    fetch('http://localhost:8080/api_chief/load_absent_request.php',{
        'method' : 'POST',
        'body' : new URLSearchParams({
            'department' : department
        })
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        // console.log([...data]);
        [...data].forEach(row => {
            //console.log(row)
            stack.push(row)
        })
        
        while(!stack.isEmpty()){
            let tr = document.createElement('tr')
            let row = stack.pop()
            let disable = 'disabled'
            if(row.Status == null || row.Status == '' ) disable = ''

            let content = `<th scope="row">${count}</th>
                                <td>${row.FullName}</td>
                                <td>${row.UserName}</td>
                                <td>${row.Reason}</td>
                                <td>${row.AbsentDays}</td>
                                <td><a href="${row.AttachedFile}" download>${row.AttachedFile}</a></td>
                                <td>
                                    <button class="btn btn-success" onclick = "approveAbsentRequest(${row.AbsID})" ${disable}>Approve</button>
                                    <button class="btn btn-danger" onclick = "rejectAbsentRequest(${row.AbsID})" ${disable}>Reject</button>
                            </td>`

            tr.innerHTML = content
            count++
            tbody.appendChild(tr)
        }
    })
}

function approveAbsentRequest(id){
    
    fetch('http://localhost:8080/api_chief/approve_absent_request.php', {
        'method' : 'POST',
        'body' : new URLSearchParams({
            'requestid' : id,
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.code == 0){
            $('.alert-success .msg').text('Approve Successfully')
            $('.alert-success.toast').removeClass('hide')
            
            setTimeout(() => {
                $('.alert-success .msg').text('')
                $('.alert-success.toast').addClass('hide')

                load_absent_requests()
            },2000)
        }
    })
}

function rejectAbsentRequest(id){
    fetch('http://localhost:8080/api_chief/reject_absent_request.php', {
        'method' : 'POST',
        'body' : new URLSearchParams({
            'requestid' : id,
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.code == 0){
            $('.alert-success .msg').text('Approve Successfully')
            $('.alert-success.toast').removeClass('hide')
            
            setTimeout(() => {
                $('.alert-success .msg').text('')
                $('.alert-success.toast').addClass('hide')

                load_absent_requests()
            },2000)
        }
    })
}
//////////////////////////////////Employee/////////////////////////
function load_assigned_task(){
    let userName = document.querySelector('.emp_user-name').innerHTML
    let count = 1;

    fetch("http://localhost:8080/phase3-employee/emp_api/load_task.php", {
        'method' : 'POST',
        'body' : new URLSearchParams({
            'UserName' : userName
        })
    })
    .then(res => res.json())
    .then(data => {
        
        if(data != null){
            //load to screen
            let col_odd = document.querySelector('.odd_col');
            let col_even = document.querySelector('.even_col');
            col_odd.innerHTML = ''
            col_even.innerHTML = '';
            
            [...data].forEach(task => {
                //console.log(task)
                let div = document.createElement('div')
                div.setAttribute('class','card mx-2 mt-2 p-2');
                div.setAttribute('taskId',task.TaskID);
                div.setAttribute('note',task.Note);
                div.setAttribute('review', task.CompleteLevel);
                
                let review = ''

                let colorSpan = 'text-warning'

                let btn = `<button class="btn btn-primary" 
                                data-toggle="modal" data-target="#openTaskEmp"
                                onclick="handleOpenTask(this)"
                                >
                                Open Task
                            </button>`

                if(task.Status.toLowerCase() == 'canceled'){
                    colorSpan = 'text-secondary'
                    btn = `<button class="btn btn-primary disabled" 
                            >
                                Open Task
                            </button>`
                }

                if(task.Status.toLowerCase() == 'waiting'){
                    btn = `<button class="btn btn-primary disabled" 
                            >
                                Open Task
                            </button>`
                }

                if(task.Status.toLowerCase() == 'in progress'){
                    colorSpan = 'text-info'
                }

                if(task.Status.toLowerCase() == 'rejected'){
                    colorSpan = 'text-danger'
                }

                if(task.Status.toLowerCase() == 'completed'){
                    colorSpan = 'text-success'
                    btn = `<button class="btn btn-primary disabled" 
                            >
                                Open Task
                            </button>`
                    review = task.CompleteLevel
                }

                if(task.Status.toLowerCase() == 'new'){
                    colorSpan = 'text-primary'
                    btn = `<button class="btn btn-warning" onclick = "handleStartTask(this)">Start</button>`
                }

                let content = `
                    <h6>Title: <span class="emp-task_title ${colorSpan}">${task.TaskTitle}</span></h6>
                    <h6>Deadline: <span class="emp-task_deadline ${colorSpan}">${task.Deadline}</span></h6>
                    <h6>Status: <span class="emp-task_status ${colorSpan}">${task.Status}</span></h6>
                    <h6>Review: <span class="emp-task_review ${colorSpan}">${review}</span></h6>
                    <h6>Description:</h6>
                    <p class = "emp-task_desc text-secondary">${task.TaskDesc}</p>
                    ${btn}
                `

                div.innerHTML = content

                if(count % 2 != 0){
                    col_odd.appendChild(div)
                }else{
                    col_even.appendChild(div)
                }
                count++
                
            })
            
        }
    })
}

function handleOpenTask(btn){
    let div = btn.parentElement
    let note = div.getAttribute('note')
    let review = div.getAttribute('review')
    let id = div.getAttribute('taskId')

    $('.emp-task_note').text(note)
    $('.emp-task_review').text(review)
    $('.submit-task_error-msg').text('')

    let submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('taskId',id)

    let file = document.querySelector('#document')
    file.addEventListener('change' , e => {
        submitBtn.disabled = false
        $('.submit-task_error-msg').text('')
        let files = e.target.files;
        let file = files[0];

        //xu li loi
        let filename = file.name
        let fileExt = filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
        
        const deniedExt = ['exe','msi','sh']

        if(deniedExt.includes(fileExt)){
            $('.submit-task_error-msg').text('This type of file is not allowed')
            submitBtn.disabled = true
        }
            
        if(file.size > 524288000)
        {
            $('.submit-task_error-msg').text('Your file must under 500 MB')
            submitBtn.disabled = true
        }
    })
}

function handleSumbitTask(btn){
    let id = parseInt(btn.getAttribute('taskId'))
    let fileInput = document.querySelector('#document')
	let summernote = document.querySelector('.emp-task_submit-content')
    if(summernote != null) summernote = summernote.value.trim()
    $('.submit-task_error-msg').text('')
    $('.submit-task_success-msg').text('')

    if(fileInput.files.length == 0 && summernote == '')
        $('.submit-task_error-msg').text('You are not submit anything!!')
    else{
        //fetch submit task api -> change to waiting state
        let bar = document.querySelector('.progress-bar');
        let file = fileInput.files[0];    
            
        let data = new FormData();
        data.append('TaskID',id)
        data.append('content', summernote)
        data.append('file-upload',file)

        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load' , e => {
            if(xhr.status === 200){
                $('.submit-task_success-msg').text('Submit Success!')
                load_assigned_task()
                //reset cai submit form
                resetSubmitTaskForm()

            }else{
                $('.submit-task_error-msg').text('Upload fail with code: ' + xhr.status)
            }
        })

        xhr.upload.addEventListener('progress', e => {
            let loaded = e.loaded						
            let progress = Math.ceil(loaded * 100 / e.total) + 5
            //console.log(progress)
            //update progress bar //style="width: 25%" aria-valuenow="25"
            bar.style.width = progress + '%'
            if(progress >= 100) $('#openTaskEmp').modal('hide')
        })

        
        xhr.open('POST','emp_api/submit_task.php',true);
        xhr.send(data);
    }
    
}

function resetSubmitTaskForm(){
    let popup = document.querySelector('#openTaskEmp')
    popup.innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Open Task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        
        <div class="card p-2">
            <h6>Note: <span class="emp-task_note text-primary"></span></h6>
            
        </div>

        <div class="rich-text-editor form-group add-task-modal_summernote">
            <label for="">Submit Task:</label>
            <textarea name="emp_submit-text" class = "emp-task_submit-content" id="summernote" cols="30" rows="20">
            </textarea>
            <span class="error-msg text-danger"></span>
        </div> 

        <div class="custom-file">
            <label class="custom-file-label" for="document">Attach files</label>
            <input 
                type="file" 
                name = "file-upload" 
                class="custom-file-input" 
                id="document" 
                
            >
            <span class="text-danger submit-task_error-msg"></span>
            <span class="text-success submit-task_success-msg"></span>
        </div>   

        <div class="progress mt-2" style="height: 10px;">
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>

    <div class="modal-footer">
        <button type="button" class="btn btn-primary submit-btn" onclick ="handleSumbitTask(this)">Submit</button>
    </div>
    </div>
</div>`

$('.add-task-modal_summernote #summernote').summernote()
}

function handleStartTask(btn){
    let id = parseInt(btn.parentElement.getAttribute('taskid'),10)
    
    fetch("http://localhost:8080/phase3-employee/emp_api/start_task.php", {
        'method' : 'POST',
        'body' : new URLSearchParams({
            'taskid' : id
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.code == 0){
            $('.alert-success.toast .msg').text(data.message)
            $('.alert-success.toast').removeClass('hide')

            setTimeout(() => {
                $('.alert-success.toast').addClass('hide')
                $('.alert-success.toast .msg').text('')
                load_assigned_task()
            } , 2000)
            //thong bao start
            //return cai button open task

        }
    })
}

function taskStatusInteract(){
    let taskStatus = document.querySelector('.emp-task_status')
    //console.log(taskStatus.innerHTML)
    let colorTargets = document.querySelectorAll('.color-span')
    let setColor = ''

    if(taskStatus.innerHTML.toLowerCase() == 'new'){
        setColor = 'green'
    };

    [...colorTargets].forEach(target => {
        target.style.color = setColor
    })
}


/////////////////////////////////////Employee Absent////////////////////////////////////
function loadAbsent(){
    let userName = document.querySelector('.emp_user-name').innerHTML
    let absentDays = 0;
    let totalAbsent = document.querySelector('.total-absent')
    let btn = document.querySelector('.absent-request_btn')

    fetch("http://localhost:8080/phase3-employee/emp_api/load_absent.php",{
        'method' : 'POST',
        'body' : new URLSearchParams({
            'username': userName
        })
    })
    .then(res => res.json())
    .then(data => {
        let tbody = document.querySelector('tbody')
        let count = 1;
        
        tbody.innerHTML = '';

        [...data].forEach(row => {
            let tr = document.createElement('tr');

            let content = ` <th scope="row">${count}</th>
                        <td>${row.Reason}</td>
                        <td>${row.AbsentDays}</td>
                        <td>${row.SubmitDate}</td>
                        <td>${row.Status}</td>`

            tr.innerHTML = content
            tbody.appendChild(tr)

            if(row.Status == 'approved')
                absentDays += row.AbsentDays

            count++

            if(disableAbsentReq(row.SubmitDate) == false){
                btn.disabled = true
            }else{
                btn.disabled = false
            }
        })
        totalAbsent.innerHTML = absentDays
        if(absentDays == 0) totalAbsent.classList.add('text-info')
        if(absentDays < 12) totalAbsent.classList.add('text-warning')
        else totalAbsent.classList.add('text-danger')

        
    })
}

function disableAbsentReq(submitDate){
    let today = new Date() //currentday
    let compareDate = new Date(today.getTime() - 7*24*60*60*1000)
    //neu ham nay` false -> phai disable nut
    return Date.parse(submitDate) < Date.parse(compareDate)
}

function handleAbsentRequest(){
    let maxAbsent = 12
    let thisischief = document.querySelector('.employee-page_attendence')
    if(thisischief != null) maxAbsent = 15
    //console.log(maxAbsent)
    //validate
    let summerNote = document.querySelector('.absent-reason_submit')
    let absentDay = document.querySelector('#absent-day_input')
    let errorMsg = document.querySelector('.absent-request_error-msg')
    errorMsg.innerHTML = ''
    
    let userName = document.querySelector('.emp_user-name').innerHTML
    let totalAbsent = document.querySelector('.total-absent')
    totalAbsent = parseInt(totalAbsent.innerHTML)

    let fullName = document.querySelector('.employee-name').innerHTML
    let department = document.querySelector('.employee-department_title').innerHTML
    let file = document.querySelector('#prove').files[0]
    let bar = document.querySelector('.progress-bar');

    let sendTo = 'emp_api/submit_absent.php'
    let chief = document.querySelector('.chief-page_main.employee-page_attendence')
    if(chief != null)
        sendTo = 'phase3-employee/'+ sendTo
    
    if(absentDay.value == ''){
        errorMsg.innerHTML = 'Khong duoc bo trong so ngay muon nghi'
    }
    else{
        let absentDayInt = parseInt(absentDay.value)
        
        if(totalAbsent >= maxAbsent) errorMsg.innerHTML = 'Khong the xin nghi them'
        else if(summerNote.value.trim() == ''){
            //thong bao loi
            errorMsg.innerHTML = 'Thieu li do xin nghi'
        }
        else if(absentDayInt < 1 || absentDayInt > (maxAbsent - totalAbsent)){
            errorMsg.innerHTML = 'So ngay nghi khong hop le'
        }
        else{
            //username: userName, absentday: absentDayInt,
            //fullname: fullName, department: department, file-upload: file
            //reason: summerNote.value.trim()
            let data = new FormData()
            data.append('username',userName)
            data.append('absentday',absentDayInt)
            data.append('fullname',fullName)
            data.append('department',department)
            data.append('file-upload',file)
            data.append('reason',summerNote.value.trim())

            let xhr = new XMLHttpRequest()

            xhr.addEventListener('load', e => {
                if(xhr.status === 200){
                    $('.absent-request_success-msg').text('Submit Success!')
                    loadAbsent()
                    //turn off request btn 
                    let btn = document.querySelector('.absent-request_btn')
                    btn.disabled = true
                    
                }else{
                    $('.absent-request_error-msg').text('Upload fail with code: ' + xhr.status)
                }
            })

            xhr.upload.addEventListener('progress', e => {
                let loaded = e.loaded						
                let progress = Math.ceil(loaded * 100 / e.total) + 5
                //console.log(progress)
                //update progress bar //style="width: 25%" aria-valuenow="25"
                bar.style.width = progress + '%'
                if(progress >= 100){
                    setTimeout(() => {
                        $('#openAbsentReq').modal('hide')
                    }, 1000)
                }
            })
    
            xhr.open('POST',sendTo,true);
            xhr.send(data);
        }
    } 
}

////////////////////ADMIN
function showEmpInfo_AdminPage(){
    const line = document.querySelector('.line');
	const items = document.querySelectorAll('.category__item');
	const linkStr = '.category__link';
	const btnDepartment = document.querySelector('.btn-department');
	const btnEmployee = document.querySelector('.btn-employee');

	const employeeManagement = document.querySelector('#employee-management');
	const facultyManagement = document.querySelector('#faculty-management');
    const attendanceManagement = document.querySelector('#attendance-management');

	employeeManagement.addEventListener('click', readEmployee);
    facultyManagement.addEventListener('click', readFaculty);
    attendanceManagement.addEventListener('click', readAttendance);

	function readEmployee() {
		fetch('http://localhost:8080/phase2-admin/api/read_employees.php')
			.then((res) => res.json())
			.then(handleGetEmployee);
	}


	function readFaculty() {
		fetch('http://localhost:8080/phase2-admin/api/read_faculties.php')
			.then((res) => res.json())
			.then(handleGetFaculty)
			.then((list) => {
				for (let i = 0; i < list.children.length; i++) {
					fetch('http://localhost:8080/phase2-admin/api/read_employee.php', {
						method: 'POST',
						body: new URLSearchParams({ id: list.children[i].id }),
					})
						.then((res) => res.json())
						.then((response) => {
							if (response.code == 0) {
								list.children[i].querySelector(".about__item__role").innerHTML = `<label>Leader: ${response.data.FullName}</label>
                                <div id="faculty__position" class="about__item__name sm"></div>`
							} else {
								list.children[i].querySelector(".about__item__role").innerHTML = `<label>Leader: Empty</label>
                                <div id="faculty__position" class="about__item__name sm"></div>`;
							}
						});
				}
			});
	}

    function readAttendance() {
        fetch('http://localhost:8080/phase2-admin/api/read_attendance.php')
        .then(res => res.json())
        .then(handleGetAttendance)
    }

	function getInfoModal(arr) {
		const aboutList = document.querySelector('.about__list');
		aboutList.addEventListener('click', function (e) {
			if (e.target.matches('.about__item')) {
				// const employeePhoneNumber = e.target.querySelector('.about__item__phone').textContent;
				// const employeeEmail = e.target.querySelector('.about__item__gmail').textContent;
				const dataId = e.target.getAttribute("data-id");
                const employee = arr.filter(
					(item) => item['EmpID'] === dataId
				)[0];
				if (!document.body.querySelector('.modal')) {
					openModal(employee);
				}
			}
		});
	}

	function showSuccessMessage(title = 'Add') {
		deleteAllModal();
		const template = `<div class="sweet-alert">
		<i class="fa fa-check sweet-icon"></i>
		<p class="sweet-text">${title} Success!</p>
	</div>`;
		document.body.insertAdjacentHTML('beforeend', template);
		document.body.querySelector('.sweet-alert').classList.add('show');
		const items = document.querySelectorAll('.sweet-alert');
		items &&
			items.forEach(function (item) {
				window.setTimeout(function () {
					item.parentElement.removeChild(item);
				}, 3000);
			});
	}

	function deleteAllModal() {
		while (document.body.querySelector('.modal')) {
			const modal = document.body.querySelector('.modal');
			document.body.removeChild(modal);
		}
	}

	function openModal(employee) {
        let gender = (employee.Gender == null) ? "Empty" : employee.Gender;
        let age = (employee.Age == null) ? "Empty" : employee.Age;
        let email = (employee.Email == null) ? "Empty" : employee.Email;
        let phone = (employee.Phone == null) ? "Empty" : employee.Phone;
        let address = (employee.Address == null) ? "Empty" : employee.Address;

		const template = `<div class="modal">
					<div class="modal__content">
						<i class="fa fa-times modal__close"></i>
						<h2 class="modal__title">Information Employee</h2>
						<div class="modal__main">
							<div class="modal__avatar">
								<img src="../${employee.ImgDir}" alt="" />
								<button type="reset" class="button btn-primary admin__btn-reset">Reset password</button>
							</div>
							<div class="modal__info">
								<div class="modal__more">Full name: <span>${employee.FullName}</span></div>
								<div class="modal__more">User name: <span>${employee.UserName}</span></div>
								<div class="modal__more">Gender: <span>${gender}</span></div>
								<div class="modal__more">Age: <span>${age}</span></div>
								<div class="modal__more">Department: <span>${employee.Department}</span></div>
								<div class="modal__more">Role: <span>${employee.Role}</span></div>
								<div class="modal__more">Email: <span>${email}</span></div>
								<div class="modal__more">Phone number: <span>${phone}</span></div>
								<div class="modal__more">Address: <span>${address}</span></div>
							</div>
						</div>
					</div>
				</div>`;
		document.body.insertAdjacentHTML('beforeend', template);
		document.body.querySelector('.modal .modal__content').parentNode.classList.add('show');
		// reset password
		const resetBtn = document.querySelector('.admin__btn-reset');
		resetBtn.addEventListener('click', function (e) {
			e.preventDefault();
			const template = `<div class="modal show">
			<div class="dialog">
				<div class="dialog__top">Do you want to reset your password?</div>
				<div class="dialog__bottom">
					<button class="button btn-cancel">Maybe late</button>
					<button class="button btn-primary admin__confirm__btn-reset">Reset now</button>
				</div>
			</div>
		</div>`;
			document.body.insertAdjacentHTML('beforeend', template);
			document.body.querySelector('.modal .dialog').parentNode.classList.add('show');

			const confirmResetBtn = document.querySelector('.admin__confirm__btn-reset');
			confirmResetBtn.addEventListener('click', function () {
				fetch('http://localhost:8080/phase2-admin/api/reset_password.php', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify({ id: `${employee.EmpID}` }),
				})
					.then((res) => res.json())
					.then(showSuccessMessage('Reset'));
			});
		});
	}

	function changeCategory(categoryItem) {
		[...items].forEach((item) => {
			const link = item.querySelector(linkStr);
			if (link.style) {
				link.style = '';
			}
		});
		categoryItem.querySelector(linkStr).style = 'background-color: #a99eda; color: white;';
	}

	function switchLine(categoryItem) {
		const line = document.querySelector('.line');
		line.style.top = categoryItem.offsetTop + 'px';
		changeCategory(categoryItem);
	}

	function handleGetEmployee(response) {
		if (response.code === 0) {
			const employeeList = document.querySelector('#employee-list');
			let arr = [];
			employeeList.innerHTML = '';
			response.data.forEach((employee) => {
                if (employee.Role !== "Admin") {
                    let image = (employee.ImgDir == null) ? "uploads/default.jpg" : employee.ImgDir;
                    let name = (employee.FullName == null) ? "Empty" : employee.FullName;
                    let phone = (employee.Phone == null) ? "Empty" : employee.Phone;
                    let email = (employee.Email == null) ? "Empty" : employee.Email;
                    let item = `<div data-id="${employee.EmpID}" class="about__item">
                                <div class="about__item__top">
                                    <img
                                    src="../${image}"
                                    alt="avatar"
                                    class="about__item__image"
                                    />
                                </div>
                                    <div class="about__item__bottom">
                                    <h3 class="about__item__name">${name}</h3>
                                    <div class="about__item__position">${employee.Role}</div>
                                    <a href="tel:+0123456789" class="about__item__phone">${phone}</a>
                                    <a href="mailto:123@gmail.com" class="about__item__gmail">${email}</a>
                                    </div>
                                </div>`;
                    employeeList.insertAdjacentHTML('beforeend', item);
                    arr.push(employee);
                    document.querySelector(".about__top__title").innerHTML = `People<span></span>`;
                    const numberEmployee = document.querySelector('.about__top__title span');
                    console.log(numberEmployee)
                    numberEmployee.textContent = arr.length > 0 ? arr.length : 0;
                }
			});
			getInfoModal(arr);
		}
	}

	function handleGetFaculty(response) {
		if (response.code === 0) {
			const employeeList = document.querySelector('#employee-list');
			employeeList.innerHTML = '';
			response.data.forEach((department) => {
				let item = `<div id="${department.empID}" data-id="${department.ID}" class="about__item__alternate">
                                <div class="about__item__top">
                                    <i class="about__item__icon fas fa-home"></i>
                                    <h3 class="about__item__department">${department.name}</h3>
                                </div>
								<div class="about__item__bottom flex-left">
                                    <div class="about__item__role">
                                        <label>Leader:</label>
                                        <div id="faculty__position" class="about__item__name sm"></div>
                                    </div>
								    <div class="about__item__quantity">
                                        <label>Quantity:</label>
                                        ${department.quantity}
								    </div>
								    <div class="about__item__desc"><label>Description:</label>${department.description}</div>
                                    <div>
                                        <button id="admin__department${department.ID}" class="btn btn-primary admin__btn-update">Update</button>
                                        <button id="admin__department2${department.ID}" class="btn btn-success admin__btn-select">Select Leader</button>
                                    </div>
								</div>
							</div>`;
				employeeList.insertAdjacentHTML('beforeend', item);
                document.querySelector(".about__top__title").innerHTML = "Department<span></span>"
                const numberDepartment = document.querySelector('.about__top__title span');
                numberDepartment.textContent = response.data.length > 0 ? response.data.length : 0;

                document.querySelector(`#admin__department2${department.ID}.admin__btn-select`).addEventListener("click", (e) => {
                    const id = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
                    fetch("http://localhost:8080/phase2-admin/api/read_employees.php")
                    .then(res => res.json())
                    .then(response => {
                        if (response.code === 0) {
                            let template = `<div class="modal">
                                <div class="modal__content">
                                    <i class="fa fa-times modal__close"></i>
                                    <h2 class="modal__title">Select</h2>
                                    <form data-id="${id}" action="http://localhost:8080/phase2-admin/api/update_leader.php" id="form-update-leader" method="POST">
                                        <div class="dropdown">
                                            <div id="-1" class="dropdown__select">
                                                <span name="role" class="dropdown__selected">Employee</span>
                                                <i class="fa fa-caret-left dropdown__caret"></i>
                                            </div>
                                            <ul class="dropdown__list">
                                                <input type="radio" class="dropdown__radio" style = "opacity:0" name= "role" value="Leader"/>`
                            response.data.forEach(employee => {
                                template += `<li class="dropdown__item">
                                                <span id="${employee.EmpID}" class="dropdown__text">${employee.FullName}</span>
                                                <i class="fa fa-user dropdown__icon"></i>
                                            </li>`
                            })
                            template += `</ul>
                                        </div>
                                            <div class="modal__errorMessage">
                                                <i class="fas fa-exclamation-circle"></i>
                                                <span class="modal__errorMessage__text"></span>
                                            </div>
                                            <button type="submit" class="button btn-primary">Select</button>
                                        </form>
                                    </div>
                                </div>`
                            document.body.insertAdjacentHTML('beforeend', template);
                            document.body.querySelector('.modal').classList.add('show');
                            const dropdownSelect = document.querySelector('.dropdown__select');
                            const dropdownList = document.querySelector('.dropdown__list');
                            const dropdownIcon = document.querySelector('.dropdown__caret');
                            const dropdownSelected = document.querySelector('.dropdown__selected');
                            const dropdownItems = document.querySelectorAll('.dropdown__item');
                            // Custom select option
                            dropdownSelect &&
                                dropdownSelect.addEventListener('click', function (e) {
                                    dropdownList && dropdownList.classList.toggle('show');
                                    dropdownIcon && dropdownIcon.classList.toggle('fa-caret-right');
                                });
                            dropdownItems &&
                                [...dropdownItems].forEach(function (item) {
                                    item.addEventListener('click', function (e) {
                                        const text = e.target.querySelector('.dropdown__text').textContent;
                                        const id = e.target.querySelector('.dropdown__text').id;
                                        dropdownSelected.id = id;
                                        dropdownSelected.textContent = text;
                                        dropdownList.classList.remove('show');
                                        dropdownIcon.classList.remove('fa-caret-right');
                                    });
                                });

                            const form = document.querySelector("#form-update-leader");
                            form.addEventListener("submit", (e) => {
                                e.preventDefault();
                                const errorMessage = form.querySelector('.modal__errorMessage');
                                const leaderId = e.target.querySelector('.dropdown__selected').id;
                                const leader = e.target.querySelector(".dropdown__selected").textContent
                                if (leader === "Employee") {
                                    errorMessage.style.opacity = '1';
                                    errorMessage.querySelector(
                                        '.modal__errorMessage__text'
                                    ).textContent = `Vui lòng chọn ai đó!`;
                                }
                                else {
                                    errorMessage.style.opacity = '0';
                                    fetch('http://localhost:8080/phase2-admin/api/update_leader.php', {
                                        method: 'PUT',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            Accept: 'application/json',
                                        },
                                        body: JSON.stringify({
                                            leaderId: leaderId,
                                            id:e.target.getAttribute("data-id")
                                        })
                                    })
                                    .then((res) => res.json())
                                    .then(readFaculty)
                                    .then(() => {
                                        showSuccessMessage("Select leader")
                                    });
                                }
                            })
                        }
                    })
                })

                document.querySelector(`#admin__department${department.ID}.admin__btn-update`).addEventListener("click", () => {
                    const template = `<div class="modal">
                        <div class="modal__content">
                            <i class="fa fa-times modal__close"></i>
                            <div class="modal__title">Update department</div>
                            <form data-id="${department.ID}" action="http://localhost:8080/phase2-admin/api/update_department.php" id="form-update-department" method="POST">
                                <div class="modal__item">
                                    <label class="modal__item__text">Depart's name</label>
                                    <input type="text" name="departmentName" value="${department.name}" class="modal__item__input" />
                                </div>
                                <div class="modal__item">
                                    <label class="modal__item__text">Number of rooms</label>
                                    <input type="number" name="quantity" value="${department.quantity}" class="modal__item__input" />
                                </div>
                                <div class="modal__item">
                                    <label class="modal__item__text">Description</label>
                                    <input type="text" name="description" value="${department.description}" class="modal__item__input" />
                                </div>
                                <div class="modal__errorMessage">
                                    <i class="fas fa-exclamation-circle"></i>
                                    <span class="modal__errorMessage__text">test</span>
                                </div>
                                <button type="submit" class="button btn-primary">Update</button>
                            </form>
                        </div>
                    </div>`;
                    document.body.insertAdjacentHTML('beforeend', template);
                    document.body.querySelector('.modal').classList.add('show');
                    const form = document.querySelector('#form-update-department');
                    form.addEventListener('submit', function (e) {
                        e.preventDefault();
                        let objDepartment = {};
                        for (let i = 0; i < this.elements.length; i++) {
                            let inputModal = this.elements[i];
                            const errorMessage = form.querySelector('.modal__errorMessage');
                            inputModal.addEventListener('input', function () {
                                errorMessage.style.opacity = '0';
                            });
                            if (inputModal.type === 'text' || inputModal.type === 'number') {
                                if (!inputModal.value) {
                                    errorMessage.style.opacity = '1';
                                    switch (inputModal.name) {
                                        case 'description':
                                            errorMessage.querySelector(
                                                '.modal__errorMessage__text'
                                            ).textContent = `Vui lòng nhập mô tả`;
                                            break;
                                        case 'departmentName':
                                            errorMessage.querySelector(
                                                '.modal__errorMessage__text'
                                            ).textContent = `Vui lòng nhập tên phòng ban`;
                                            break;
                                        case 'quantity':
                                            errorMessage.querySelector(
                                                '.modal__errorMessage__text'
                                            ).textContent = `Vui lòng nhập số lượng phòng`;
                                            break;
                                    }
                                } else if (inputModal.name === 'quantity') {
                                    if (parseInt(inputModal.value) <= 0) {
                                        errorMessage.style.opacity = '1';
                                        errorMessage.querySelector(
                                            '.modal__errorMessage__text'
                                        ).textContent = `Vui lòng nhập số lượng phòng hợp lệ`;
                                    } else {
                                        objDepartment[inputModal.name] = parseInt(inputModal.value);
                                    }
                                } else {
                                    objDepartment[inputModal.name] = inputModal.value;
                                }
                            }
                        }
                        objDepartment.id = form.getAttribute("data-id");
                        updateDepartment(objDepartment);
                    });
                    function updateDepartment(form) {
                        if (
                            form.hasOwnProperty('departmentName') &&
                            form.hasOwnProperty('quantity') &&
                            form.hasOwnProperty('description')
                        ) {
                            switchLine(facultyManagement);
                            fetch('http://localhost:8080/phase2-admin/api/update_department.php', {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                },
                                body: JSON.stringify({
                                    id:form["id"],
                                    departmentName: form['departmentName'],
                                    quantity: form['quantity'],
                                    description: form['description'],
                                })
                            })
                                .then((res) => res.json())
                                .then(readFaculty)
                                .then(() => {
                                    showSuccessMessage("Update")
                                });
                        }
                    }
                    
                })
			});
			return employeeList;
		}
	}

    function handleGetAttendance(response) {
        if (response.code === 0) {
            const employeeList = document.querySelector('#employee-list');
			employeeList.innerHTML = '';
            document.querySelector(".about__top__title").innerHTML = "Attendance Request<span></span>"
            const numberDepartment = document.querySelector('.about__top__title span');
            numberDepartment.textContent = response.data.length > 0 ? response.data.length : 0;

			response.data.forEach((employee) => {
                if (employee.Status == null) {
                    let item = `<div id="admin__${employee.UserName}" class="about__item__alternate">
							    <div class="about__item__top">
								    <h3 class="about__item__name">${employee.FullName}</h3>
							    </div>
								<div class="about__item__bottom flex-left">
								    <div class="about__item__role">
									    <label>Username: ${employee.UserName}</label>
								    </div>
                                    <div class="about__item__quantity">
                                        <label>Absent Days: </label>
                                        ${employee.AbsentDays}
                                    </div>
                                    <div class="about__item__desc"><label>Reason: </label>${employee.Reason}</div>
                                    <div class="about__item__desc">
                                        <label>Prove: </label><a href="../${employee.AttachedFile}" target="_blank">${employee.AttachedFile}</a></div>
                                    </div>
                                    <div>
                                        <button class="btn btn-danger admin__btn-reject">Reject</button>
                                        <button class="btn btn-success admin__btn-approve">Approve</button>
                                    </div>
                                </div>
							</div>`;
                    employeeList.insertAdjacentHTML('beforeend', item);

                    const approveBtn = document.querySelector(`#admin__${employee.UserName} .admin__btn-approve`);
                    const rejectBtn = document.querySelector(`#admin__${employee.UserName} .admin__btn-reject`);
                    
                    approveBtn.addEventListener('click', function (e) {
                        let user = e.target.parentNode.parentNode.id.split("__")[1];
                        e.preventDefault();
                        const template = `<div id="${user}" class="modal show">
                                            <div class="dialog">
                                                <div class="dialog__top">Do you want to approve this request?</div>
                                                    <div class="dialog__bottom">
                                                        <button class="button btn-cancel">Maybe late</button>
                                                        <button class="button btn-primary admin__confirm__btn-approve">Approve now</button>
                                                    </div>
                                                </div>
                                            </div>`;
                        document.body.insertAdjacentHTML('beforeend', template);
                        document.body.querySelector('.modal .dialog').parentNode.classList.add('show');
                        
                        const confirmApproveBtn = document.querySelector('.admin__confirm__btn-approve');
                        confirmApproveBtn.addEventListener('click', function (e) {
                            const user = e.target.parentNode.parentNode.parentNode.id
                            fetch('http://localhost:8080/phase2-admin/api/update_attendance.php', {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                },
                                body: JSON.stringify({ user: user, status: "approved" }),
                            })
                            .then((res) => res.json())
                            .then(response => {
                                if (response.code === 0) {
                                    showSuccessMessage("Approved")
                                    readAttendance();
                                }
                            });
                        });
                    })

                    rejectBtn.addEventListener('click', function (e) {
                        let user = e.target.parentNode.parentNode.id.split("__")[1];
                        e.preventDefault();
                        const template = `<div id="${user}" class="modal show">
                                            <div class="dialog">
                                                <div class="dialog__top">Do you want to reject this request?</div>
                                                    <div class="dialog__bottom">
                                                        <button class="button btn-cancel">Maybe late</button>
                                                        <button class="button btn-primary admin__confirm__btn-reject">Reject now</button>
                                                    </div>
                                                </div>
                                            </div>`;
                        document.body.insertAdjacentHTML('beforeend', template);
                        document.body.querySelector('.modal .dialog').parentNode.classList.add('show');
                        
                        const confirmRejectBtn = document.querySelector('.admin__confirm__btn-reject');
                        confirmRejectBtn.addEventListener('click', function (e) {
                            const user = e.target.parentNode.parentNode.parentNode.id
                            fetch('http://localhost:8080/phase2-admin/api/update_attendance.php', {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                },
                                body: JSON.stringify({ user: user, status: "rejected" }),
                            })
                            .then((res) => res.json())
                            .then(response => {
                                if (response.code === 0) {
                                    showSuccessMessage("Rejected")
                                    readAttendance();
                                }
                            });
                        });
                    })
                }
                else if (employee.Status == "approved") {
                    let item = `<div id="admin__${employee.UserName}" class="about__item__alternate">
							    <div class="about__item__top">
								    <h3 class="about__item__name">${employee.FullName}</h3>
							    </div>
								<div class="about__item__bottom flex-left">
								    <div class="about__item__role">
									    <label>Username: ${employee.UserName}</label>
								    </div>
                                    <div class="about__item__quantity">
                                        <label>Absent Days: </label>
                                        ${employee.AbsentDays}
                                    </div>
                                    <div class="about__item__desc"><label>Reason: </label>${employee.Reason}</div>
                                    <div class="about__item__desc">
                                        <label>Prove: </label><a href="../${employee.AttachedFile}" target="_blank">${employee.AttachedFile}</a></div>
                                    </div>
                                    <div style="font-size:1.5rem" class="alert alert-success">
                                        Approved
                                    </div>
                                </div>
							</div>`;
                    employeeList.insertAdjacentHTML('beforeend', item);
                }
                else if (employee.Status == "rejected") {
                    let item = `<div id="admin__${employee.UserName}" class="about__item__alternate">
							    <div class="about__item__top">
								    <h3 class="about__item__name">${employee.FullName}</h3>
							    </div>
								<div class="about__item__bottom flex-left">
								    <div class="about__item__role">
									    <label>Username: ${employee.UserName}</label>
								    </div>
                                    <div class="about__item__quantity">
                                        <label>Absent Days: </label>
                                        ${employee.AbsentDays}
                                    </div>
                                    <div class="about__item__desc"><label>Reason: </label>${employee.Reason}</div>
                                    <div class="about__item__desc">
                                        <label>Prove: </label><a href="../${employee.AttachedFile}" target="_blank">${employee.AttachedFile}</a></div>
                                    </div>
                                    <div style="font-size:1.5rem" class="alert alert-danger">
                                        Rejected
                                    </div>
                                </div>
							</div>`;
                    employeeList.insertAdjacentHTML('beforeend', item);
                }
            })
        }
    }

	// animation category
	items &&
		[...items].forEach((item) => {
			const link = item.querySelector(linkStr);
			if (line.offsetTop === item.offsetTop) {
				link.style = 'background-color: #a99eda; color: white;';
			} else {
				link.style = '';
			}
			item.addEventListener('click', (e) => {
				line.style.top = e.target.offsetTop + 'px';
				changeCategory(e.target);
			});
		});
	// close modal
	document.body.addEventListener('click', (e) => {
		if (e.target.matches('.modal__close')) {
			const modal = e.target.parentNode.parentNode;
			modal.parentNode.removeChild(modal);
		} else if (e.target.matches('.modal')) {
			e.target.parentNode.removeChild(e.target);
		} else if (e.target.matches('.btn-cancel')) {
			const dialog = e.target.parentNode.parentNode.parentNode;
			dialog.parentNode.removeChild(dialog);
		}
	});
	//open form new department
	btnDepartment &&
		btnDepartment.addEventListener('click', () => {
			const template = `<div class="modal">
			<div class="modal__content">
				<i class="fa fa-times modal__close"></i>
				<div class="modal__title">Add a new department</div>
				<form action="http://localhost:8080/phase2-admin/api/add_department.php" id="form-add-department" method="POST">
					<div class="modal__item">
						<label class="modal__item__text">Depart's name</label>
						<input type="text" name="departmentName" class="modal__item__input" />
					</div>
					<div class="modal__item">
						<label class="modal__item__text">Number of rooms</label>
						<input type="number" name="quantity" class="modal__item__input" />
					</div>
					<div class="modal__item">
						<label class="modal__item__text">Description</label>
						<input type="text" name="description" class="modal__item__input" />
					</div>
					<div class="modal__errorMessage">
						<i class="fas fa-exclamation-circle"></i>
						<span class="modal__errorMessage__text">test</span>
					</div>
					<button type="submit" class="button btn-primary">Add</button>
				</form>
			</div>
		</div>`;
			document.body.insertAdjacentHTML('beforeend', template);
			document.body.querySelector('.modal').classList.add('show');
			const form = document.querySelector('#form-add-department');
			form.addEventListener('submit', function (e) {
				e.preventDefault();
				let objDepartment = {};
				for (let i = 0; i < this.elements.length; i++) {
					let inputModal = this.elements[i];
					const errorMessage = form.querySelector('.modal__errorMessage');
					inputModal.addEventListener('input', function () {
						errorMessage.style.opacity = '0';
					});
					if (inputModal.type === 'text' || inputModal.type === 'number') {
						if (!inputModal.value) {
							errorMessage.style.opacity = '1';
							switch (inputModal.name) {
								case 'description':
									errorMessage.querySelector(
										'.modal__errorMessage__text'
									).textContent = `Vui lòng nhập mô tả`;
									break;
								case 'departmentName':
									errorMessage.querySelector(
										'.modal__errorMessage__text'
									).textContent = `Vui lòng nhập tên phòng ban`;
									break;
								case 'quantity':
									errorMessage.querySelector(
										'.modal__errorMessage__text'
									).textContent = `Vui lòng nhập số lượng phòng`;
									break;
							}
						} else if (inputModal.name === 'quantity') {
							if (parseInt(inputModal.value) <= 0) {
								errorMessage.style.opacity = '1';
								errorMessage.querySelector(
									'.modal__errorMessage__text'
								).textContent = `Vui lòng nhập số lượng phòng hợp lệ`;
							} else {
								objDepartment[inputModal.name] = parseInt(inputModal.value);
							}
						} else {
							objDepartment[inputModal.name] = inputModal.value;
						}
					}
				}
				addDepartment(objDepartment);
			});
			function addDepartment(form) {
				if (
					form.hasOwnProperty('departmentName') &&
					form.hasOwnProperty('quantity') &&
					form.hasOwnProperty('description')
				) {
					switchLine(facultyManagement);
					fetch('http://localhost:8080/phase2-admin/api/add_department.php', {
						method: 'POST',
						body: new URLSearchParams({
							departmentName: form['departmentName'],
							quantity: form['quantity'],
							description: form['description'],
						}),
					})
						.then((res) => res.json())
						.then(readFaculty)
						.then(showSuccessMessage);
				}
			}
		});
	btnEmployee &&
		btnEmployee.addEventListener('click', function (e) {
			const template = `<div class="modal">
				<div class="modal__content">
					<i class="fa fa-times modal__close"></i>
					<h2 class="modal__title">Add a new employee</h2>
					<form action="http://localhost:8080/phase2-admin/api/add_employee.php" id="form-add-employee" method="POST">
						<div class="modal__item">
							<label class="modal__item__text">Full name</label>
							<input type="text" name="fullName" class="modal__item__input" />
						</div>
						<div class="modal__item">
							<label class="modal__item__text">User name</label>
							<input type="text" name="username" class="modal__item__input" />
						</div>
						<div class="modal__item">
							<label class="modal__item__text">Department's name</label>
							<input type="text" name="department" class="modal__item__input" />
						</div>
						<div class="dropdown">
							<div class="dropdown__select">
								<span name="role" class="dropdown__selected">Employee</span>
								<i class="fa fa-caret-left dropdown__caret"></i>
							</div>
							<ul class="dropdown__list">
								<input type="radio" class="dropdown__radio" name= "role" value="Employee"/>
								<li class="dropdown__item">
									<span class="dropdown__text">Employee</span>
									<i class="fa fa-user dropdown__icon"></i>
								</li>
								<li class="dropdown__item">
									<span class="dropdown__text">Chief</span>
									<i class="fas fa-utensils dropdown__icon"></i>
								</li>
							</ul>
						</div>
						<div class="modal__errorMessage">
							<i class="fas fa-exclamation-circle"></i>
							<span class="modal__errorMessage__text"></span>
						</div>
						<button type="submit" class="button btn-primary">Add</button>
					</form>
				</div>
			</div>`;
			document.body.insertAdjacentHTML('beforeend', template);
			document.body.querySelector('.modal').classList.add('show');
			const dropdownSelect = document.querySelector('.dropdown__select');
			const dropdownList = document.querySelector('.dropdown__list');
			const dropdownIcon = document.querySelector('.dropdown__caret');
			const dropdownSelected = document.querySelector('.dropdown__selected');
			const dropdownItems = document.querySelectorAll('.dropdown__item');
			// Custom select option
			dropdownSelect &&
				dropdownSelect.addEventListener('click', function (e) {
					dropdownList && dropdownList.classList.toggle('show');
					dropdownIcon && dropdownIcon.classList.toggle('fa-caret-right');
				});
			dropdownItems &&
				[...dropdownItems].forEach(function (item) {
					item.addEventListener('click', function (e) {
						const text = e.target.querySelector('.dropdown__text').textContent;
						dropdownSelected.textContent = text;
						dropdownList.classList.remove('show');
						dropdownIcon.classList.remove('fa-caret-right');
					});
				});

			const form = document.querySelector('#form-add-employee');
			form.addEventListener('submit', function (e) {
				e.preventDefault();
				let objDepartment = {};
				for (let i = 0; i < this.elements.length; i++) {
					let inputModal = this.elements[i];
					console.log(inputModal);
					const errorMessage = form.querySelector('.modal__errorMessage');
					inputModal.addEventListener('input', function () {
						errorMessage.style.opacity = '0';
					});
					if (inputModal.type === 'text') {
						if (!inputModal.value) {
							errorMessage.style.opacity = '1';
							switch (inputModal.name) {
								case 'fullName':
									errorMessage.querySelector(
										'.modal__errorMessage__text'
									).textContent = `Vui lòng nhập tên nhân viên`;
									break;
								case 'username':
									errorMessage.querySelector(
										'.modal__errorMessage__text'
									).textContent = `Vui lòng nhập username`;
									break;
								case 'department':
									errorMessage.querySelector(
										'.modal__errorMessage__text'
									).textContent = `Vui lòng nhập phòng ban của nhân viên`;
									break;
							}
						} else {
							objDepartment[inputModal.name] = inputModal.value;
						}
					} else if (inputModal.type === 'radio') {
						inputModal.value = dropdownSelected.textContent;
						objDepartment[inputModal.name] = inputModal.value;
						console.log(inputModal.value);
					}
				}
				console.log(objDepartment);
				addEmployee(objDepartment);
			});
			function addEmployee(form) {
				if (
					form.hasOwnProperty('fullName') &&
					form.hasOwnProperty('username') &&
					form.hasOwnProperty('department') &&
					form.hasOwnProperty('role')
				) {
					switchLine(employeeManagement);
					fetch('http://localhost:8080/phase2-admin/api/add_employee.php', {
						method: 'POST',
						body: new URLSearchParams({
							fullName: form['fullName'],
							username: form['username'],
							department: form['department'],
							role: form['role'],
						}),
					})
						.then((res) => res.json())
						.then(readEmployee)
						.then(showSuccessMessage);
				}
			}
		});
}

window.onload = () => {
    ////////////////////////ADMIN///////////////////
    const adminPage = document.querySelector("#admin-page");
    if (adminPage != null) {
        showEmpInfo_AdminPage();
    }
    ///////////////////////////LOGIN PAGE //////////////////////////
    let authFormSubmitBtn = document.querySelector('.auth-form__submit-btn')
    if(authFormSubmitBtn != null)
        handleFullLogin()
	///////////////////////////CHIEF/EMPLOYEE UPDATE INFO  ////////////////////////
    let chiefUpInfo = document.querySelector('.chief-page_update-info')
    let empUpdateInfo = document.querySelector('.employee-page_update-info')
    
    if(chiefUpInfo != null || empUpdateInfo != null){
        chiefUpdateInfo()  
    }   
        

    ///////////////////////////CHIEF TASK////////////////////////////////

    let chiefTask = document.querySelector('.chief-page_task')
    if(chiefTask != null){
        $('.add-task-modal_summernote #summernote').summernote()
        chiefTaskFull()
        loadTask()
    }

    //////////////////////////////Employee Task ///////////////////
    let assignEmp = document.querySelector('.employee-page_assigned-tasks')
    if(assignEmp != null){
        $('.add-task-modal_summernote #summernote').summernote()
        $(".custom-file-input").on("change", function () {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
        load_assigned_task()
        //taskStatusInteract()
    }

    //////////////////////////////Employee Attendence//////////////////
    let absentEmp = document.querySelector('.employee-page_attendence')
    if(absentEmp != null){
        $('.add-request_absent #summernote').summernote()
        $(".custom-file-input").on("change", function () {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
        loadAbsent()
    }
    
    /////////////////////////////////Chief handle absent request ///////////////////
    let chiefHandleAbsent = document.querySelector('.chief_attendence-manage')
    if(chiefHandleAbsent != null){
        load_absent_requests()
    }
}