<?php 
    require_once('chief_page-header.php');
?>
    <div class="chief-page_main employee-page_attendence">
        <div class="emp_user-name hide"><?=$userName?></div>
        <div class="row m-2">
            <div class="col-md-6 col-sm-6">
                <button class="btn btn-primary absent-request_btn" data-toggle="modal" data-target="#openAbsentReq">
                    <i class="fas fa-plus text-white"></i> Absent Request
                </button>
            </div>
            <div class="col-md-6 col-sm-6 text-secondary">
                Total Absents: <span class="total-absent"></span>/15
            </div>
        </div>

        <div class="absent-history mx-4">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Absent Reason</th>
                    <th scope="col">Absent Days</th>
                    <th scope="col">Request Date</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>

    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#openAbsentReq">
    Launch demo modal
    </button> -->

    <!-- Modal -->
    <div class="modal fade" id="openAbsentReq" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Absent Request</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="rich-text-editor form-group add-request_absent">
                    <label for="">Reason:</label>
                    <textarea name="emp_submit-text" class = "absent-reason_submit" id="summernote" cols="30" rows="20">
                    </textarea>
                    <span class="error-msg text-danger"></span>
                </div> 

                <div class="form-group">
                    <label for="absent-day_input">Absent Day:</label>
                    <input type="number" class="form-control" name="absent-day_input" id="absent-day_input" min = "1" max = "12">
                </div>

                <div class="custom-file">
                    <label class="custom-file-label" for="prove">Attach files</label>
                    <input 
                        type="file" 
                        name = "file-upload" 
                        class="custom-file-input" 
                        id="prove" 
                        
                    >
                    <span class="text-danger absent-request_error-msg"></span>
                    <span class="text-success absent-request_success-msg"></span>
                </div>   

                <div class="progress mt-2" style="height: 10px;">
                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-primary absent-form_submit" onclick="handleAbsentRequest()">Submit</button>
            </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    <script src="../main.js"></script>
</body>
</html>