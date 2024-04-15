var newWindow = window.open("", "", "width=300,height=250");

newWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Banner</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <script src="path/publisher_ad/banner.js"></script>
</body>
</html>
`);

newWindow.document.close();
