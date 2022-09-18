# RESTful API
Representational State Transfer (REST) is an architecture style for designing APIs. This includes using the HTTP request verbs (get, post, put, patch, delete) and use specific pattern of routes/endpoint urls. 

## RESTful Routing
| HTTP Verbs | /articles | /articles/office-supplies |
| ----------- | ----------- | ----------- |
| GET | Fetches all the articles | Fetches the article on office-supplies | 
| POST | Creates one new article | - | 
| PUT | - | Updates the article on office-supplies | 
| PATCH | - | Updates the article on office-supplies | 
| DELETE | Deletes all the articles | Deletes the article on office-supplies | 

## Studio 3T (previously Robo 3T)
`https://robomongo.org/` to download Robo 3T. Register and sign in. Create new manual connection with default address `localhost:27017`. On the left pane, right click on the connection name and click on `Add Database...`, and create a `wikiDB` database. Right click on `Collecitons` in the `wikiDB` database, and `Add Collection...`, and create `articles` collection. Right click `articles` and `Open Collection Tab`. Click the `Add Document` icon in the middle bar of icons. Add
```
{
    "title" : "REST",
    "content" : "Representational State Transfer (REST) is an architecture style for designing APIs."
}

```
Now `db.getCollection('articles').find({})` shows this document. Similarly, add a few more documents. You can do this in one window. 

## Get
Use Postman to test APIs. 
Get all articles: 
```
app.route("/articles")

.get(function(req, res){
  Article.find(function(err, foundArticles){
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
})
```
Get a specific article:
```
app.route("/articles/:articleTitle")

.get(function(req, res){

  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (foundArticle) {
      res.send(foundArticle);
    } else {
      res.send("No articles matching that title was found.");
    }
  });
})
```

## Post
Post a new article: 
```
.post(function(req, res){

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err){
    if (!err){
      res.send("Successfully added a new article.");
    } else {
      res.send(err);
    }
  });
})
```
## Put
Put a specific article:
```
.put(function(req, res){

  Article.update(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
      if(!err){
        res.send("Successfully updated the selected article.");
      }
    }
  );
})

```

## Delete
Delete all articles:
```
.delete(function(req, res){

  Article.deleteMany(function(err){
    if (!err){
      res.send("Successfully deleted all articles.");
    } else {
      res.send(err);
    }
  });
});
```
Delete a specific article:
```
.delete(function(req, res){

  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err){
      if (!err){
        res.send("Successfully deleted the corresponding article.");
      } else {
        res.send(err);
      }
    }
  );
});
```

# Patch
Patch a specific Article:
```
.patch(function(req, res){

  Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err){
      if(!err){
        res.send("Successfully updated article.");
      } else {
        res.send(err);
      }
    }
  );
})
```

















