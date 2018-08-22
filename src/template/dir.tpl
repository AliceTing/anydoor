<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
    <style>
        body{margin: 30px;}
        a{display: block;margin: 10px;}
        a img{display: inline-block;width: 24px;height: 24px;vertical-align: middle;margin-right: 10px;border-radius: 50%;background-color: #ccc;}
    </style>
</head>
<body>
    {{#each files}}
        <a href="{{../dir}}/{{file}}"><img src="{{icon}}" />{{file}}</a>
    {{/each}}
</body>
</html>
