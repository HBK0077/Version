const posts = [
    {title:"Post One", body:"This is post one"},
    {title:"Post Two", body:"This is post two"}
];

function getPostsArray(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post, index)=>{
            output+=`<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost = async() =>{
    const getPost = new Promise((reslove, reject)=>{
        setTimeout(()=>reslove(posts.push("Post Three")),2000);
    });

    const delPost = new Promise((reslove, reject)=>{
        setTimeout(()=>reslove(posts.pop()), 3000);
    });

    let postt = await getPost;

    let delpostt = await delPost;

    return postt;
}

createPost().then(getPostsArray)
.then((m)=>console.log(`Heloo ${m}`))
.catch(er=>console.log(er));
