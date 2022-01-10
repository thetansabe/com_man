<?php 
    require_once('employee_head.php');
?>

    <div class="employee-page_assigned-tasks">
        <div class="emp_user-name hide"><?=$userName?></div>
        <div class="row">
            <div class="col-md-6 col-sm-0 odd_col">
                <!-- <div class="card mx-2 mt-2 p-2">
                    <h6>Title: <span class="emp-task_title"></span></h6>
                    <h6>Deadline: <span class="emp-task_deadline"></span></h6>
                    <h6>Status: <span class="emp-task_status"></span></h6>
                    <h6>Description:</h6>
                    sdhflaskdfjhaskdlfj;asldkfj;alsdjf;alsdjf;alskdfjaslkdjf;asldfj
                    <button class="btn btn-primary">Open Task</button>
                </div> -->
            </div>

            <div class="col-md-6 col-sm-12 even_col">

                <!-- <div class="card mx-2 mt-2 p-2">
                    <h6>Title: <span class="emp-task_title"></span></h6>
                    <h6>Deadline: <span class="emp-task_deadline"></span></h6>
                    <h6>Status: <span class="emp-task_status"></span></h6>
                    <h6>Description:</h6>
                    sdhflaskdfjhaskdlfj;asldkfj;alsdjf;alsdjf;alskdfjaslkdjf;asldfj
                    <button class="btn btn-primary">Open Task</button>
                </div> -->
            </div>
        </div>

    </div>

    <!-- Task pop up -->
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#openTaskEmp">
    Launch demo modal
    </button> -->

    <!-- Modal -->
    <div class="modal fade" id="openTaskEmp" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
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
        </div>
    </div>

    <div class="alert alert-success alert-dismissable toast hide">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <span class="msg"></span>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    <script src="../main.js"></script>
</body>
</html>