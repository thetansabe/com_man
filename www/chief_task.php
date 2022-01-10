<?php 
    require_once('chief_page-header.php');
?>
                
                <!-- main -->
                <div class="chief-page_main chief-page_task">
                <!--Update Info  -->

                    <button class="btn btn-primary my-2 ml-2 chief-page_add-task-btn" data-toggle="modal" data-target=".add-task_modal">
                        Add task 
                        <i class="fas fa-plus text-white"></i>
                    </button>
                    
                    <table class="employee-table table table-striped">
                        <thead>
                            <tr>
                                <th>#</th> 
                                <th>Task title</th>
                                <th>Description</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Assign To</th>
                                <th>Reviewed</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody class = "chief-task_display">
                            
                        </tbody>
                    </table>
                </div>
        </div>
    </div>

    

    <!-- confirm delete modal -->
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cancelTaskConfirm">
    Launch demo modal
    </button> -->

    <!-- Modal Delete Task -->
    <div class="modal fade" id="deleteTaskConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Confirm Delete</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Are you sure to delete task No. <span class="task-id_title text-primary"></span>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger task-delete_confirmed-btn" >Yes</button>
                <!-- onclick="cancelConfirmed()" -->
            </div>
            </div>
        </div>
    </div>

    <!-- Modal Process Task -->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#chief_task-process">
        Launch demo modal
    </button> -->

    <div class="modal fade" id="chief_task-process" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">View Task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body chief-task_process-body">
                    <div class="card p-2">
                        <div class="row">
                            <div class="col-md-6 col-sm-0">
                                <h6>Title: <span class="view-task_title "></span></h6>
                                <h6>Assgin To: <span class="view-task_assign-to "></span></h6>
                                <h6>Status: <span class="view-task_status   "></span></h6>
                            </div>

                            <div class="col-md-6 col-sm-12">
                                <h6>Deadline: <span class="view-task_deadline "></span></h6>
                                <h6>Submit Date: <span class="view-task_submit-date "></span></h6>
                                
                            </div>
                            
                        </div>
                        <h6>Description: <p class="view-task_desc text-secondary"></p></h6>
                    </div>

                    <div class="card mt-2 p-2">
                        <h4>Employee Work: </h4>
                        <p class="text-work"></p>
                        <h6>
                            Attached: <a download href="" class="attached-file"></a>
                        </h6>
                    </div>
                </div>
                <div class="alert alert-info block mt-2 mx-3 complete-level_block" role = "alert">
                
                </div>
                <div class="alert-proccess_block">
                    <!-- Toast msg -->
                    <div class="alert alert-danger alert-dismissable add-task_alert-fail mt-2 mx-4 toast hide" id = "proccess-task_func-fail">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <strong>Failed!</strong> An unknown error occured!
                    </div>

                    <div class="alert alert-success alert-dismissable add-task_alert-success mt-2 mx-4 toast hide " id = "proccess-task_func-succ">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong><span class="alert-function"> </span></strong>
                    </div>
                </div>
                <div class="modal-footer view-task_footer">
                    
                    <!-- <button type="button" class="btn btn-danger task-reject">Reject</button>
                    <button type="button" class="btn btn-success task-approve">Approve</button> -->
                    <!-- onclick="cancelConfirmed()" -->
                </div>
            
            </div>
        </div>
    </div>

    <!-- Reject confirm modal -->
    <div class="modal fade" id="rejectTaskConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-danger" id="exampleModalLabel">Confirm Reject</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h6 class="text-warning">Are you sure to reject task No. <span class="task-id_title text-primary"></span></h6>
                <div class="form-group">
                    <label class="text-primary">Note:</label>
                    <input type="text" name="reject-task_note" id="reject-task_note" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-primary">New Deadline:</label>
                    <input type="datetime-local" class="form-control" id="reject-task_new-deadline">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger task-reject_confirmed-btn" >Confirmed!</button>
                <!-- onclick="cancelConfirmed()" -->
            </div>
            </div>
        </div>
    </div>
    <!-- Large modal -->
    <div class="modal fade add-task_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="alert alert-danger alert-dismissable add-task_alert-fail mt-2 mx-4 hide">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Failed!</strong> An unknown eror occured. Please try again later.
        </div>

        <div class="alert alert-success alert-dismissable add-task_alert-success mt-2 mx-4 hide">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Update Successfully!!</strong>
        </div>
        <div class="modal-dialog modal-lg">

            <div class="modal-content">
                <div class="row pt-2 px-4">
                    <div class="col-md-6 col-sm-0">
                        <div class="form-group add-task-modal_title">
                            <label for="">Task title</label>
                            <input type="text" name="task-title" class="form-control title-input">
                            <span class="error-msg text-danger"></span>
                        </div>

                        <!-- <div class="form-group add-task-modal_start-time">
                            <label for="">Start time</label>
                            <input type="date" name = "start-time" class="form-control start-time">
                            <span class="error-msg text-danger"></span>
                        </div> -->

                        <div class="form-group add-task-modal_deadline">
                            <label for="">Deadline</label>
                            <input type="datetime-local" name = "deadline" class="form-control deadline">
                            <span class="error-msg text-danger"></span>
                        </div>

                        <div class="form-group add-task-modal_assign-to" >
                            <label for="">Assign to</label>
                            <input  type="text" name = "assign-to" class="form-control search-bar" placeholder="Employee username">
                            <span class="error-msg text-danger"></span>
                            <ul id="suggestions" class="list-group my-2">

                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <div class="rich-text-editor form-group add-task-modal_summernote">
                            <label for="">Task Description</label>
                            <textarea name="task-desc" id="summernote" cols="30" rows="10">
                            </textarea>
                            <span class="error-msg text-danger"></span>
                        </div> 
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary add-task-btn">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    


    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    <script src="main.js"></script>
</body>
</html>