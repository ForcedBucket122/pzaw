from django.http import HttpResponse,HttpResponseNotFound
from django.shortcuts import render

products = [
    {
        "id": 1,
        "name": "Laptop Lenovo",
        "content": "14-calowy laptop z procesorem Intel i5 i 8GB RAM",
        "price": 2999.99
        # "img":"C:\Users\Student\Downloads\laptop.jpg"
    },
    {
        "id": 2,
        "name": "Smartfon Samsung",
        "content": "Smartfon z ekranem AMOLED i aparatem 64MP",
        "price": 2199.00
    },
    {
        "id": 3,
        "name": "Słuchawki Sony",
        "content": "Bezprzewodowe słuchawki z redukcją szumów",
        "price": 799.50
    },
    {
        "id": 4,
        "name": "Monitor LG",
        "content": "27-calowy monitor 4K UHD z HDR",
        "price": 1499.90
    },
    {
        "id": 5,
        "name": "Klawiatura mechaniczna",
        "content": "Klawiatura z podświetleniem RGB i przełącznikami Cherry MX",
        "price": 399.00
    }
]


def home(request):
    html = '''
    <html>
    <head><title>Lista produktów</title></head>
    <body>
        <h1>Produkty</h1>
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>ID</th>
                <th>Nazwa</th>
                <th>Opis</th>
                <th>Cena (PLN)</th>
            </tr>
    '''
    for product in products:
        html += f'''
            <tr>
                <td>{product["id"]}</td>
                <td>{product["name"]}</td>
                <td>{product["content"]}</td>
                <td>{product["price"]:.2f}</td>
                
            </tr>
        '''
    html += '''
        </table>
    </body>
    </html>
    '''
    return render(request,'article/home.html',{"products":product})
