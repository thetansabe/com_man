<?php 
    require_once('chief_page-header.php');
?>
    <div class="chief-page_main chief_attendence-manage">
        <div class="table-responsive">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Absent Day</th>
                        <th scope="col">Prove</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- <tr>
                        <th scope="row">1</th>
                        <td>nguyen van a</td>
                        <td>nguyenvana</td>
                        <td>nghi benh</td>
                        <td>3</td>
                        <td><a href="" download>null</a></td>
                        <td>
                            <button class="btn btn-success">Approve</button>
                            <button class="btn btn-danger">Reject</button>
                        </td>
                    </tr> -->
                </tbody>
            </table>
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