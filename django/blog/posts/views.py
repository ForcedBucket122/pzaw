from django.http import HttpResponse,HttpResponseNotFound
from django.shortcuts import render


posts=[
    {
        "id":0,
        "title":"Poznajemy język Python",
        "content":"Python - język pogramowania wysokiego poziomu",
    },
    {
        "id":1,
        "title":"Poznajemy język C#",
        "content":"C# - język pogramowania wysokiego poziomu",
    },
    {
        "id":2,
        "title":"Poznajemy język JavaScript",
        "content":"JavaScript - język pogramowania wysokiego poziomu",
    },
    {
        "id":3,
        "title":"Poznajemy język PHP",
        "content":"PHP - język pogramowania wysokiego poziomu",
    },
]

def helloWorld(request):
    return HttpResponse("Hello World")

def home(request): 
    html="" 
    for post in posts: 
        html += f''' 
            <div> 
               <a href="/post/{post["id"]}/">  
               <h1> {post["id"]} - {post["title"]} </h1></a> 
                <p> {post["content"]}</p> 
            </div> 
        ''' 
        
    return render(request,'posts/home.html',{"posts":posts})

def post(request, id): 
    valid_id=False 
    html="" 
    for post in posts: 
        if post['id']==id: 
            post_dict = post 
            valid_id=True 
            break 
    if valid_id: 
        html += f''' 
            <h1>{post_dict['title']}</h1> 
            <p>{post_dict['content']}</p> 
        ''' 
        return HttpResponse(html) 
    else: 
        return HttpResponseNotFound("Post nie znaleziony") 