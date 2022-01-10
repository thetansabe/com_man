<?php 
    require_once('employee_head.php');
?>
                
<!-- main -->
<div class="employee-page_update-info chief-page_main">
                <!--Update Info  -->
                    <div class="card update-info_form px-4">
                        <h3 class="text-center">Update Your Info</h3>

                        <form action="update-avatar.php" method="POST" enctype="multipart/form-data" id="update-avatar_form">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="custom-file add-avatar input-group">
                                        <input accept="image/*" type="file" name="avatar" class="custom-file-input add-avatar_input" id="customFile">
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <button class="avatar-submit btn btn-primary">
                                        Update Avatar
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div class="update-info_form-group form-group update-info_fullname mt-2">
                            <label for="fullname">
                                Full Name: <span class="chief-info_fullname"><?= $fullName?></span>
                            </label>
            
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-user-alt"></i>
                                    </div>   
                                </div>
                                <input type="text" name="fullname" class="form-control fullname-input_js" id="fullname" placeholder="<?= $fullName ?>">
                            </div>
                            
                            <span class="error-msg text-danger"></span>
                        </div>
                        
                        
                        <div class="update-info_form-group form-group update-info_email">
                            <label for="email">
                                Email: <span class="chief-info_email"><?= $email ?></span>
                            </label>
            
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-envelope"></i>
                                    </div>   
                                </div>
                                <input type="email" name="email" class="form-control email-input_js" id="email-chief" placeholder="<?= $email ?>">
                            </div>
                            
                            <span class="error-msg text-danger"></span>
                        </div>
    
                        <div class="update-info_form-group form-group">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 update-info_age">
                                    <label for="age">
                                        Age: <span class="chief-info_age"><?= $age?></span>
                                    </label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="far fa-user"></i>
                                            </div>   
                                        </div>
                                        <input type="number" name="age" min="18" max="65" class="form-control age-input_js" id="age-chief" placeholder="<?= $age ?>">
                                    </div>
                            
                                    <span class="error-msg text-danger"></span>
                                </div>
    
                                <div class="col-md-6 col-sm-12 update-info_phone">
                                    <label for="phone">
                                        Phone: <span class="chief-info_phone"><?= $phone?></span>
                                    </label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="fas fa-phone"></i>
                                            </div>   
                                        </div>
                                        <input type="number" name="phone" class="form-control phone-input_js" id="phone" placeholder="<?= $phone ?>">
                                    </div>
                                    <span class="error-msg text-danger"></span>
                                </div>
                            </div>
                        </div>
    
                        <div class="update-info_form-group form-group update-info_address">
                            <label for="address">
                                Address: <span class="chief-info_address"><?= $address?></span>
                            </label>
            
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-map-marker"></i>
                                    </div>   
                                </div>
                                <input type="text" name="address" class="form-control address-input_js" id="address" placeholder="<?= $address ?>">
                            </div>
                            <span class="error-msg text-danger"></span>
                        </div>
    
                        <div class="update-info_form-group form-group">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 chief_gender">
                                    <label for="gender">
                                        Gender: <span class="chief-info_gender"><?= $gender?></span>
                                    </label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="far fa-user"></i>
                                            </div>   
                                        </div>
                                        <select name="gender" id="gender" class="form-control gender-input_js">
                                            <option selected><?= $gender ?></option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                            
                                    <span class="error-msg text-danger"></span>
                                </div>
    
                                <div class="col-md-6 col-sm-12 update-info_date-join">
                                    <label for="date-join">
                                        Date Joined: <span class="chief-info_date-joined"><?= $dateJoined?></span> 
                                    </label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="fas fa-calendar-week"></i>
                                            </div>   
                                        </div>
                                        <input type="date" name="date-join" class="form-control date-input_js" id="date-join" >
                                    </div>
                                    <span class="error-msg text-danger"></span>
                                </div>
                            </div>
                        </div>
    
                        <div class="update-info_form-group form-group">
                            <div class="row">
                                
                                <div class="col-md-6 col-sm-12 update-info_date-of-birth">
                                    <label for="date-birth">
                                        Date of birth: <span class="chief-info_date-birth"><?= $dateBirth?></span>
                                    </label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="fas fa-calendar-week"></i>
                                            </div>   
                                        </div>
                                        <input type="date" name="date-birth" class="form-control birth-input_js" id="date-birth">
                                    </div>
                                    <span class="error-msg text-danger"></span>
                                </div>

                                <div class="col-md-6 col-sm-12">
                                    
                                </div>
                            </div>
                    
                        </div>

                        <div class="alert alert-danger alert-dismissable hide chief-update_failed-msg">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <strong>Failed!</strong> You are not changing anything
                        </div>

                        <div class="alert alert-success alert-dismissable hide chief-update_success-msg">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <strong>Update Success!</strong> Wait a sec for update
                        </div>

                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-success px-4 update-info_submint-btn">SUBMIT</button>
                        </div>

                        
                    </div> 
                </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="../main.js"></script>
</body>
</html>