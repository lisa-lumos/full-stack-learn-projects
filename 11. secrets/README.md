# Authentication & Security

## Level 1 - Username and Password Only
It is not safe to store password as plain text in the database. Because once the database got hacked, the password will get exposed. Not to mention that many people reuse their passwords.

## Level 2 - Database Encryption
Could use Ceasar Cipher. Could use `mongoose-encryption` package. 
```
const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

const secret = "Thisisourlittlesecret.";
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });
```
However, if someone could hack into your database, and also have your js file, they can find your secret and use the same package to get the plain text version of the password. 

So, could use environment variables to keep secrets safe. The npm package is called `dotenv`. 

## Level 3 - Hashing with md5
We could hash our passwords. Hash functions are designed to be nearly impossible to go backward. Hashing can be done using the `md5` package. 

This is the level of security that most websites are at. The problem is, the same password always have the same hash. Hackers can use a hash table to store all the commonly used passwords and their hashes. 

## Level 4 - Hashing and Salting with bcrypt
A salt is a random set of characters that combined with the original password alltogether to generate the hash. `bcrypt` is valued because it is incredibly slow, so it is a lot harder for a hacker to generate the precomputed hash tables. You can also decide how many rounds of salting applied to the password.  
```
bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
  const newUser =  new User({
    email: req.body.username,
    password: hash
  });
  newUser.save(function(err){
    if (err) {
      console.log(err);
    } else {
      res.render("secrets");
    }
  });
});
```

## Level 5 - Cookies and Sessions
`Cookies` are stored in your browser, so websites can identify you and your  activities. For example, if we go to Amazon.coma and put an item in the cart, Amazon creates a cookie and stores in your browser. Next time you go to Amazon, you still see the item in your cart. A `session` is a period of time when a browser interact with the server. We can use `passport` package to use cookies and sessions in javascript. 

## Level 6 - Google OAuth 2.0 Authentication
Open Authorization (OAuth). By using OAuth, we can access information on third party websites such as their friends, emails or their contats on Gmail. Large companies have engineers that are dedicated to implement levels of security for the authentication on their website. We could simply deligate the task of authentication to these large companies. So then everytime we login the user, we simply ask them to login on Facebook and Facebook will then authenticate them using their own secure methods. And once that is done, Facebook sends us back a message saying that "This user is authenticated. They have their correct usename and passwords, so go ahead and authenticate them as well". In this way we have less liability. 































