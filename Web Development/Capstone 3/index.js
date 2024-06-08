import express from "express";
import bodyParser from "body-parser";

function Headlines(title,description,category_name,category_color,date,image,link) {
    this.title = title;
    this.description=description;
    this.category={name:category_name,color:category_color};
    this.date=date;
    this.image=image;
    this.link=link;
}
function BlogPosts(title,date,author,image,abstract,brief,subtopics,summary){
    this.title=title;
    this.date=date;
    this.author=author;
    this.image=image;
    this.abstract=abstract;
    this.brief=brief;
    this.subtopics=subtopics;
    this.summary=summary;
}
function SubTopic(title,text){
    this.title=title;
    this.text=text;
}
function About(text) {
    this.text=text;
}
function RecentPosts(title,date,image,link) {
    this.title=title;
    this.date=date;
    this.image=image;
    this.link=link;
}
// first is the major headline no need for category
let headlinesArray=[
    new Headlines("Title of a longer featured blog post","Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.","none","none","none","none","none"),
    new Headlines("Featured post","This is a wider card with supporting text below as a natural lead-in to additional content","world","skyblue","Nov 12","Thumbnail","none"),
    new Headlines("Post title","This is a wider card with supporting text below as a natural lead in to additional content.","Design","Green","Nov 11","none","none","none","none","none"),
]

let blogpostsArray=[
    new BlogPosts("Sample blog post","2021-01-01","Mark","none","This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.","This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",[new SubTopic("Blockquotes","This is an example blockquote in action: \n Quoted text goes here. \n This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."),new SubTopic("Example Lists","This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:\n" + "\n" + "First list item\n" + "Second list item with a longer description\n" + "Third list item to close it out\n" + "And this is an ordered list:\n" + "\n" + "First list item\n" + "Second list item with a longer description\n" + "Third list item to close it out\n" + "And this is a definition list:\n" + "\n" + "HyperText Markup Language (HTML)\n" + "The language used to describe and define the content of a Web page\n" + "Cascading Style Sheets (CSS)\n" + "Used to describe the appearance of Web content\n" + "JavaScript (JS)\n" + "The programming language used to build advanced Web sites and applications")],"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."),
    new BlogPosts("Another blog post","2020-12-23","Jacob","none","This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.","This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",[new SubTopic("Example table","And don't forget about tables in these posts:")],"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."),
    new BlogPosts("New feature","2020-12-14","Chris","none","This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.","",[],"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.")
]
let about=new About("Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.");
let recentPostsArray = [
    new RecentPosts("Example blog post title","December 23, 2020","None"),
    new RecentPosts("This is another blog post title","December 23, 2120","None"),
    new RecentPosts("Longer blog post title: This one has multiple lines","December 23, 2320","None"),
]

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/world", (req, res) => {
    res.render("index.ejs",{page:"World",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
});
app.get("/us", (req, res) => {
    res.render("index.ejs",{page:"US",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/technology",(req, res) => {
    res.render("index.ejs",{page:"Technology",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/design", (req, res) => {
    res.render("index.ejs",{page:"Design",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/culture", (req, res) => {
    res.render("index.ejs",{page:"Culture",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/business", (req, res) => {
    res.render("index.ejs",{page:"Business",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/politics", (req, res) => {
    res.render("index.ejs",{page:"Politics",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/opinion", (req, res) => {
    res.render("index.ejs",{page:"Opinion",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/science", (req, res) => {
    res.render("index.ejs",{page:"Science",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/health", (req, res) => {
    res.render("index.ejs",{page:"Health",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/style", (req, res) => {
    res.render("index.ejs",{page:"Style",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/travel", (req, res) => {
    res.render("index.ejs",{page:"Travel",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});
})

app.get("/createPost", (req, res) => {
    res.render("index.ejs",{page:"Post"});
})
app.get("/editSelect", (req, res) => {
    res.render("index.ejs",{page:"Select",blogposts:blogpostsArray})
})

app.post("/darkPost",(req, res) => {
    let myVar = req.body;
    let passingVar;
    for (let i = 0; i < blogpostsArray.length; i++) {
        if (blogpostsArray[i].title === myVar.Blogs) {
            passingVar = (blogpostsArray[i]);
            break;
        }
    }
    res.render("index.ejs",{page:"Edit",selectedBlog:passingVar})
})

app.post("/editPost", (req, res) => {
    res.render("index.ejs",{page:"Edit"});
})
app.post("/submitPost", (req, res) => {
    console.log(req.body);
    let retrievedSubtopics = JSON.parse(req.body.subtopics[1]);
    let newSubtopic = [];
    for (let i = 0; i < retrievedSubtopics.length; i++) {
        newSubtopic.push(new SubTopic(retrievedSubtopics[i].title,retrievedSubtopics[i].content));
    }
    // let newSubtopic = JSON.parse(req.body.subtopics[1]).map(sub => new SubTopic(sub.title, sub.content));
    blogpostsArray.unshift(new BlogPosts(req.body.title,req.body.date,req.body.author,req.body.image,req.body.abstract,req.body.brief,newSubtopic,req.body.summary));
    res.render("index.ejs",{page:"World",headlines:headlinesArray,blogposts:blogpostsArray,about:about,recentPosts:recentPostsArray});

})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

