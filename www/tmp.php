<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="/style.css"> <!-- Sử dụng link tuyệt đối tính từ root, vì vậy có dấu / đầu tiên -->
	<title>Home Page</title>
</head>

<body>

	<div class="container">
		<h3 class="mt-3 mb-3">Welcome! Hãy rê chuột lên chữ này</h3>
		<button id="test" class="btn btn-primary">Hãy click vào đây</button>
		<div class="my-3">
			<a href="/admin/db.php">Xem database</a>
		</div>
		<div>
			<!-- Sử dụng link tuyệt đối tính từ root, vì vậy có dấu / đầu tiên -->
			<img src="/images/tdt-logo.png" />
			<p>Đây là ảnh mẫu, lấy từ thư mục images tại web root.</p>
		</div>

		<p class="mt-3">Nội dung bên dưới được in bằng PHP</p>
		<ul class="list-group">
			<?php
				for ($i = 0; $i < 20; $i++)
				{
					$number = $i + 1;
					?>
						<li class="list-group-item">Phần tử thứ <?= $i ?></li>
					<?php
				}
			?>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script src="/main.js"></script> <!-- Sử dụng link tuyệt đối tính từ root, vì vậy có dấu / đầu tiên -->
</body>

</html>